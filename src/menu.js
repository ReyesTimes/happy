export default function initOpenMenu() {
  const btn = document.querySelector(".open");
  const menu = document.querySelector(".menu");
  addClickEvnt(btn, menu);
}

function addClickEvnt(btn, menu) {
  btn.addEventListener("click", function () {
    if (menu.classList.contains("hide")) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  });
}
