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

  // 모바일 아코디언: 화살표 버튼만 클릭 시 열기/닫기 (제목·본문 터치·스크롤 시에는 안 닫힘)
  function setupCardAccordions() {
    var accordions = document.querySelectorAll(".card-accordion");
    var mq = window.matchMedia("(max-width: 900px)");

    accordions.forEach(function (details) {
      var summary = details.querySelector(".card-accordion__summary");
      if (!summary) return;
      var btn = summary.querySelector(".card-accordion__toggle");
      if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.className = "card-accordion__toggle";
        btn.setAttribute("aria-label", "열기/닫기");
        btn.setAttribute("aria-expanded", details.open);
        summary.appendChild(btn);
      }
      btn.setAttribute("aria-expanded", details.open);

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        details.open = !details.open;
        btn.setAttribute("aria-expanded", details.open);
      });

      summary.addEventListener("click", function (e) {
        if (!mq.matches) return;
        if (e.target === btn || btn.contains(e.target)) return;
        e.preventDefault();
        e.stopPropagation();
      }, true);
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupCardAccordions);
  } else {
    setupCardAccordions();
  }

  if (typeof initI18n === "function") initI18n();
})();
