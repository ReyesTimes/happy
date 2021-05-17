import initVideo from "./video";
import initOpenMenu from "./menu";

import "./example.scss";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const videosListWrp = document.querySelector(".videosListWrp");
    const leftButton = document.querySelector(".leftButton");
    const rightButton = document.querySelector(".rightButton");
    const filler = document.querySelector(".filler");

    let counter = 1;

    initVideo(setCounter);
    initEvnts();
    initOpenMenu();

    function isAlowedToMove(side, counter) {
      return (
        (side === "left" && counter > 1) || (side === "right" && counter < 3)
      );
    }

    function setCounter(n) {
      if (counter !== parseInt(n) && n < 4) {
        const side = counter < n ? "left" : "right";
        const width = getVideoWidth();
        counter = parseInt(n);

        translateContainer(width, side);
        filler.style.width = `${counter * 33.33333333}%`;
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
        filler.style.width = "33%";
        counter = 1;
      });
    }

    function moveContainer(side) {
      if (isAlowedToMove(side, counter)) {
        const width = getVideoWidth();
        if (side === "left") {
          counter = counter - 1;
        }

        translateContainer(width, side);

        if (side === "right") {
          counter = counter + 1;
        }

        filler.style.width = `${counter * 33.33333333}%`;
      }
    }
  });
})();
