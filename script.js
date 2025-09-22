/*document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("primary-nav");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = document.querySelector(".theme-icon");

  // Load saved theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  // Toggle mobile nav
  if (toggleBtn && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("active");
      toggleBtn.setAttribute("aria-expanded", "false");
    };

    toggleBtn.addEventListener("click", () => {
      const opened = navLinks.classList.toggle("active");
      toggleBtn.setAttribute("aria-expanded", opened ? "true" : "false");
    });

    // Close on link click (good UX)
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeMenu)
    );

    // Click outside to close (mobile only)
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 765) {
        if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
          closeMenu();
        }
      }
    });

    // ESC to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  // Theme toggle functionality
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.body.getAttribute("data-theme") === "dark" ? "light" : "dark";
      document.body.setAttribute("data-theme", currentTheme);
      localStorage.setItem("theme", currentTheme);
      updateThemeIcon(currentTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "🌙" : "☀️";
    }
  }

  // Example Button Click Events
  const startBtn = document.querySelector(".btn.primary");
  const demoBtn = document.querySelector(".btn.outline");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      alert("Visit DepthHub");
    });
  }

  if (demoBtn) {
    demoBtn.addEventListener("click", () => {
      alert("Viewing demo... (this would redirect in real site)");
    });
  }
});