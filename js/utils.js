export const screens = {
  start: document.querySelector("#startScreen"),
  question: document.querySelector("#questionScreen"),
  success: document.querySelector("#successScreen"),
  planner: document.querySelector("#plannerScreen"),
  summary: document.querySelector("#summaryScreen"),
  final: document.querySelector("#finalScreen")
};

export const els = {
  startBtn: document.querySelector("#startBtn"),
  yesBtn: document.querySelector("#yesBtn"),
  noBtn: document.querySelector("#noBtn"),
  planBtn: document.querySelector("#planBtn"),
  answerArea: document.querySelector("#answerArea"),
  teaseMessage: document.querySelector("#teaseMessage"),
  dateTypeGrid: document.querySelector("#dateTypeGrid"),
  optionStep: document.querySelector("#optionStep"),
  stepQuestion: document.querySelector("#stepQuestion"),
  stepEyebrow: document.querySelector("#stepEyebrow"),
  choiceGrid: document.querySelector("#choiceGrid"),
  backBtn: document.querySelector("#backBtn"),
  progressFill: document.querySelector("#progressFill"),
  summaryList: document.querySelector("#summaryList"),
  daySelect: document.querySelector("#daySelect"),
  timeSelect: document.querySelector("#timeSelect"),
  confirmBtn: document.querySelector("#confirmBtn"),
  calendarBtn: document.querySelector("#calendarBtn"),
  confettiLayer: document.querySelector("#confettiLayer"),
  heartLayer: document.querySelector("#heartLayer"),
  logoButton: document.querySelector("#logoButton"),
  langSelect: document.querySelector("#langSelect"),
  heroEyebrow: document.querySelector("#heroEyebrow"),
  heroSlogan: document.querySelector("#heroSlogan"),
  startButtonText: document.querySelector("#startButtonText"),
  ratingLabel: document.querySelector("#ratingLabel"),
  questionEyebrow: document.querySelector("#questionEyebrow"),
  plannerEyebrow: document.querySelector("#plannerEyebrow"),
  summaryEyebrow: document.querySelector("#summaryEyebrow"),
  confirmButtonText: document.querySelector("#confirmButtonText"),
  calendarButtonText: document.querySelector("#calendarButtonText"),
  finalTitleEl: document.querySelector("#finalTitle"),
  resultCopy: document.querySelector("#resultCopy"),
  inviteLinkEl: document.querySelector("#inviteLink"),
  inviteQrEl: document.querySelector("#inviteQr"),
  copyLinkBtn: document.querySelector("#copyLinkBtn"),
  shareLinkBtn: document.querySelector("#shareLinkBtn"),
  shareStatus: document.querySelector("#shareStatus"),
  ratingStars: Array.from(document.querySelectorAll(".star-btn")),
  ratingMessage: document.querySelector("#ratingMessage"),
  planButtonText: document.querySelector("#planButtonText"),
  lockOverlay: document.querySelector("#lockOverlay"),
  lockTitleEl: document.querySelector("#lockTitle"),
  lockMessageEl: document.querySelector("#lockMessage"),
  appShell: document.querySelector(".app-shell")
};

export const state = {
  noAttempts: 0,
  selectedType: null,
  stepIndex: 0,
  answers: {}
};

export function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function showScreen(name) {
  Object.values(screens).forEach((screen) => screen?.classList.remove("active"));
  screens[name]?.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function safeStorageGet(key, fallback = null) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    return fallback;
  }
}

export function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Storage can be unavailable in private modes; the app should keep working.
  }
}

export function safeStorageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Ignore storage errors.
  }
}
