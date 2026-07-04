import { translations, getLocalizedDateTypes } from "./data.js";
import { els, screens, state, safeStorageGet, safeStorageSet } from "./utils.js";

let currentLanguage = "de";
let hooks = {
  renderDateTypes: () => {},
  renderStep: () => {},
  renderSummary: () => {},
  populateDayAndTimeSelects: () => {}
};

export function getCurrentLanguage() {
  return currentLanguage;
}

export function getText() {
  return translations[currentLanguage] || translations.de;
}

export function refreshSelectedTypeLocale() {
  if (!state.selectedType) return;
  const types = getLocalizedDateTypes(currentLanguage);
  const type = types.find((item) => item.id === state.selectedType.id);
  if (type) state.selectedType = type;
}

export function translatePage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = translations[lang].lang;
  const t = translations[lang];

  els.lockTitleEl.textContent = t.lockTitle;
  if (els.lockOverlay && !els.lockOverlay.hidden) {
    els.lockMessageEl.textContent = t.lockMessage;
  }
  els.heroEyebrow.textContent = t.heroEyebrow;
  els.heroSlogan.textContent = t.heroSlogan;
  els.startButtonText.textContent = t.startButton;
  els.ratingLabel.textContent = t.ratingLabel;
  els.ratingMessage.textContent = t.ratingPrompt;
  els.questionEyebrow.textContent = t.questionEyebrow;
  document.querySelector("#questionTitle").textContent = t.questionTitle;
  els.yesBtn.textContent = t.yesButton;
  els.noBtn.textContent = t.noButton;
  document.querySelector("#successTitle").textContent = t.successTitle;
  document.querySelector("#successCopy").textContent = t.successCopy;
  els.planButtonText.textContent = t.planButton;
  els.plannerEyebrow.textContent = t.plannerEyebrow;
  document.querySelector("#plannerTitle").textContent = t.plannerTitle;
  els.summaryEyebrow.textContent = t.summaryEyebrow;
  document.querySelector("#summaryTitle").textContent = t.summaryTitle;
  document.querySelector('label[for="daySelect"] span').textContent = t.dayLabel;
  document.querySelector('label[for="timeSelect"] span').textContent = t.timeLabel;
  els.confirmButtonText.textContent = t.confirmButton;
  els.calendarButtonText.textContent = t.calendarButton;
  els.finalTitleEl.textContent = t.finalTitle;
  els.resultCopy.textContent = t.resultCopy;
  document.querySelector('label[for="inviteLink"]').textContent = t.linkLabel;
  els.copyLinkBtn.textContent = t.copyLink;
  els.shareLinkBtn.textContent = t.shareLink;

  els.ratingStars.forEach((star) => {
    star.setAttribute("aria-label", t.ratingStarAria.replace("{value}", star.dataset.value));
  });
  els.langSelect?.setAttribute("aria-label", t.languageLabel || "Sprache wählen");
  els.dateTypeGrid?.setAttribute("aria-label", t.dateTypeGridAria || "Date-Typ auswählen");
  if (els.inviteQrEl) els.inviteQrEl.alt = t.qrAlt || els.inviteQrEl.alt;
  document.querySelector("#logoButton img")?.setAttribute("alt", t.logoAlt || "Logo Oui ou Oui");

  hooks.renderDateTypes();
  refreshSelectedTypeLocale();
  hooks.populateDayAndTimeSelects(els.daySelect.value, els.timeSelect.value);

  if (screens.summary.classList.contains("active")) hooks.renderSummary();
  if (screens.planner.classList.contains("active") && state.selectedType) hooks.renderStep();
}

export function initLanguage(nextHooks) {
  hooks = { ...hooks, ...nextHooks };
  const savedLang = safeStorageGet("siteLang", "de");
  currentLanguage = savedLang;

  if (els.langSelect) {
    els.langSelect.value = savedLang;
    els.langSelect.addEventListener("change", (event) => {
      const value = event.target.value;
      translatePage(value);
      safeStorageSet("siteLang", value);
    });
  }

  translatePage(savedLang);
}
