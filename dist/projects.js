(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e,t;(function(e){var t=document.querySelectorAll(".video");t.forEach((function(c){var s=c.querySelector(".btn-play"),a=c.querySelector("video"),n=c.querySelector(".overlay"),r=c.dataset.id;s.addEventListener("click",(function(){o(a)?(a.pause(),s.style.opacity="1",n.style.opacity="1"):(a.play(),s.style.opacity="0",n.style.opacity="0"),function(e){t.forEach((function(t){if(t.dataset.id!==e){var o=t.querySelector(".btn-play"),c=t.querySelector("video");t.querySelector(".overlay").style.opacity="1",o.style.opacity="1",c.pause(),c.currentTime=0}}))}(r),e&&e(r)}))}));var o=function(e){return!!(e.currentTime>0&&!e.paused&&!e.ended&&e.readyState>2)}})(),e=document.querySelector(".open"),t=document.querySelector(".menu"),e.addEventListener("click",(function(){e.classList.contains("open")?(e.classList.remove("open"),e.classList.add("close")):(e.classList.add("open"),e.classList.remove("close")),t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")}))}))})();