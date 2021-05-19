import Video from "./js/video";
import initOpenMenu from "./js/menu";

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    new Video();
    initOpenMenu();
  });
})();
