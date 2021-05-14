export default function initVideo() {
  const videos = document.querySelectorAll("video");

  videos.forEach((video) => {
    video.addEventListener("click", function (e) {
      e.target.play();
    });
  });
}
