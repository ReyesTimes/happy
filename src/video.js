export default function initVideo(setCounter) {
  const videos = document.querySelectorAll(".video");

  videos.forEach((videoLi) => {
    const btn = videoLi.querySelector(".btn-play");
    const video = videoLi.querySelector("video");
    const overlay = videoLi.querySelector(".overlay");
    const id = videoLi.dataset.id;

    btn.addEventListener("click", function () {
      video.currentTime = 0;
      video.play();

      btn.style.opacity = "0";
      overlay.style.opacity = "0";

      restartStylesVideo(id);
      setCounter(id);
    });
  });

  function restartStylesVideo(id) {
    videos.forEach(function (videoLi) {
      if (videoLi.dataset.id !== id) {
        const btn = videoLi.querySelector(".btn-play");
        const video = videoLi.querySelector("video");
        const overlay = videoLi.querySelector(".overlay");

        overlay.style.opacity = "1";
        btn.style.opacity = "1";
        video.pause();
        video.currentTime = 0;
      }
    });
  }
}
