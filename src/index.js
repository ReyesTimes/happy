import createVideoClass from "./js/video";
import Carrousel from "./js/carrousel";
import initOpenMenu from "./js/menu";

import "./main.scss";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const Video = createVideoClass(SuperCarrousel);

    new Video();
    initOpenMenu();
  });
})();

class SuperCarrousel extends Carrousel {
  constructor() {
    super();

    this.fn = this.setCounter;
  }
}
