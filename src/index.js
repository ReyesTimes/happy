import initVideo from "./js/video";
import initOpenMenu from "./js/menu";

import "./main.scss";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const videosListWrp = document.querySelector(".videosListWrp");
    const leftButton = document.querySelector(".leftButton");
    const rightButton = document.querySelector(".rightButton");
    const filler = document.querySelector(".filler");
    let max_carrousel_moves;
    let fillerPercentage;
    let counter = 1;

    getMaxCarrouselMoves();
    initVideo(setCounter);
    initEvnts();
    initOpenMenu();

    function setCounter(n) {
      if (counter !== parseInt(n) && n < max_carrousel_moves) {
        const side = counter < n ? "left" : "right";
        const width = getVideoWidth();
        counter = parseInt(n);

        translateContainer(width, side);
        changeFillerWidth(filler, counter, fillerPercentage);
      }
    }

    function getVideoWidth() {
      return videosListWrp.querySelector(".video").offsetWidth + 5;
    }

    function translateContainer(width, side) {
      const translate = counter * width - (side === "left" ? width : 0);
      videosListWrp.style.transform = `translateX(-${translate}px)`;
    }

    function initEvnts() {
      leftButton.addEventListener("click", function () {
        moveContainer("left");
      });

      rightButton.addEventListener("click", function () {
        moveContainer("right");
      });

      window.addEventListener("resize", function () {
        videosListWrp.style.transform = `translateX(0px)`;
        filler.style.width = "25%";
        leftButton.classList.add("opacity");
        rightButton.classList.remove("opacity");
        counter = 1;

        getMaxCarrouselMoves();
      });
    }

    function moveContainer(side) {
      if (isAlowedToMove(side, counter, max_carrousel_moves)) {
        const width = getVideoWidth();
        if (side === "left") {
          counter = counter - 1;
          rightButton.classList.remove("opacity");

          if (counter === 1) {
            leftButton.classList.add("opacity");
          }
        }

        translateContainer(width, side);

        if (side === "right") {
          counter = counter + 1;
          leftButton.classList.remove("opacity");

          if (counter === 3) {
            rightButton.classList.add("opacity");
          }
        }

        changeFillerWidth(filler, counter, fillerPercentage);
      }
    }

    function getMaxCarrouselMoves() {
      if (window.innerWidth < 1020) {
        max_carrousel_moves = 5;
        fillerPercentage = 20;
      } else {
        max_carrousel_moves = 4;
        fillerPercentage = 25;
      }
    }
  });
})();

function changeFillerWidth(filler, counter, fillerPercentage) {
  filler.style.width = `${counter * fillerPercentage}%`;
}

function isAlowedToMove(side, counter, max_carrousel_moves) {
  return (
    (side === "left" && counter > 1) ||
    (side === "right" && counter < max_carrousel_moves)
  );
}
