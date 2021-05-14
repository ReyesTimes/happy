import initVideo from "./video";

import "./example.scss";

(function () {
  document.addEventListener("DOMContentLoaded", function (event) {
    const videosListWrp = document.querySelector(".videosListWrp");
    const leftButton = document.querySelector(".leftButton");
    const rightButton = document.querySelector(".rightButton");
    const filler = document.querySelector(".filler");

    let counter = 1;

    initVideo();
    initEvnts();

    function isAlowedToMove(side, counter) {
      return (
        (side === "left" && counter > 1) || (side === "right" && counter < 3)
      );
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

      document
        .querySelector(".mainCarousel")
        .addEventListener("scroll", function (e) {
          const container = e.target;
          const width = container.scrollWidth - container.clientWidth;
          const percentage = container.scrollLeft / width;

          console.log(percentage);
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
