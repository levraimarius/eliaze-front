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

function formatDate(timestamp) {
  if (!timestamp) return "Date inconnue";

  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

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
        setIsLastPage(data.length === 0 || data.length < 12);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [currentPage]);

  const handlePreviousPage = () => {
    try {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    } catch (error) {
      console.error("Error handling previous page:", error);
    }
  };

  const handleNextPage = () => {
    try {
      if (!isLastPage) {
        setCurrentPage(currentPage + 1);
      }
    } catch (error) {
      console.error("Error handling next page:", error);
    }
  };

  const openModal = (town) => {
    setSelectedTown(town);
  };

  const closeModal = () => {
    setSelectedTown(null);
  };

  return (
    <div className="tn-content">
      <Title text="Villes et nations du serveur" />
      <div className="arrow-pages">
        <Icon
          path={MemoryChevronLeftCircle}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          size={1}
          className={`arrow-icon ${currentPage === 1 ? "disabled" : ""}`}
        />
        <Icon
          path={MemoryChevronRightCircle}
          onClick={handleNextPage}
          disabled={isLastPage}
          size={1}
          className={`arrow-icon ${isLastPage ? "disabled" : ""}`}
        />
      </div>

      <div className="cards">
        {towns.map((town) => (
          <div onClick={() => openModal(town)}>
            <Card key={town.name}>
              <h3 onClick={() => openModal(town)}>{town.name}</h3>
              <div className="tn-title">
                <img
                  src={`https://minotar.net/helm/${town.mayor}/32.png`}
                  alt={`Tête de ${town.mayor}`}
                  className="button-image"
                />
                <p>{town.mayor}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
      <Modal isOpen={!!selectedTown} onClose={closeModal}>
        {selectedTown && (
          <div>
            <div className="modal-tn-title">
              <h2>{selectedTown.name}</h2>
              <p>{selectedTown.neutral === 1 ? "(Pacifique)" : ""}</p>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Maire</th>
                    <td>{selectedTown.mayor}</td>
                  </tr>
                  <tr>
                    <th>Fondée le</th>
                    <td>{formatDate(selectedTown.registered)}</td>
                  </tr>
                  <tr>
                    <th>Fondée par</th>
                    <td>{selectedTown.founder}</td>
                  </tr>
                  <tr>
                    <th>Nation</th>
                    <td>
                      {selectedTown.nation
                        ? selectedTown.nation +
                          ", rejoint le " +
                          formatDate(selectedTown.joinedNationAt)
                        : "Aucune"}
                    </td>
                  </tr>
                  <tr>
                    <th>Liste des résidents</th>
                    <td>{selectedTown.residents}</td>
                  </tr>
                  <tr>
                    <th>Publique</th>
                    <td>{selectedTown.public === 0 ? "Oui" : "Non"}</td>
                  </tr>
                  <tr>
                    <th>Message du tableau</th>
                    <td>
                      {selectedTown.townBoard === ""
                        ? "Aucun"
                        : selectedTown.townBoard}
                    </td>
                  </tr>
                  <tr>
                    <th>Taxe</th>
                    <td>
                      {selectedTown.taxpercent === 1
                        ? selectedTown.taxes + "% de votre solde par jour"
                        : selectedTown.taxes + " écus par jour"}
                    </td>
                  </tr>
                  <tr>
                    <th>Hors la loi</th>
                    <td>
                      {selectedTown.outlaws === ""
                        ? "Aucun"
                        : selectedTown.outlaws.split("#").join(", ")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default TownAndNation;
