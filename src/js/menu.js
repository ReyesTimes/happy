export default function initOpenMenu() {
  const btn = document.querySelector(".open");
  const menu = document.querySelector(".menu");

  addClickEvnt(btn, menu);
  addSelectClass(menu);
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

function addSelectClass() {
  const contact_container = document.getElementById("contact");
  const contact_option = document.getElementById("contact-menu");

  if (window.location.href.includes("#contact")) {
    contact_option.classList.add("select");

    addScrollEvnt(contact_container, contact_option);
  } else if (window.location.href.includes("index.html")) {
    contact_option.addEventListener("click", function () {
      contact_option.classList.add("select");
      addScrollEvnt(contact_container, contact_option);
    });
  }
}

function addScrollEvnt(contact_container, contact_option) {
  document.addEventListener("scroll", function () {
    const line =
      contact_container.offsetTop - contact_container.offsetHeight - 300;
    if (window.scrollY < line) {
      contact_option.classList.remove("select");
    } else {
      contact_option.classList.add("select");
    }
  });
}
