import { dayIndexMap, dayOptions, translations } from "./data.js";
import { getCurrentLanguage } from "./language.js";
import { els, state } from "./utils.js";

export function readableAnswers() {
  const type = state.selectedType;
  return type.steps.map((step) => ({
    label: step.question.replace("?", ""),
    value: state.answers[step.key]
  }));
}

export function renderSummary() {
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations.de;
  const selectedDay = dayOptions.find((option) => option.key === els.daySelect.value);
  const dayLabel = selectedDay ? selectedDay.labels[lang] : els.daySelect.value;
  const timeLabel = els.timeSelect.value === "all" ? t.allHoursLabel : els.timeSelect.value;
  const items = [
    { label: "📍 " + state.selectedType.title, value: state.selectedType.title },
    ...readableAnswers().map((answer) => ({
      label: "✨ " + answer.label,
      value: answer.value
    })),
    { label: t.summaryDateLabel, value: dayLabel },
    { label: t.summaryTimeLabel, value: timeLabel }
  ];

  els.summaryList.innerHTML = items
    .map((item) => `
      <div class="summary-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");
}

export function populateDayAndTimeSelects(selectedDay = "all", selectedTime = "10:00") {
  const locale = getCurrentLanguage();
  els.daySelect.innerHTML = "";
  const labelSelectDay = document.querySelector('label[for="daySelect"] span');
  const labelSelectTime = document.querySelector('label[for="timeSelect"] span');
  if (labelSelectDay) labelSelectDay.textContent = translations[locale]?.dayLabel || translations.de.dayLabel;
  if (labelSelectTime) labelSelectTime.textContent = translations[locale]?.timeLabel || translations.de.timeLabel;

  dayOptions.forEach((dayOption) => {
    const option = document.createElement("option");
    option.value = dayOption.key;
    option.textContent = dayOption.labels[locale] || dayOption.labels.de;
    els.daySelect.appendChild(option);
  });

  els.timeSelect.innerHTML = "";
  const allHoursOption = document.createElement("option");
  allHoursOption.value = "all";
  allHoursOption.textContent = translations[locale]?.allHoursLabel || translations.de.allHoursLabel;
  els.timeSelect.appendChild(allHoursOption);

  for (let h = 10; h <= 22; h += 1) {
    const opt = document.createElement("option");
    const label = `${String(h).padStart(2, "0")}:00`;
    opt.value = label;
    opt.textContent = label;
    els.timeSelect.appendChild(opt);
  }

  const availableDays = Array.from(els.daySelect.options).map((option) => option.value);
  const availableTimes = Array.from(els.timeSelect.options).map((option) => option.value);
  els.daySelect.value = availableDays.includes(selectedDay) ? selectedDay : "all";
  els.timeSelect.value = availableTimes.includes(selectedTime) ? selectedTime : "10:00";
}

export function buildDateText() {
  const lang = getCurrentLanguage();
  const t = translations[lang] || translations.de;
  const answerText = readableAnswers()
    .map((answer) => `${answer.label}: ${answer.value}`)
    .join(", ");

  const selectedDay = dayOptions.find((option) => option.key === els.daySelect.value);
  const dayLabel = selectedDay ? selectedDay.labels[lang] : els.daySelect.value;
  const timeLabel = els.timeSelect.value === "all" ? t.allHoursLabel : els.timeSelect.value;

  return `${t.shareTextIntro}\n\n${t.shareTextSuggestion}: ${state.selectedType.title}${answerText ? `\n${answerText}` : ""} \n${dayLabel} ${t.shareTextAt} ${timeLabel}.`;
}

export function nextDateForDay(dayKey, timeValue) {
  const now = new Date();
  let targetDayIndex = dayIndexMap[dayKey] ?? now.getDay();

  if (dayKey === "all") {
    dayKey = Object.keys(dayIndexMap)[now.getDay()];
    targetDayIndex = dayIndexMap[dayKey];
  }
  if (timeValue === "all") {
    timeValue = "19:00";
  }

  const [hours, minutes] = timeValue.split(":").map(Number);
  const candidate = new Date(now);
  candidate.setHours(hours, minutes, 0, 0);

  if (targetDayIndex === now.getDay() && candidate > now) return candidate;

  const diff = (targetDayIndex - now.getDay() + 7) % 7 || 7;
  candidate.setDate(now.getDate() + diff);
  return candidate;
}

export function initSummary() {
  els.daySelect.addEventListener("change", renderSummary);
  els.timeSelect.addEventListener("change", renderSummary);
}
