export default function initVideo(fn) {
  const videos = document.querySelectorAll(".video");

  videos.forEach((videoLi) => {
    const btn = videoLi.querySelector(".btn-play");
    const video = videoLi.querySelector("video");
    const overlay = videoLi.querySelector(".overlay");
    const id = videoLi.dataset.id;

    btn.addEventListener("click", function () {
      if (!isVideoPlaying(video)) {
        video.play();
        btn.style.opacity = "0";
        overlay.style.opacity = "0";
      } else {
        video.pause();
        btn.style.opacity = "1";
        overlay.style.opacity = "1";
      }

      restartStylesVideo(id);

      if (fn) {
        fn(id);
      }
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

  const isVideoPlaying = (video) =>
    !!(
      video.currentTime > 0 &&
      !video.paused &&
      !video.ended &&
      video.readyState > 2
    );
}
