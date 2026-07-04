import { getLocalizedDateTypes, translations } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { navigateApp, backOrNavigate } from "./navigation.js";
import { els, state } from "./utils.js";

export function renderDateTypes() {
  els.dateTypeGrid.innerHTML = "";
  const types = getLocalizedDateTypes(getCurrentLanguage());

  types.forEach((type, index) => {
    const button = document.createElement("button");
    button.className = "type-card";
    button.type = "button";
    button.style.animation = `cardRise 420ms ease ${index * 55}ms both`;
    button.innerHTML = `
      <span class="type-icon" aria-hidden="true">${type.icon}</span>
      <strong>${type.title}</strong>
    `;
    button.addEventListener("click", () => selectDateType(type.id));
    els.dateTypeGrid.appendChild(button);
  });
}

export function selectDateType(typeId) {
  navigateApp("step", {
    selectedTypeId: typeId,
    stepIndex: 0,
    answers: {}
  });
}

export function renderStep() {
  const currentStep = state.selectedType.steps[state.stepIndex];
  const totalSteps = state.selectedType.steps.length;
  const t = translations[getCurrentLanguage()] || translations.de;

  els.stepEyebrow.textContent = `${t.stepEyebrow} · ${t.stepProgress.replace("{current}", state.stepIndex + 1).replace("{total}", totalSteps)}`;
  els.stepQuestion.textContent = currentStep.question;
  els.choiceGrid.innerHTML = "";
  els.progressFill.style.width = `${48 + (state.stepIndex / Math.max(totalSteps, 1)) * 34}%`;

  currentStep.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.innerHTML = `<strong>${choice}</strong>`;
    button.addEventListener("click", () => chooseOption(currentStep.key, choice));
    els.choiceGrid.appendChild(button);
  });
}

export function chooseOption(key, value) {
  state.answers[key] = value;

  if (state.stepIndex < state.selectedType.steps.length - 1) {
    navigateApp("step", {
      selectedTypeId: state.selectedType.id,
      stepIndex: state.stepIndex + 1,
      answers: { ...state.answers }
    });
    return;
  }

  navigateApp("summary", {
    selectedTypeId: state.selectedType.id,
    stepIndex: state.stepIndex,
    answers: { ...state.answers }
  });
}

export function goBackInPlanner() {
  backOrNavigate("planner");
}

export function initPlanner() {
  els.backBtn.addEventListener("click", goBackInPlanner);
}
