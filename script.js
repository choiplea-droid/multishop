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

  // 모바일: 탭 방식 (스크롤해도 안 닫힘)
  (function () {
    var BREAKPOINT = 900;
    var mq = window.matchMedia("(max-width: " + BREAKPOINT + "px)");

    function setupTabs(columns) {
      if (columns.classList.contains("card-tabs__panels")) return;

      var wrapper = document.createElement("div");
      wrapper.className = "card-tabs";
      columns.parentNode.insertBefore(wrapper, columns);
      wrapper.appendChild(columns);
      columns.classList.add("card-tabs__panels");

      var details = columns.querySelectorAll(".card-accordion");

      var bar = document.createElement("div");
      bar.className = "card-tabs__bar";
      var tab0 = document.createElement("button");
      tab0.type = "button";
      tab0.className = "card-tabs__tab is-active";
      tab0.setAttribute("aria-selected", "true");
      tab0.textContent = details[0] ? (details[0].querySelector(".card-accordion__summary") && details[0].querySelector(".card-accordion__summary").textContent.trim()) || "현금 결제" : "1";
      var tab1 = document.createElement("button");
      tab1.type = "button";
      tab1.className = "card-tabs__tab";
      tab1.setAttribute("aria-selected", "false");
      tab1.textContent = details[1] ? (details[1].querySelector(".card-accordion__summary") && details[1].querySelector(".card-accordion__summary").textContent.trim()) || "선불카드 결제" : "2";
      bar.appendChild(tab0);
      bar.appendChild(tab1);
      wrapper.insertBefore(bar, columns);

      function goTo(i) {
        details.forEach(function (d, j) {
          d.classList.toggle("is-active", j === i);
        });
        bar.querySelectorAll(".card-tabs__tab").forEach(function (t, j) {
          t.classList.toggle("is-active", j === i);
          t.setAttribute("aria-selected", j === i ? "true" : "false");
        });
      }

      tab0.addEventListener("click", function () {
        goTo(0);
      });
      tab1.addEventListener("click", function () {
        goTo(1);
      });

      goTo(0);
    }

    function initTabs() {
      if (!mq.matches) return;
      var columns = document.querySelector(".card-columns");
      if (columns) setupTabs(columns);
    }

    mq.addEventListener("change", initTabs);
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTabs);
    } else {
      initTabs();
    }
  })();

  if (typeof initI18n === "function") initI18n();
})();
