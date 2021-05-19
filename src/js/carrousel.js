import isMobile from "./isMobile";

export default class Carrousel {
  constructor() {
    this.$videosListWrp = document.querySelector(".videosListWrp");
    this.$leftButton = document.querySelector(".leftButton");
    this.$rightButton = document.querySelector(".rightButton");
    this.$filler = document.querySelector(".filler");
    this.$mainCarousel = document.querySelector(".mainCarousel");

    this.counter = 1;
    this.max_carrousel_moves;
    this.fillerPercentage;

    this.getMaxCarrouselMoves();
    this.initEvents();
  }

  getMaxCarrouselMoves() {
    if (window.innerWidth < 1020) {
      this.max_carrousel_moves = 5;
      this.fillerPercentage = 20;
    } else {
      this.max_carrousel_moves = 4;
      this.fillerPercentage = 25;
    }
  }

  initEvents() {
    this.$leftButton.addEventListener("click", () => {
      this.clickEvntCarrouseEvnt("left");
    });

    this.$rightButton.addEventListener("click", () => {
      this.clickEvntCarrouseEvnt("right");
    });

    window.addEventListener("resize", () => {
      this.resizeEvnt();
    });

    if (isMobile()) {
      this.$mainCarousel.addEventListener(
        "scroll",
        (e) => {
          const scrollLeft = e.target.scrollLeft;
          const offsetWidth = this.$videosListWrp.offsetWidth;
          const div_number =
            parseFloat((scrollLeft / offsetWidth).toFixed(2)) * 100;

          this.$filler.style.width = `${25 + div_number}%`;
        },
        false
      );
    }
  }

  resizeEvnt() {
    this.$videosListWrp.style.transform = `translateX(0px)`;
    this.$filler.style.width = "25%";
    this.$leftButton.classList.add("opacity");
    this.$rightButton.classList.remove("opacity");

    this.counter = 1;

    this.getMaxCarrouselMoves();
  }

  clickEvntCarrouseEvnt(side) {
    if (this.isAlowedToMove(side)) {
      this.leftSide(side);
      this.translateContainer(side);
      this.rightSide(side);
      this.changeFillerWidth();
    }
  }

  translateContainer(side) {
    const width = this.getVideoWidth();
    const translate = this.counter * width - (side === "left" ? width : 0);
    this.$videosListWrp.style.transform = `translateX(-${translate}px)`;
  }

  getVideoWidth() {
    return this.$videosListWrp.querySelector(".video").offsetWidth + 5;
  }

  leftSide(side) {
    if (side === "left") {
      this.counter = this.counter - 1;
      this.$rightButton.classList.remove("opacity");

      if (this.counter === 1) {
        this.$leftButton.classList.add("opacity");
      }
    }
  }

  rightSide(side) {
    if (side === "right") {
      this.counter = this.counter + 1;
      this.$leftButton.classList.remove("opacity");

      if (this.counter === this.max_carrousel_moves) {
        this.$rightButton.classList.add("opacity");
      }
    }
  }

  isAlowedToMove(side) {
    return (
      (side === "left" && this.counter > 1) ||
      (side === "right" && this.counter < this.max_carrousel_moves)
    );
  }

  changeFillerWidth() {
    this.$filler.style.width = `${this.counter * this.fillerPercentage}%`;
  }

  setCounter(n) {
    if (this.counter !== parseInt(n) && n < this.max_carrousel_moves) {
      const side = this.counter < n ? "left" : "right";
      this.counter = parseInt(n);

      this.translateContainer(side);
      this.changeFillerWidth();
    }
  }
}
