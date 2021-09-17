// Get the mode from local storage
window.onload = () => {
  const body = document.body;

  let mode = localStorage.getItem("mode");
  if (mode === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

// Changing mode of calculatore
const themeChange = (mode) => {
  const body = document.body;

  if (mode === "light") {
    body.classList.remove("dark-mode");
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
    body.classList.add("dark-mode");
  }
};
