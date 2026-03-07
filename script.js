(function () {
  // 방문자 수 바 (today / total) - 하루에 한 번만 카운트
  (function initVisitorBar() {
    var todayKey = "visitorDate";
    var todayCountKey = "visitorToday";
    var totalKey = "visitorTotal";
    var countedDateKey = "visitorCountedDate";
    var todayStr = new Date().toDateString();
    var alreadyCountedToday = localStorage.getItem(countedDateKey) === todayStr;

    var total = parseInt(localStorage.getItem(totalKey) || "0", 10);
    var lastDate = localStorage.getItem(todayKey);
    var today = parseInt(localStorage.getItem(todayCountKey) || "0", 10);
    if (lastDate !== todayStr) today = 0;

    if (!alreadyCountedToday) {
      total += 1;
      today += 1;
      localStorage.setItem(totalKey, total);
      localStorage.setItem(todayCountKey, today);
      localStorage.setItem(todayKey, todayStr);
      localStorage.setItem(countedDateKey, todayStr);
    }

    var bar = document.createElement("div");
    bar.className = "visitor-bar";
    bar.setAttribute("role", "status");
    bar.setAttribute("aria-live", "polite");
    var labelToday = typeof t === "function" ? t("visitorTodayLabel") : "오늘";
    var labelTotal = typeof t === "function" ? t("visitorTotalLabel") : "총 방문";
    bar.innerHTML =
      '<div class="visitor-bar__inner">' +
        '<div class="visitor-bar__item">' +
          '<span class="visitor-bar__label" data-i18n="visitorTodayLabel">' + labelToday + '</span>' +
          '<span class="visitor-bar__value visitor-bar__today">' + today + '</span>' +
        '</div>' +
        '<div class="visitor-bar__item">' +
          '<span class="visitor-bar__label" data-i18n="visitorTotalLabel">' + labelTotal + '</span>' +
          '<span class="visitor-bar__value visitor-bar__total">' + total + '</span>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(bar, document.body.firstChild);
  })();

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

  // 모바일: 탭 + 관련 내용만 표시 (스크롤로는 안 닫힘)
  (function () {
    var BREAKPOINT = 900;
    var mq = window.matchMedia("(max-width: " + BREAKPOINT + "px)");

    function setupTabsFor(columns) {
      if (!mq.matches) return;
      if (!columns) return;
      if (columns.parentNode && columns.parentNode.classList.contains("card-tabs")) return;

      var cards = columns.querySelectorAll(".card-accordion");
      if (cards.length < 2) return;

      var wrapper = document.createElement("div");
      wrapper.className = "card-tabs";
      columns.parentNode.insertBefore(wrapper, columns);
      wrapper.appendChild(columns);
      columns.classList.add("card-tabs__panels");

      var bar = document.createElement("div");
      bar.className = "card-tabs__bar";

      function goTo(activeIndex) {
        // 카드 표시/숨김
        cards.forEach(function (card, j) {
          card.classList.toggle("is-active", j === activeIndex);
        });
        // 탭 상태 업데이트
        var allTabs = bar.querySelectorAll(".card-tabs__tab");
        allTabs.forEach(function (t, j) {
          t.classList.toggle("is-active", j === activeIndex);
          t.setAttribute("aria-selected", j === activeIndex ? "true" : "false");
        });
        // 활성 카드 위치로 스크롤
        var target = cards[activeIndex];
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }

      function createTab(card, index) {
        var summary = card.querySelector(".card-accordion__summary");
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "card-tabs__tab" + (index === 0 ? " is-active" : "");
        btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
        if (summary) {
          var key = summary.getAttribute("data-i18n");
          if (key) btn.setAttribute("data-i18n", key);
          btn.textContent = summary.textContent.trim();
        } else {
          btn.textContent = String(index + 1);
        }
        btn.addEventListener("click", function () {
          goTo(index);
        });
        return btn;
      }

      cards.forEach(function (card, idx) {
        bar.appendChild(createTab(card, idx));
      });

      wrapper.insertBefore(bar, columns);
      // 초기에는 첫 번째 탭/카드 활성화
      goTo(0);
    }

    function initTabs() {
      var columnsList = document.querySelectorAll(".card-columns");
      columnsList.forEach(setupTabsFor);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initTabs);
    } else {
      initTabs();
    }

    mq.addEventListener("change", function () {
      if (mq.matches) initTabs();
    });
  })();

  if (typeof initI18n === "function") initI18n();
})();
