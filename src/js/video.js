export default (superclass = class SuperVideo {}) => {
  return class Video extends superclass {
    constructor() {
      super();
      this.$videos = document.querySelectorAll(".video");

      this.initVideo();
    }

    initVideo() {
      this.$videos.forEach(($videoEl) => {
        const $btn = $videoEl.querySelector(".btn-play");
        const $video = $videoEl.querySelector("video");
        const $overlay = $videoEl.querySelector(".overlay");
        const id = $videoEl.dataset.id;

        this.endedVideoEvnt($video, $btn, $overlay);
        this.clickVideoEvent($video, $btn, $overlay, id);
      });
    }

    endedVideoEvnt(video, $btn, $overlay) {
      video.addEventListener(
        "ended",
        () => {
          this.showActionVideo($btn, $overlay);
          video.currentTime = 0;
          video.pause();
        },
        false
      );
    }

    clickVideoEvent($video, $btn, $overlay, id) {
      $btn.addEventListener("click", () => {
        if (this.isVideoPlaying($video)) {
          $video.pause();
          this.showActionVideo($btn, $overlay);
        } else {
          $video.play();
          this.showActionVideo($btn, $overlay, false);
        }

        if (this.fn) {
          this.fn(id);
        }

        this.restartStyleVideos(id);
      });
    }

    showActionVideo($btn, $overlay, show = true) {
      const opacity = show ? "1" : "0";
      $overlay.style.opacity = opacity;
      $btn.style.opacity = opacity;
    }

    isVideoPlaying($video) {
      return !!(
        $video.currentTime > 0 &&
        !$video.paused &&
        !$video.ended &&
        $video.readyState > 2
      );
    }

    restartStyleVideos(id) {
      this.$videos.forEach(($videoEl) => {
        if ($videoEl.dataset.id !== id) {
          const $btn = $videoEl.querySelector(".btn-play");
          const $video = $videoEl.querySelector("video");
          const $overlay = $videoEl.querySelector(".overlay");

          this.showActionVideo($btn, $overlay);
          $video.pause();
          $video.currentTime = 0;
        }
      });
    }
  };
};
