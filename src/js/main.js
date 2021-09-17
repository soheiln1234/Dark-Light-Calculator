// Changing mode of calculatore
const themeChange = (mode) => {
  const body = document.body;

  if (mode === "light") {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
};
