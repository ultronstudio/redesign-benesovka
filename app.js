(() => {
  const toggle = document.querySelector(".search-toggle");
  const panel = document.querySelector(".search-panel");

  toggle?.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    if (!panel.hidden) document.getElementById("siteSearch")?.focus();
  });

  document.querySelector(".site-search")?.addEventListener("submit", e => {
    e.preventDefault();
    bootstrap.Toast.getOrCreateInstance(document.getElementById("demoToast")).show();
  });
})();
