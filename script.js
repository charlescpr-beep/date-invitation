const screens = {
  start: document.querySelector("#startScreen"),
  question: document.querySelector("#questionScreen"),
  success: document.querySelector("#successScreen"),
  planner: document.querySelector("#plannerScreen"),
  summary: document.querySelector("#summaryScreen"),
  final: document.querySelector("#finalScreen")
};

const startBtn = document.querySelector("#startBtn");
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const planBtn = document.querySelector("#planBtn");
const answerArea = document.querySelector("#answerArea");
const teaseMessage = document.querySelector("#teaseMessage");
const dateTypeGrid = document.querySelector("#dateTypeGrid");
const optionStep = document.querySelector("#optionStep");
const stepQuestion = document.querySelector("#stepQuestion");
const stepEyebrow = document.querySelector("#stepEyebrow");
const choiceGrid = document.querySelector("#choiceGrid");
const backBtn = document.querySelector("#backBtn");
const progressFill = document.querySelector("#progressFill");
const summaryList = document.querySelector("#summaryList");
const daySelect = document.querySelector("#daySelect");
const timeSelect = document.querySelector("#timeSelect");
const confirmBtn = document.querySelector("#confirmBtn");
const calendarBtn = document.querySelector("#calendarBtn");
const confettiLayer = document.querySelector("#confettiLayer");
const heartLayer = document.querySelector("#heartLayer");

const playfulMessages = [
  "🤖 Fehler 404: Nein nicht gefunden.",
  "😂 Du gibst aber echt nicht auf...",
  "😌 Der Nein-Button hat heute frei.",
  "🏃 Der Nein-Button trainiert gerade für die Olympischen Spiele.",
  "🤭 Versuch lieber den Ja-Button.",
  "🚀 Nein wurde erfolgreich zum Mond geschickt.",
  "💔 Der Nein-Button hat Angst bekommen.",
  "📜 Laut den heutigen AGB ist nur \"Ja\" verfügbar."
];

const dateTypes = [
  {
    id: "restaurant",
    icon: "🍕",
    title: "Restaurant",
    summaryIcon: "📍",
    steps: [
      {
        key: "cuisine",
        question: "Welche Küche?",
        choices: ["Italienisch", "Sushi", "Burger", "Steak", "Mexikanisch", "Vegetarisch", "Indisch", "Chinesisch", "Französisch", "Mediterran"]
      },
      {
        key: "atmosphere",
        question: "Atmosphäre?",
        choices: ["Locker 😎", "Elegant 🤵"]
      },
      {
        key: "dessert",
        question: "Dessert?",
        choices: ["🍰 Ja", "😅 Nein"]
      },
      {
        key: "drinks",
        question: "Getränke?",
        choices: ["🍷 Wein", "🍸 Cocktail", "🍹 Smoothie", "☕ Kaffee", "🥤 Soft Getränk"]
      }
    ]
  },
  {
    id: "cinema",
    icon: "🎬",
    title: "cinema",
    summaryIcon: "📍",
    steps: [
      {
        key: "wo",
        question: "Wo?",
        choices: ["🎥 Kino", "🏠 Zuhause"]
      },
      {
        key: "genre",
        question: "Welches Genre?",
        choices: ["Romantik ❤️", "Comedy 😂", "Horror 😱", "Sci-Fi 🚀", "Action 🔥", ]
      },
      {
        key: "popcorn",
        question: "Popcorn?",
        choices: ["🍿 Ja", "😅 Nein"]
      }
    ]
  },
  {
    id: "cafe",
    icon: "☕",
    title: "Café",
    summaryIcon: "📍",
    steps: [
      {
        key: "when",
        question: "Wann?",
        choices: ["☀️ morgens", "🌇 nachmittags", "🌙 abends"]
      }
    ]
  },
  {
    id: "walk",
    icon: "🌳",
    title: "Spaziergang",
    summaryIcon: "📍",
    steps: [
      {
        key: "where",
        question: "Wo?",
        choices: ["🌳 Park", "🌅 See", "🏰 Altstadt", "🌸 Botanischer Garten"]
      }
    ]
  },
  {
    id: "bowling",
    icon: "🎳",
    title: "Bowling",
    summaryIcon: "📍",
    steps: [
      {
        key: "deal",
        question: "Verlierer bezahlt das Eis? 🍦",
        choices: ["😎 Deal", "😂 Niemals"]
      }
    ]
  },
  {
    id: "park",
    icon: "🎡",
    title: "Freizeitpark",
    summaryIcon: "📍",
    steps: [
      {
        key: "coasters",
        question: "Möchtest du alle Achterbahnen fahren?",
        choices: ["🎢 Natürlich", "😅 Vielleicht"]
      }
    ]
  }
];

const state = {
  noAttempts: 0,
  selectedType: null,
  stepIndex: 0,
  answers: {}
};

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomTease() {
  const message = playfulMessages[randomBetween(0, playfulMessages.length - 1)];
  teaseMessage.textContent = message;
  teaseMessage.animate(
    [
      { opacity: 0, transform: "translateY(8px) scale(0.98)" },
      { opacity: 1, transform: "translateY(0) scale(1)" }
    ],
    { duration: 260, easing: "ease-out" }
  );
}

function moveNoButton() {
  state.noAttempts += 1;
  const buttonRect = noBtn.getBoundingClientRect();

  if (noBtn.parentElement !== document.body) {
    document.body.appendChild(noBtn);
  }

  noBtn.classList.add("is-running");
  noBtn.style.left = `${buttonRect.left}px`;
  noBtn.style.top = `${buttonRect.top}px`;

  const padding = 18;
  const maxX = Math.max(padding, window.innerWidth - buttonRect.width - padding);
  const maxY = Math.max(padding, window.innerHeight - buttonRect.height - padding);

  const x = randomBetween(padding, maxX);
  const y = randomBetween(padding, maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
  noBtn.style.transform = `rotate(${randomBetween(-9, 9)}deg)`;

  if (state.noAttempts > 1 || Math.random() > 0.45) {
    showRandomTease();
  }
}

function resetNoButton() {
  noBtn.classList.remove("is-running");
  noBtn.removeAttribute("style");
  answerArea.appendChild(noBtn);
  teaseMessage.textContent = "";
}

function launchConfetti(amount = 90) {
  const colors = ["#ff2d55", "#ffffff", "#ff89a0", "#ffd166", "#7bdff2"];

  for (let i = 0; i < amount; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[randomBetween(0, colors.length - 1)];
    piece.style.setProperty("--drift", `${randomBetween(-120, 120)}px`);
    piece.style.setProperty("--fall-time", `${randomBetween(1700, 3200)}ms`);
    piece.style.animationDelay = `${randomBetween(0, 350)}ms`;
    confettiLayer.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove());
  }
}

function launchHearts(amount = 26) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.25 ? "❤️" : "💕";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--heart-size", `${randomBetween(18, 34)}px`);
    heart.style.setProperty("--heart-time", `${randomBetween(2300, 4200)}ms`);
    heart.style.setProperty("--heart-drift", `${randomBetween(-70, 70)}px`);
    heart.style.animationDelay = `${randomBetween(0, 650)}ms`;
    heartLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}

function renderDateTypes() {
  dateTypeGrid.innerHTML = "";

  dateTypes.forEach((type, index) => {
    const button = document.createElement("button");
    button.className = "type-card";
    button.type = "button";
    button.style.animation = `cardRise 420ms ease ${index * 55}ms both`;
    button.innerHTML = `
      <span class="type-icon" aria-hidden="true">${type.icon}</span>
      <strong>${type.title}</strong>
    `;
    button.addEventListener("click", () => selectDateType(type.id));
    dateTypeGrid.appendChild(button);
  });
}

function selectDateType(typeId) {
  state.selectedType = dateTypes.find((type) => type.id === typeId);
  state.stepIndex = 0;
  state.answers = {};
  dateTypeGrid.style.display = "none";
  optionStep.hidden = false;
  renderStep();
}

function renderStep() {
  const currentStep = state.selectedType.steps[state.stepIndex];
  const totalSteps = state.selectedType.steps.length;

  stepEyebrow.textContent = `${state.selectedType.icon} ${state.selectedType.title} · Schritt ${state.stepIndex + 1} von ${totalSteps}`;
  stepQuestion.textContent = currentStep.question;
  choiceGrid.innerHTML = "";
  progressFill.style.width = `${48 + (state.stepIndex / Math.max(totalSteps, 1)) * 34}%`;

  currentStep.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.type = "button";
    button.innerHTML = `<strong>${choice}</strong>`;
    button.addEventListener("click", () => chooseOption(currentStep.key, choice));
    choiceGrid.appendChild(button);
  });
}

function chooseOption(key, value) {
  state.answers[key] = value;

  if (state.stepIndex < state.selectedType.steps.length - 1) {
    state.stepIndex += 1;
    renderStep();
    return;
  }

  renderSummary();
  showScreen("summary");
}

function goBackInPlanner() {
  if (state.stepIndex > 0) {
    const currentKey = state.selectedType.steps[state.stepIndex].key;
    delete state.answers[currentKey];
    state.stepIndex -= 1;
    renderStep();
    return;
  }

  optionStep.hidden = true;
  dateTypeGrid.style.display = "grid";
  progressFill.style.width = "18%";
}

function readableAnswers() {
  const type = state.selectedType;
  return type.steps.map((step) => ({
    label: step.question.replace("?", ""),
    value: state.answers[step.key]
  }));
}

function renderSummary() {
  const items = [
    { label: "📍 Date", value: state.selectedType.title },
    ...readableAnswers().map((answer) => ({
      label: "✨ " + answer.label,
      value: answer.value
    })),
    { label: "📅 Tag", value: daySelect.value },
    { label: "🕖 Uhrzeit", value: timeSelect.value }
  ];

  summaryList.innerHTML = items
    .map((item) => `
      <div class="summary-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");
}

function populateDayAndTimeSelects() {
  const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

  // Day select: add "Alle Tage" first, then the weekdays
  daySelect.innerHTML = '';
  const allDaysOption = document.createElement('option');
  //allDaysOption.value = 'Alle Tage';
 // allDaysOption.textContent = 'Alle Tage';
  daySelect.appendChild(allDaysOption);

  days.forEach((d) => {
    const opt = document.createElement('option');
    opt.value = d;
    opt.textContent = d;
    daySelect.appendChild(opt);
  });

  // Time select: add "Alle Stunden" then hours from 10:00 to 22:00
  timeSelect.innerHTML = '';
  const allHoursOption = document.createElement('option');
  //allHoursOption.value = 'Alle Stunden';
  //allHoursOption.textContent = 'Alle Stunden';
  timeSelect.appendChild(allHoursOption);

  for (let h = 10; h <= 22; h += 1) {
    const opt = document.createElement('option');
    const label = `${String(h).padStart(2, '0')}:00`;
    opt.value = label;
    opt.textContent = label;
    timeSelect.appendChild(opt);
  }

  // Default preselection as requested: select the "Alle" options
  daySelect.value = 'Samstag';
  timeSelect.value = '10:00';
}

function buildDateText() {
  const answerText = readableAnswers()
    .map((answer) => `${answer.label}: ${answer.value}`)
    .join(", ");

  return `Hey 😎 Ich bin dabei! Lass uns unser Date planen ❤️\n\nMein Vorschlag: ${state.selectedType.title}${answerText ? `\n ${answerText}` : ""} \n ${daySelect.value} um ${timeSelect.value}.`;
}

function openWhatsApp() {
  const message = encodeURIComponent(buildDateText());
  const url = `https://wa.me/?text=${message}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function downloadCalendarFile() {
  const start = nextDateForDay(daySelect.value, timeSelect.value);
  const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
  const description = escapeIcsText(buildDateText()).replace(/\n/g, "\\n");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Date Einladung//Premium Date//DE",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@date-einladung.local`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${formatIcsDate(start)}`,
    `DTEND:${formatIcsDate(end)}`,
    `SUMMARY:${escapeIcsText('Date ❤️')}`,
    `DESCRIPTION:${description}`,
    "END:VEVENT",
    "END:VCALENDAR"
  ];

  const ics = lines.map((line) => foldIcsLine(line)).join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "date-einladung.ics";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
}

function escapeIcsText(text) {
  return text.replace(/([\\,;])/g, "\\$1");
}

function foldIcsLine(line, maxLength = 75) {
  const segments = [];
  for (let index = 0; index < line.length; index += maxLength) {
    const chunk = line.slice(index, index + maxLength);
    segments.push(index === 0 ? chunk : ` ${chunk}`);
  }
  return segments.join("\r\n");
}

function nextDateForDay(dayName, timeValue) {
  const days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
  const now = new Date();

  // Support the special "Alle Tage" / "Alle Stunden" placeholders
  if (dayName === "Alle Tage") {
    dayName = days[now.getDay()];
  }
  if (timeValue === "Alle Stunden") {
    timeValue = "19:00"; // sensible default when "all hours" is selected
  }

  const targetDay = days.indexOf(dayName);
  const [hours, minutes] = timeValue.split(":").map(Number);
  const candidate = new Date(now);
  candidate.setHours(hours, minutes, 0, 0);

  if (targetDay === now.getDay() && candidate > now) {
    return candidate;
  }

  const diff = (targetDay - now.getDay() + 7) % 7 || 7;
  candidate.setDate(now.getDate() + diff);
  return candidate;
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function finishExperience() {
  launchConfetti(120);
  launchHearts(42);
  showScreen("final");
}

startBtn.addEventListener("click", () => showScreen("question"));

yesBtn.addEventListener("click", () => {
  resetNoButton();
  launchConfetti();
  launchHearts();
  showScreen("success");
});

["mouseenter", "pointerdown", "touchstart", "focus"].forEach((eventName) => {
  noBtn.addEventListener(eventName, (event) => {
    event.preventDefault();
    moveNoButton();
  }, { passive: false });
});

document.addEventListener("mousemove", (event) => {
  if (!screens.question.classList.contains("active")) return;

  const rect = noBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distance = Math.hypot(event.clientX - centerX, event.clientY - centerY);

  if (distance < 115) {
    moveNoButton();
  }
});

noBtn.addEventListener("click", (event) => {
  event.preventDefault();
  moveNoButton();
});

planBtn.addEventListener("click", () => {
  renderDateTypes();
  showScreen("planner");
});

backBtn.addEventListener("click", goBackInPlanner);
daySelect.addEventListener("change", renderSummary);
timeSelect.addEventListener("change", renderSummary);

confirmBtn.addEventListener("click", () => {
  openWhatsApp();
  setTimeout(finishExperience, 450);
});

calendarBtn.addEventListener("click", () => {
  downloadCalendarFile();
  setTimeout(finishExperience, 450);
});

populateDayAndTimeSelects();
renderDateTypes();
