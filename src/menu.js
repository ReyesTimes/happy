export default function initOpenMenu() {
  const btn = document.querySelector(".close");
  const menu = document.querySelector(".menu");
  addClickEvnt(btn, menu);
}

function addClickEvnt(btn, menu) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("close")) {
      btn.classList.remove("close");
      btn.classList.add("open");
    } else {
      btn.classList.add("close");
      btn.classList.remove("open");
    }

    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  });
}
