const modeToggle = document.getElementById("modeToggle");

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    const active = document.body.classList.toggle("presentation-mode");
    modeToggle.setAttribute("aria-pressed", String(active));
    modeToggle.textContent = active ? "Audience Explore Mode" : "Presentation Mode";
  });
}
