import React from "react";
import "../../assets/styles/global.scss";
import Header from "../../components/Header/Header";
import Grid from "../../components/Grid/Grid";
import Subtitle from "../../components/Subtitle/Subtitle";
import Image from "../../components/Image/Image";

import wallpaper from "../../assets/files/images/wallpaper.png";

function Homepage() {
  return (
    <div>
      <Header />
      <Grid>
        <div>
          <Subtitle text="Nos liens" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            neque vestibulum, placerat metus et, ullamcorper neque. Phasellus
            nec orci vestibulum, pretium erat non, varius ex. Sed sit amet
            lacinia sapien. Etiam sagittis arcu a interdum porta. Praesent quis
            eros eget nulla laoreet placerat. Fusce porttitor, velit semper
            porta tristique, libero est iaculis velit, interdum mattis lorem
            eros nec augue. Sed eleifend pharetra nisl, non vulputate tortor
            pretium eu. Duis nec suscipit est. Sed interdum elementum elit,
            eleifend dapibus turpis. Aenean nec quam nec urna accumsan
            sollicitudin. Nam eget commodo leo, at sodales diam. Mauris feugiat,
            nunc a fringilla venenatis, est justo efficitur leo, eu suscipit leo
            odio id nulla. Sed dapibus volutpat mollis. Nam laoreet vulputate
            dui ac placerat.
          </p>
        </div>
        <div>
          <Image src={wallpaper} alt="Fond Eliaze" />
        </div>
      </Grid>
    </div>
  );
}

export default Homepage;
