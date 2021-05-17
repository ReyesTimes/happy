export default function initOpenMenu() {
  const btn = document.querySelector(".open");
  const menu = document.querySelector(".menu");
  addClickEvnt(btn, menu);
}

function addClickEvnt(btn, menu) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("open")) {
      btn.classList.remove("open");
      btn.classList.add("close");
    } else {
      btn.classList.add("open");
      btn.classList.remove("close");
    }

    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    } else {
      menu.classList.add("show");
    }
  });
}
