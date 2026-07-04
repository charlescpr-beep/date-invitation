import { initNoButton, launchConfetti, launchHearts, resetNoButton } from "./animations.js";
import { downloadCalendarFile } from "./calendar.js";
import { initInviteActions, updateInviteResult } from "./invite.js";
import { initLanguage } from "./language.js";
import { initLockControls } from "./lock.js";
import { initAppHistory, navigateApp } from "./navigation.js";
import { initPlanner, renderDateTypes, renderStep } from "./planner.js";
import { initRating } from "./rating.js";
import { buildDateText, initSummary, populateDayAndTimeSelects, renderSummary } from "./summary.js";
import { els } from "./utils.js";

function openWhatsApp() {
  const message = encodeURIComponent(buildDateText());
  const url = `https://wa.me/?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function finishExperience() {
  launchConfetti(120);
  launchHearts(42);
  updateInviteResult();
  navigateApp("final");
}

function initEventListeners() {
  els.startBtn.addEventListener("click", () => {
    renderDateTypes();
    navigateApp("planner");
  });

  els.logoButton?.addEventListener("click", () => navigateApp("start"));

  els.planBtn.addEventListener("click", () => {
    renderDateTypes();
    navigateApp("planner");
  });

  els.yesBtn.addEventListener("click", () => {
    resetNoButton();
    launchConfetti();
    launchHearts();
    navigateApp("success");
  });

  els.confirmBtn.addEventListener("click", () => {
    openWhatsApp();
    setTimeout(finishExperience, 450);
  });

  els.calendarBtn.addEventListener("click", () => {
    downloadCalendarFile();
    setTimeout(finishExperience, 450);
  });
}

function initApp() {
  initLockControls();
  initPlanner();
  initRating();
  initInviteActions();
  initSummary();
  initNoButton();
  initEventListeners();

  initLanguage({
    renderDateTypes,
    renderStep,
    renderSummary,
    populateDayAndTimeSelects
  });

  populateDayAndTimeSelects();
  renderDateTypes();
  initAppHistory({ renderStep });
}

initApp();
