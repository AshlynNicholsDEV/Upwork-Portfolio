/* Portfolio interactions. */
const aboutModal = document.getElementById("contact-modal");
document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    if (aboutModal.open) return;
    aboutModal.showModal();
    document.body.classList.add("modal--open");
  });
});
document.querySelector("[data-close-modal]").addEventListener("click", () => aboutModal.close());
aboutModal.addEventListener("close", () => document.body.classList.remove("modal--open"));
const themeButton = document.querySelector("[data-theme-toggle]");
themeButton.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-theme");
  themeButton.setAttribute("aria-pressed", String(dark));
});

// Keep the background movement added during the review.
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
function moveBackground(event) {
  if (reducedMotion.matches || event.pointerType === "touch") return;
  const x = event.clientX / 20;
  const y = event.clientY / 20;
  document.querySelectorAll(".shape").forEach((shape, index) => {
    const direction = index % 2 ? -1 : 1;
    shape.style.transform = `translate(${x * direction}px, ${y * direction}px) rotate(${x * direction * 10}deg)`;
  });
}
document.getElementById("landing-page").addEventListener("pointermove", moveBackground);

