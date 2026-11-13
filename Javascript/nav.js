(function () {
  function setupHeader(header) {
    var button = header.querySelector(".hamburger");
    var nav = header.querySelector(".main-nav");
    if (!button || !nav) return;

    button.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      button.setAttribute("aria-expanded", open ? "true" : "false");
      button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("header").forEach(setupHeader);
})();
