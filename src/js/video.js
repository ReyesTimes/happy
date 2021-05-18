import isMobile from "./isMobile";

export default function initVideo(fn) {
  const videos = document.querySelectorAll(".video");

  videos.forEach((videoLi) => {
    const btn = videoLi.querySelector(".btn-play");
    const video = videoLi.querySelector("video");
    const overlay = videoLi.querySelector(".overlay");
    const id = videoLi.dataset.id;

    addFinishedEvnt(video, btn, overlay);
    btn.addEventListener("click", function () {
      if (!isVideoPlaying(video)) {
        video.play();
        showActionVideo(btn, overlay, false);
      } else {
        video.pause();
        showActionVideo(btn, overlay);
      }

      restartStylesVideo(id);

      if (fn && !isMobile()) {
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

        showActionVideo(btn, overlay);
        video.pause();
        video.currentTime = 0;
      }
    });
  }
}

function isVideoPlaying(video) {
  return !!(
    video.currentTime > 0 &&
    !video.paused &&
    !video.ended &&
    video.readyState > 2
  );
}

function showActionVideo(btn, overlay, show = true) {
  const opacity = show ? "1" : "0";
  overlay.style.opacity = opacity;
  btn.style.opacity = opacity;
}

function addFinishedEvnt(video, btn, overlay) {
  video.addEventListener(
    "ended",
    function () {
      showActionVideo(btn, overlay);
      video.currentTime = 0;
      video.pause();
    },
    false
  );
}
