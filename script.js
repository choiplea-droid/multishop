(function () {
  const header = document.querySelector(".header");
  const hamburger = document.querySelector(".hamburger");
  const fullMenu = document.querySelector(".full-menu");
  const closeMenu = document.querySelector(".close-menu");
  const menuLinks = document.querySelectorAll(".full-menu-list a");
  const langBtns = document.querySelectorAll(".lang-btn");

  function openMenu() {
    fullMenu.classList.add("is-open");
    hamburger.classList.add("is-open");
    fullMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeMenuFn() {
    fullMenu.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    fullMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", function () {
    if (fullMenu.classList.contains("is-open")) closeMenuFn();
    else openMenu();
  });

  closeMenu.addEventListener("click", closeMenuFn);

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeMenuFn();
    });
  });

  fullMenu.addEventListener("click", function (e) {
    if (e.target === fullMenu) closeMenuFn();
  });

  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = btn.getAttribute("data-lang");
      if (typeof setLanguage === "function") setLanguage(lang);
    });
  });

  if (typeof initI18n === "function") initI18n();
})();
