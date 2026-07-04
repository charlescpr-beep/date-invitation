import { playfulMessagesByLang } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { els, screens, state, randomBetween } from "./utils.js";

export function showRandomTease() {
  const messages = playfulMessagesByLang[getCurrentLanguage()] || playfulMessagesByLang.de;
  const message = messages[randomBetween(0, messages.length - 1)];
  els.teaseMessage.textContent = message;
  els.teaseMessage.animate(
    [
      { opacity: 0, transform: "translateY(8px) scale(0.98)" },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    { duration: 260, easing: "ease-out" }
  );
}

export function moveNoButton() {
  state.noAttempts += 1;
  const buttonRect = els.noBtn.getBoundingClientRect();

  if (els.noBtn.parentElement !== document.body) {
    document.body.appendChild(els.noBtn);
  }

  els.noBtn.classList.add("is-running");
  els.noBtn.style.left = `${buttonRect.left}px`;
  els.noBtn.style.top = `${buttonRect.top}px`;

  const padding = 18;
  const maxX = Math.max(padding, window.innerWidth - buttonRect.width - padding);
  const maxY = Math.max(padding, window.innerHeight - buttonRect.height - padding);

  els.noBtn.style.left = `${randomBetween(padding, maxX)}px`;
  els.noBtn.style.top = `${randomBetween(padding, maxY)}px`;
  els.noBtn.style.transform = `rotate(${randomBetween(-9, 9)}deg)`;

  if (state.noAttempts > 1 || Math.random() > 0.45) {
    showRandomTease();
  }
}

export function resetNoButton() {
  els.noBtn.classList.remove("is-running");
  els.noBtn.removeAttribute("style");
  els.answerArea.appendChild(els.noBtn);
  els.teaseMessage.textContent = "";
}

export function launchConfetti(amount = 90) {
  const colors = ["#ff2d55", "#ffffff", "#ff89a0", "#ffd166", "#7bdff2"];

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[randomBetween(0, colors.length - 1)];
    piece.style.setProperty("--drift", `${randomBetween(-120, 120)}px`);
    piece.style.setProperty("--fall-time", `${randomBetween(1700, 3200)}ms`);
    piece.style.animationDelay = `${randomBetween(0, 350)}ms`;
    els.confettiLayer.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

export function launchHearts(amount = 26) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.25 ? "❤️" : "💕";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--heart-size", `${randomBetween(18, 34)}px`);
    heart.style.setProperty("--heart-time", `${randomBetween(2300, 4200)}ms`);
    heart.style.setProperty("--heart-drift", `${randomBetween(-70, 70)}px`);
    heart.style.animationDelay = `${randomBetween(0, 650)}ms`;
    els.heartLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

export function initNoButton() {
  ["mouseenter", "pointerdown", "touchstart", "focus"].forEach((eventName) => {
    els.noBtn.addEventListener(eventName, (event) => {
      event.preventDefault();
      moveNoButton();
    }, { passive: false });
  });

  document.addEventListener("mousemove", (event) => {
    if (!screens.question.classList.contains("active")) return;

    const rect = els.noBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);

    if (distance < 115) moveNoButton();
  });

  els.noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
  });
}
