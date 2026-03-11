(function () {
  // 방문자 수 바 (today / total) - GA4 API 값만 표시 (localStorage 카운트 제거)
  (function initVisitorBar() {
    var LOADING_TEXT = "...";

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
          '<span class="visitor-bar__value visitor-bar__today">' + LOADING_TEXT + '</span>' +
        '</div>' +
        '<div class="visitor-bar__item">' +
          '<span class="visitor-bar__label" data-i18n="visitorTotalLabel">' + labelTotal + '</span>' +
          '<span class="visitor-bar__value visitor-bar__total">' + LOADING_TEXT + '</span>' +
        '</div>' +
      '</div>';
    document.body.insertBefore(bar, document.body.firstChild);

    var apiBase = window.VISITOR_API_BASE || "";
    fetch(apiBase + "/api/visitors", { method: "GET" })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data && typeof data.today === "number" && typeof data.total === "number") {
          var todayEl = bar.querySelector(".visitor-bar__today");
          var totalEl = bar.querySelector(".visitor-bar__total");
          if (todayEl) todayEl.textContent = data.today;
          if (totalEl) totalEl.textContent = data.total;
        }
      })
      .catch(function () {
        // API 실패 시에도 localStorage로 폴백하지 않고 0으로 표시
        var todayEl = bar.querySelector(".visitor-bar__today");
        var totalEl = bar.querySelector(".visitor-bar__total");
        if (todayEl) todayEl.textContent = "0";
        if (totalEl) totalEl.textContent = "0";
      });
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

  // 이미지 클릭 시 원본 보기 (라이트박스)
  (function initImageLightbox() {
    var selector = "img.sub-figure__img";
    var overlay = null;
    var overlayImg = null;
    var overlayCap = null;
    var closeBtn = null;
    var lastActiveEl = null;

    function ensureOverlay() {
      if (overlay) return;

      overlay = document.createElement("div");
      overlay.className = "img-lightbox";
      overlay.setAttribute("role", "dialog");
      overlay.setAttribute("aria-modal", "true");
      overlay.setAttribute("aria-hidden", "true");

      overlay.innerHTML =
        '<button type="button" class="img-lightbox__close" aria-label="닫기">×</button>' +
        '<figure class="img-lightbox__figure">' +
          '<img class="img-lightbox__img" alt="" />' +
          '<figcaption class="img-lightbox__cap"></figcaption>' +
        '</figure>';

      document.body.appendChild(overlay);
      overlayImg = overlay.querySelector(".img-lightbox__img");
      overlayCap = overlay.querySelector(".img-lightbox__cap");
      closeBtn = overlay.querySelector(".img-lightbox__close");

      function close() {
        if (!overlay) return;
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-lightbox-open");
        if (overlayImg) overlayImg.src = "";
        if (overlayCap) overlayCap.textContent = "";
        if (lastActiveEl && typeof lastActiveEl.focus === "function") lastActiveEl.focus();
        lastActiveEl = null;
      }

      closeBtn.addEventListener("click", close);
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) close();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
      });

      overlay.__close = close;
    }

    function openFor(img) {
      if (!img || !img.getAttribute) return;
      ensureOverlay();

      var src = img.getAttribute("data-fullsrc") || img.currentSrc || img.src;
      if (!src) return;

      lastActiveEl = document.activeElement;
      if (overlayImg) overlayImg.src = src;
      if (overlayImg) overlayImg.alt = img.getAttribute("alt") || "";
      if (overlayCap) overlayCap.textContent = img.getAttribute("alt") || "";

      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-lightbox-open");
      if (closeBtn) closeBtn.focus();
    }

    document.addEventListener("click", function (e) {
      var target = e.target;
      if (!target || !target.matches) return;
      if (!target.matches(selector)) return;
      e.preventDefault();
      openFor(target);
    });
  })();

  if (typeof initI18n === "function") initI18n();
})();
