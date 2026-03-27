(() => {
  const storageKey = "theme-preference";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const getStoredTheme = () => {
    try {
      const value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // Sem permissao para salvar, o tema continua funcionando na sessao atual.
    }
  };

  const getPreferredTheme = () => (systemTheme.matches ? "dark" : "light");

  const applyThemeOnly = (theme) => {
    root.setAttribute("data-theme", theme);
  };

  const updateToggleUi = (toggleButton, theme) => {
    const isDark = theme === "dark";
    const icon = isDark ? "☀️" : "🌙";
    const label = isDark ? "Modo claro" : "Modo escuro";

    toggleButton.setAttribute("aria-pressed", String(isDark));
    toggleButton.setAttribute(
      "aria-label",
      isDark ? "Ativar modo claro" : "Ativar modo escuro",
    );
    toggleButton.textContent = `${icon} ${label}`;
  };

  let currentTheme = getStoredTheme() || getPreferredTheme();
  applyThemeOnly(currentTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("themeToggle");
    if (!toggleButton) {
      return;
    }

    updateToggleUi(toggleButton, currentTheme);

    toggleButton.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyThemeOnly(currentTheme);
      updateToggleUi(toggleButton, currentTheme);
      saveTheme(currentTheme);
    });

    systemTheme.addEventListener("change", (event) => {
      if (!getStoredTheme()) {
        currentTheme = event.matches ? "dark" : "light";
        applyThemeOnly(currentTheme);
        updateToggleUi(toggleButton, currentTheme);
      }
    });
  });
})();
