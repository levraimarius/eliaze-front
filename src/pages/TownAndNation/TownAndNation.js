import React, { useEffect, useState } from "react";
import "../../assets/styles/global.scss";
import "./TownAndNation.scss";
import Title from "../../components/Title/Title";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import Icon from "@mdi/react";
import {
  MemoryChevronLeftCircle,
  MemoryChevronRightCircle,
} from "@pictogrammers/memory";

function TownAndNation() {
  const [towns, setTowns] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [selectedTown, setSelectedTown] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/villes-et-nations?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTowns(data);
        setIsLastPage(data.length === 0 || data.length < 10);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (!isLastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const openModal = (town) => {
    setSelectedTown(town);
  };

  const closeModal = () => {
    setSelectedTown(null);
  };

  return (
    <div>
      <Title text="Page des villes et nations" />
      <div className="arrow-pages">
        <Icon
          path={MemoryChevronLeftCircle}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          size={1}
          className="arrow-icon"
        />
        <Icon
          path={MemoryChevronRightCircle}
          onClick={handleNextPage}
          disabled={isLastPage}
          size={1}
          className="arrow-icon"
        />
      </div>

      <div className="cards-container">
        {towns.map((town) => (
          <Card key={town.id}>
            <h3 onClick={() => openModal(town)}>
              {town.name} {town.nation ? "- " + town.nation : ""}
            </h3>
            <p>{town.mayor}</p>

            <button onClick={() => openModal(town)}>Open Modal</button>
          </Card>
        ))}
      </div>
      <Modal isOpen={selectedTown !== null} onClose={closeModal}>
        {selectedTown && (
          <div>
            <h2>{selectedTown.name}</h2>
            <p>{selectedTown.description}</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default TownAndNation;
