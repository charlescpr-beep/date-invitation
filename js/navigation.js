import { getLocalizedDateTypes } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { updateInviteResult } from "./invite.js";
import { renderSummary } from "./summary.js";
import { els, showScreen, state } from "./utils.js";

const APP_HISTORY_KEY = "oui-ou-oui";

let currentRoute = "start";
let currentIndex = 0;
let renderStepCallback = () => {};

function setSelectedTypeById(typeId) {
  const types = getLocalizedDateTypes(getCurrentLanguage());
  state.selectedType = types.find((type) => type.id === typeId) || null;
}

export function createAppState(route, data = {}) {
  return {
    app: APP_HISTORY_KEY,
    appRoute: route,
    data: { ...data },
    index: currentIndex,
    createdAt: Date.now()
  };
}

function isAppState(value) {
  return Boolean(value && value.app === APP_HISTORY_KEY && value.appRoute);
}

function sanitizeState(historyState) {
  return isAppState(historyState) ? historyState : createAppState("start");
}

export function getCurrentRoute() {
  return currentRoute;
}

export function restoreAppState(historyState) {
  const entry = sanitizeState(historyState);
  const data = entry.data || {};
  currentRoute = entry.appRoute;
  currentIndex = Number.isFinite(entry.index) ? entry.index : 0;

  switch (entry.appRoute) {
    case "start":
      state.selectedType = null;
      state.stepIndex = 0;
      state.answers = {};
      els.dateTypeGrid.style.display = "grid";
      els.optionStep.hidden = true;
      els.progressFill.style.width = "18%";
      showScreen("start");
      break;

    case "planner":
      state.selectedType = null;
      state.stepIndex = 0;
      state.answers = {};
      els.dateTypeGrid.style.display = "grid";
      els.optionStep.hidden = true;
      els.progressFill.style.width = "18%";
      showScreen("planner");
      break;

    case "step":
      if (data.selectedTypeId) setSelectedTypeById(data.selectedTypeId);
      state.stepIndex = typeof data.stepIndex === "number" ? data.stepIndex : 0;
      state.answers = data.answers ? { ...data.answers } : {};

      if (!state.selectedType) {
        els.dateTypeGrid.style.display = "grid";
        els.optionStep.hidden = true;
        els.progressFill.style.width = "18%";
        showScreen("planner");
        break;
      }

      els.dateTypeGrid.style.display = "none";
      els.optionStep.hidden = false;
      renderStepCallback();
      showScreen("planner");
      break;

    case "success":
      showScreen("success");
      break;

    case "summary":
      if (data.selectedTypeId) setSelectedTypeById(data.selectedTypeId);
      state.stepIndex = typeof data.stepIndex === "number" ? data.stepIndex : 0;
      state.answers = data.answers ? { ...data.answers } : {};
      els.dateTypeGrid.style.display = "none";
      els.optionStep.hidden = false;
      renderSummary();
      showScreen("summary");
      break;

    case "final":
      updateInviteResult();
      showScreen("final");
      break;

    default:
      restoreAppState(createAppState("start"));
      break;
  }
}

export function navigateApp(route, data = {}, options = {}) {
  currentIndex = options.replace ? currentIndex : currentIndex + 1;
  const appState = createAppState(route, data);
  const method = options.replace ? "replaceState" : "pushState";
  history[method](appState, "", window.location.href);
  restoreAppState(appState);
}

export function backOrNavigate(fallbackRoute = "planner", fallbackData = {}) {
  if (history.state && isAppState(history.state) && currentRoute !== "start" && currentIndex > 0) {
    history.back();
    return;
  }

  navigateApp(fallbackRoute, fallbackData);
}

export function replaceCurrentAppState(route = currentRoute, data = {}) {
  const appState = createAppState(route, data);
  history.replaceState(appState, "", window.location.href);
}

export function initAppHistory({ renderStep }) {
  renderStepCallback = renderStep;

  if (!isAppState(history.state)) {
    currentIndex = 0;
    history.replaceState(createAppState("start"), "", window.location.href);
  } else {
    restoreAppState(history.state);
  }

  window.addEventListener("popstate", (event) => {
    restoreAppState(event.state);
  });

  window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
      restoreAppState(history.state);
      return;
    }

    if (!isAppState(history.state)) {
      history.replaceState(createAppState(currentRoute || "start"), "", window.location.href);
    }
  });
}
