import { translations } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { els } from "./utils.js";

export function setRating(value) {
  els.ratingStars.forEach((star) => {
    const starValue = Number(star.dataset.value);
    star.classList.toggle("active", starValue <= value);
    star.setAttribute("aria-pressed", starValue <= value ? "true" : "false");
  });

  const lang = getCurrentLanguage();
  const t = translations[lang] || translations.de;
  const plural = lang === "fr" && value > 1 ? "s" : "";
  const template = t.ratingThanks || translations.de.ratingThanks;
  els.ratingMessage.textContent = template.replace("{value}", String(value)).replace("{plural}", plural);
}

export function initRating() {
  els.ratingStars.forEach((star) => {
    star.addEventListener("click", () => setRating(Number(star.dataset.value)));
  });
}
