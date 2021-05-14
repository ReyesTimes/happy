import initVideo from "./video";

import "./example.scss";

(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    //do work
    const videosListWrp = document.querySelector(".videosListWrp");
    const leftButton = document.querySelector(".leftButton");
    const rightButton = document.querySelector(".rightButton");

    let counter = 1;

    initVideo();

    leftButton.addEventListener("click", function () {
      moveContainer("left");
    });

    rightButton.addEventListener("click", function () {
      moveContainer("right");
    });

    function moveContainer(side) {
      if (isAlowedToMove(side, counter)) {
        if (side === "left") {
          counter = counter - 1;
        }

        const translate = counter * 265 - (side === "left" ? 265 : 0);
        videosListWrp.style.transform = `translateX(-${translate}px)`;

        if (side === "right") {
          counter = counter + 1;
        }
      }
    }

    function isAlowedToMove(side, counter) {
      return (
        (side === "left" && counter > 1) || (side === "right" && counter < 3)
      );
    }
  });
})();
