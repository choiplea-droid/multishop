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

  // 모바일 아코디언: 화살표만 클릭되도록 처리
  const cardAccordions = document.querySelectorAll(".card-accordion");
  if (cardAccordions.length) {
    cardAccordions.forEach(function (details) {
      const summary = details.querySelector(".card-accordion__summary");
      if (!summary) return;

      // 화살표 버튼이 없으면 생성
      let arrow = summary.querySelector(".card-accordion__arrow");
      if (!arrow) {
        arrow = document.createElement("button");
        arrow.type = "button";
        arrow.className = "card-accordion__arrow";
        arrow.setAttribute("aria-label", "열기/닫기");
        summary.appendChild(arrow);
      }

      // summary 영역 전체 클릭 시 기본 토글 막기
      summary.addEventListener(
        "click",
        function (e) {
          if (!e.target.closest(".card-accordion__arrow")) {
            e.preventDefault();
          }
        },
        true
      );

      // 화살표 버튼 클릭 시에만 토글
      arrow.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        details.open = !details.open;
      });
    });
  }

  if (typeof initI18n === "function") initI18n();
})();
