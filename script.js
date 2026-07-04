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
const logoButton = document.querySelector("#logoButton");
const langSelect = document.querySelector("#langSelect");
const heroEyebrow = document.querySelector("#heroEyebrow");
const heroSlogan = document.querySelector("#heroSlogan");
const startButtonText = document.querySelector("#startButtonText");
const ratingLabel = document.querySelector("#ratingLabel");
const questionEyebrow = document.querySelector("#questionEyebrow");
const plannerEyebrow = document.querySelector("#plannerEyebrow");
const summaryEyebrow = document.querySelector("#summaryEyebrow");
const confirmButtonText = document.querySelector("#confirmButtonText");
const calendarButtonText = document.querySelector("#calendarButtonText");
const finalTitleEl = document.querySelector("#finalTitle");
const resultCopy = document.querySelector("#resultCopy");
const inviteLinkEl = document.querySelector("#inviteLink");
const inviteQrEl = document.querySelector("#inviteQr");
const copyLinkBtn = document.querySelector("#copyLinkBtn");
const shareLinkBtn = document.querySelector("#shareLinkBtn");
const shareStatus = document.querySelector("#shareStatus");
const ratingStars = Array.from(document.querySelectorAll(".star-btn"));
const ratingMessage = document.querySelector("#ratingMessage");
const planButtonText = document.querySelector("#planButtonText");

const playfulMessagesByLang = {
  de: [
    "🤖 Fehler 404: Nein nicht gefunden.",
    "😂 Du gibst aber echt nicht auf...",
    "😌 Der Nein-Button hat heute frei.",
    "🏃 Der Nein-Button trainiert gerade für die Olympischen Spiele.",
    "🤭 Versuch lieber den Ja-Button.",
    "🚀 Nein wurde erfolgreich zum Mond geschickt.",
    "💔 Der Nein-Button hat Angst bekommen.",
    "📜 Laut den heutigen AGB ist nur \"Ja\" verfügbar."
  ],
  en: [
    "🤖 Error 404: No not found.",
    "😂 You just can't say no...",
    "😌 The no-button is off duty today.",
    "🏃 The no-button is training for the Olympics.",
    "🤭 Better try the yes-button.",
    "🚀 No has been sent to the moon.",
    "💔 The no-button got scared.",
    "📜 Today's terms say only \"Yes\" is allowed."
  ],
  fr: [
    "🤖 Erreur 404 : non introuvable.",
    "😂 Tu n'arrêtes pas...",
    "😌 Le bouton non est en pause aujourd’hui.",
    "🏃 Le bouton non s'entraîne pour les Jeux Olympiques.",
    "🤭 Essaye plutôt le bouton oui.",
    "🚀 Le non a été envoyé sur la lune.",
    "💔 Le bouton non a eu peur.",
    "📜 Selon les conditions d'aujourd'hui, seul \"Oui\" est disponible."
  ]
};

const translations = {
  de: {
    lang: 'de',
    lockTitle: 'Webseite wurde vorübergehend gesperrt',
    lockMessage: 'Webseite wurde vorübergehend gesperrt',
    heroEyebrow: 'Willkommen',
    heroSlogan: 'Weil das Nein heute leider keine Option ist. 😉',
    startButton: '❤️ Einladung erstellen',
    ratingLabel: 'Bewerte uns',
    ratingPrompt: 'Wie gefällt dir Oui ou Oui?',
    questionEyebrow: 'Eine sehr wichtige Frage',
    questionTitle: 'Möchtest du mit mir auf ein Date gehen?',
    yesButton: '❤️ Ja',
    noButton: '🙈 Nein',
    successTitle: 'jaaaaaa!!',
    successCopy: 'Jetzt planen wir unser Date ❤️',
    plannerEyebrow: 'Date-Konfigurator',
    plannerTitle: 'Worauf hast du Lust?',
    summaryEyebrow: 'Fast fertig',
    summaryTitle: '❤️ Unser Date',
    summaryDateLabel: '📅 Tag',
    summaryTimeLabel: '🕖 Uhrzeit',
    dayLabel: '📅 Tag',
    timeLabel: '🕖 Uhrzeit',
    allDaysLabel: 'Irgendein Tag',
    allHoursLabel: 'Irgendeine Uhrzeit',
    planButton: 'Date planen',
    stepEyebrow: 'Noch eine Sache',
    stepProgress: 'Schritt {current} von {total}',
    confirmButton: 'Termin bestätigen',
    calendarButton: 'Zum Kalender hinzufügen',
    finalTitle: 'Deine Einladung ist fertig!',
    resultCopy: 'Teile deinen Link oder zeige den QR-Code vor.',
    linkLabel: 'Einladungslink',
    copyLink: '📋 Link kopieren',
    shareLink: '📤 Link teilen',
    logoAlt: 'Logo Oui ou Oui',
    languageLabel: 'Sprache wählen',
    dateTypeGridAria: 'Date-Typ auswählen',
    qrAlt: 'QR-Code für Einladung',
    shareTextIntro: 'Hey 😎 Ich bin dabei! Lass uns unser Date planen ❤️',
    shareTextSuggestion: 'Mein Vorschlag',
    shareTextAt: 'um',
    ratingStarAria: '{value} Stern',
    ratingThanks: 'Danke für deine {value}-Sterne Bewertung!',
    shareDialogTitle: 'Oui ou Oui Einladung',
    shareDialogText: 'Meine Einladung ist fertig!',
    shareCopied: 'Link kopiert!',
    shareCopyFailed: 'Kopieren fehlgeschlagen. Bitte manuell kopieren.',
    shareCancelled: 'Teilen wurde abgebrochen.',
    shareUnavailable: 'Teilen ist auf diesem Gerät nicht verfügbar. Link wurde kopiert.'
  },
  en: {
    lang: 'en',
    lockTitle: 'Website temporarily locked',
    lockMessage: 'Website temporarily locked',
    heroEyebrow: 'Welcome',
    heroSlogan: 'Because no is not an option today. 😉',
    startButton: '❤️ Create invitation',
    ratingLabel: 'Rate us',
    ratingPrompt: 'How do you like Oui ou Oui?',
    questionEyebrow: 'A very important question',
    questionTitle: 'Do you want to go on a date with me?',
    yesButton: '❤️ Yes',
    noButton: '🙈 No',
    successTitle: 'Yesssssss!!',
    successCopy: 'Now let’s plan our date ❤️',
    plannerEyebrow: 'Date configurator',
    plannerTitle: 'What do you feel like?',
    summaryEyebrow: 'Almost done',
    summaryTitle: '❤️ Our date',
    summaryDateLabel: '📅 Day',
    summaryTimeLabel: '🕖 Time',
    dayLabel: '📅 Day',
    timeLabel: '🕖 Time',
    allDaysLabel: 'Any day',
    allHoursLabel: 'Any time',
    planButton: 'Plan date',
    stepEyebrow: 'One more thing',
    stepProgress: 'Step {current} of {total}',
    confirmButton: 'Confirm time',
    calendarButton: 'Add to calendar',
    finalTitle: 'Your invitation is ready!',
    resultCopy: 'Share your link or show the QR code.',
    linkLabel: 'Invitation link',
    copyLink: '📋 Copy link',
    shareLink: '📤 Share link',
    shareTextIntro: 'Hey 😎 I’m in! Let’s plan our date ❤️',
    shareTextSuggestion: 'My suggestion',
    shareTextAt: 'at',
    ratingStarAria: '{value} star',
    ratingThanks: 'Thank you for your {value}-star rating!',
    shareDialogTitle: 'Oui ou Oui invitation',
    shareDialogText: 'My invitation is ready!',
    shareCopied: 'Link copied!',
    shareCopyFailed: 'Copy failed. Please copy manually.',
    shareCancelled: 'Sharing was cancelled.',
    shareUnavailable: 'Sharing is not available on this device. Link copied.'
  },
  fr: {
    lang: 'fr',
    lockTitle: 'Site temporairement bloqué',
    lockMessage: 'Site temporairement bloqué',
    heroEyebrow: 'Bienvenue',
    heroSlogan: 'Parce que le non n’est pas une option aujourd’hui. 😉',
    startButton: '❤️ Créer une invitation',
    ratingLabel: 'Évaluez-nous',
    ratingPrompt: 'Que penses-tu de Oui ou Oui?',
    questionEyebrow: 'Une question très importante',
    questionTitle: 'Veux-tu aller à un rendez-vous avec moi?',
    yesButton: '❤️ Oui',
    noButton: '🙈 Non',
    successTitle: 'Youpiiiiii!!',
    successCopy: 'Planifions maintenant notre rendez-vous ❤️',
    plannerEyebrow: 'Configurateur de rendez-vous',
    plannerTitle: 'Qu’est-ce que tu veux faire?',
    summaryEyebrow: 'Presque fini',
    summaryTitle: '❤️ Notre rendez-vous',
    summaryDateLabel: '📅 Jour',
    summaryTimeLabel: '🕖 Heure',
    dayLabel: '📅 Jour',
    timeLabel: '🕖 Heure',
    allDaysLabel: 'N’importe quel jour',
    allHoursLabel: 'N’importe quelle heure',
    planButton: 'Planifier',
    stepEyebrow: 'Encore une chose',
    stepProgress: 'Étape {current} sur {total}',
    confirmButton: 'Confirmer l’heure',
    calendarButton: 'Ajouter au calendrier',
    finalTitle: 'Votre invitation est prête!',
    resultCopy: 'Partagez votre lien ou montrez le code QR.',
    linkLabel: 'Lien d’invitation',
    copyLink: '📋 Copier le lien',
    shareLink: '📤 Partager le lien',
    shareTextIntro: 'Hey 😎 Je suis partant ! Planifions notre rendez-vous ❤️',
    shareTextSuggestion: 'Ma proposition',
    shareTextAt: 'à',
    ratingStarAria: '{value} étoile',
    // {plural} will be replaced by an 's' when needed
    ratingThanks: 'Merci pour votre note de {value} étoile{plural}!',
    shareDialogTitle: 'Invitation Oui ou Oui',
    shareDialogText: 'Mon invitation est prête !',
    shareCopied: 'Lien copié !',
    shareCopyFailed: 'Échec de la copie. Veuillez copier manuellement.',
    shareCancelled: 'Le partage a été annulé.',
    shareUnavailable: 'Le partage n’est pas disponible sur cet appareil. Lien copié.'
  }
};

let currentLanguage = 'de';

function translatePage(lang) {
  if (!translations[lang]) return;
  currentLanguage = lang;
  document.documentElement.lang = translations[lang].lang;
  const t = translations[lang];
  lockTitleEl.textContent = t.lockTitle;
  if (lockOverlay && !lockOverlay.hidden) {
    lockMessageEl.textContent = t.lockMessage;
  }
  heroEyebrow.textContent = t.heroEyebrow;
  heroSlogan.textContent = t.heroSlogan;
  startButtonText.textContent = t.startButton;
  ratingLabel.textContent = t.ratingLabel;
  ratingMessage.textContent = t.ratingPrompt;
  questionEyebrow.textContent = t.questionEyebrow;
  document.querySelector('#questionTitle').textContent = t.questionTitle;
  yesBtn.textContent = t.yesButton;
  noBtn.textContent = t.noButton;
  document.querySelector('#successTitle').textContent = t.successTitle;
  document.querySelector('#successCopy').textContent = t.successCopy;
  planButtonText.textContent = t.planButton;
  plannerEyebrow.textContent = t.plannerEyebrow;
  document.querySelector('#plannerTitle').textContent = t.plannerTitle;
  summaryEyebrow.textContent = t.summaryEyebrow;
  document.querySelector('#summaryTitle').textContent = t.summaryTitle;
  document.querySelector('label[for="daySelect"] span').textContent = t.dayLabel;
  document.querySelector('label[for="timeSelect"] span').textContent = t.timeLabel;
  confirmButtonText.textContent = t.confirmButton;
  calendarButtonText.textContent = t.calendarButton;
  finalTitleEl.textContent = t.finalTitle;
  resultCopy.textContent = t.resultCopy;
  document.querySelector('label[for="inviteLink"]').textContent = t.linkLabel;
  copyLinkBtn.textContent = t.copyLink;
  shareLinkBtn.textContent = t.shareLink;
  ratingStars.forEach((star) => {
    star.setAttribute('aria-label', t.ratingStarAria.replace('{value}', star.dataset.value));
  });

  if (langSelect) {
    langSelect.setAttribute('aria-label', t.languageLabel || 'Sprache wählen');
  }
  if (dateTypeGrid) {
    dateTypeGrid.setAttribute('aria-label', t.dateTypeGridAria || 'Date-Typ auswählen');
  }
  if (inviteQrEl) {
    inviteQrEl.alt = t.qrAlt || inviteQrEl.alt;
  }
  const logoImage = document.querySelector('#logoButton img');
  if (logoImage) {
    logoImage.alt = t.logoAlt || logoImage.alt;
  }

  renderDateTypes();

  if (state.selectedType) {
    refreshSelectedTypeLocale();
  }

  populateDayAndTimeSelects(daySelect.value, timeSelect.value);

  if (screens.summary.classList.contains('active')) {
    renderSummary();
  }

  if (screens.planner.classList.contains('active') && state.selectedType) {
    renderStep();
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('siteLang') || 'de';
  currentLanguage = savedLang;
  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (event) => {
      const value = event.target.value;
      translatePage(value);
      localStorage.setItem('siteLang', value);
    });
  }
  translatePage(savedLang);
}

const dateTypeDefinitions = [
  {
    id: "restaurant",
    icon: "🍕",
    summaryIcon: "📍",
    titles: {
      de: "Restaurant",
      en: "Restaurant",
      fr: "Restaurant"
    },
    steps: [
      {
        key: "cuisine",
        question: {
          de: "Welche Küche?",
          en: "Which cuisine?",
          fr: "Quelle cuisine ?"
        },
        choices: {
          de: ["Italienisch", "Sushi", "Burger", "Steak", "Mexikanisch", "Vegetarisch", "Indisch", "Chinesisch", "Französisch", "Mediterran"],
          en: ["Italian", "Sushi", "Burgers", "Steak", "Mexican", "Vegetarian", "Indian", "Chinese", "French", "Mediterranean"],
          fr: ["Italienne", "Sushi", "Burger", "Steak", "Mexicain", "Végétarien", "Indien", "Chinois", "Français", "Méditerranéen"]
        }
      },
      {
        key: "atmosphere",
        question: {
          de: "Atmosphäre?",
          en: "Atmosphere?",
          fr: "Ambiance ?"
        },
        choices: {
          de: ["Locker 😎", "Elegant 🤵"],
          en: ["Laid-back 😎", "Elegant 🤵"],
          fr: ["Décontracté 😎", "Élégant 🤵"]
        }
      },
      {
        key: "dessert",
        question: {
          de: "Dessert?",
          en: "Dessert?",
          fr: "Dessert ?"
        },
        choices: {
          de: ["🍰 Ja", "😅 Nein"],
          en: ["🍰 Yes", "😅 No"],
          fr: ["🍰 Oui", "😅 Non"]
        }
      },
      {
        key: "drinks",
        question: {
          de: "Getränke?",
          en: "Drinks?",
          fr: "Boissons ?"
        },
        choices: {
          de: ["🍷 Wein", "🍸 Cocktail", "🍹 Smoothie", "☕ Kaffee", "🥤 Soft Getränk"],
          en: ["🍷 Wine", "🍸 Cocktail", "🍹 Smoothie", "☕ Coffee", "🥤 Soft drink"],
          fr: ["🍷 Vin", "🍸 Cocktail", "🍹 Smoothie", "☕ Café", "🥤 Boisson soft"]
        }
      }
    ]
  },
  {
    id: "cinema",
    icon: "🎬",
    summaryIcon: "📍",
    titles: {
      de: "Film",
      en: "Movie",
      fr: "Film"
    },
    steps: [
      {
        key: "wo",
        question: {
          de: "Wo?",
          en: "Where?",
          fr: "Où ?"
        },
        choices: {
          de: ["🎥 Kino", "🏠 Zuhause"],
          en: ["🎥 Cinema", "🏠 Home"],
          fr: ["🎥 Cinéma", "🏠 À la maison"]
        }
      },
      {
        key: "genre",
        question: {
          de: "Was für ein Film?",
          en: "What kind of movie?",
          fr: "Quel genre de film ?"
        },
        choices: {
          de: ["Romantik ❤️", "Comedy 😂", "Horror 😱", "Sci-Fi 🚀", "Action 🔥"],
          en: ["Romance ❤️", "Comedy 😂", "Horror 😱", "Sci-Fi 🚀", "Action 🔥"],
          fr: ["Romance ❤️", "Comédie 😂", "Horreur 😱", "Sci-Fi 🚀", "Action 🔥"]
        }
      },
      {
        key: "popcorn",
        question: {
          de: "Popcorn?",
          en: "Popcorn?",
          fr: "Popcorn ?"
        },
        choices: {
          de: ["🍿 Ja", "😅 Nein"],
          en: ["🍿 Yes", "😅 No"],
          fr: ["🍿 Oui", "😅 Non"]
        }
      }
    ]
  },
  {
    id: "cafe",
    icon: "☕",
    summaryIcon: "📍",
    titles: {
      de: "Kaffee",
      en: "Cafe",
      fr: "Café"
    },
    steps: [
      {
        key: "when",
        question: {
          de: "Wann?",
          en: "When?",
          fr: "Quand ?"
        },
        choices: {
          de: ["☀️ morgens", "🌇 nachmittags", "🌙 abends"],
          en: ["☀️ morning", "🌇 afternoon", "🌙 evening"],
          fr: ["☀️ matin", "🌇 après-midi", "🌙 soir"]
        }
      }
    ]
  },
  {
    id: "walk",
    icon: "🌳",
    summaryIcon: "📍",
    titles: {
      de: "Spaziergang",
      en: "Walk",
      fr: "Promenade"
    },
    steps: [
      {
        key: "where",
        question: {
          de: "Wo?",
          en: "Where?",
          fr: "Où ?"
        },
        choices: {
          de: ["🌳 Park", "🌅 See", "🏰 Altstadt", "🌸 Botanischer Garten"],
          en: ["🌳 Park", "🌅 Lake", "🏰 Old town", "🌸 Botanical garden"],
          fr: ["🌳 Parc", "🌅 Lac", "🏰 Vieille ville", "🌸 Jardin botanique"]
        }
      }
    ]
  },
  {
    id: "bowling",
    icon: "🎳",
    summaryIcon: "📍",
    titles: {
      de: "Bowling",
      en: "Bowling",
      fr: "Bowling"
    },
    steps: [
      {
        key: "deal",
        question: {
          de: "Verlierer bezahlt das Eis? 🍦",
          en: "Loser pays for ice cream? 🍦",
          fr: "Le perdant paie la glace ? 🍦"
        },
        choices: {
          de: ["😎 Deal", "😂 Niemals"],
          en: ["😎 Deal", "😂 Never"],
          fr: ["😎 Deal", "😂 Jamais"]
        }
      }
    ]
  },
  {
    id: "park",
    icon: "🎡",
    summaryIcon: "📍",
    titles: {
      de: "Freizeitpark",
      en: "Amusement park",
      fr: "Parc d'attractions"
    },
    steps: [
      {
        key: "coasters",
        question: {
          de: "Möchtest du alle Achterbahnen fahren?",
          en: "Want to ride all roller coasters?",
          fr: "Tu veux faire tous les grands huit ?"
        },
        choices: {
          de: ["🎢 Natürlich", "😅 Vielleicht"],
          en: ["🎢 Of course", "😅 Maybe"],
          fr: ["🎢 Bien sûr", "😅 Peut-être"]
        }
      }
    ]
  }
];

function getLocalizedDateTypes(lang) {
  return dateTypeDefinitions.map((type) => ({
    id: type.id,
    icon: type.icon,
    title: type.titles[lang] || type.titles.de,
    summaryIcon: type.summaryIcon,
    steps: type.steps.map((step) => ({
      key: step.key,
      question: step.question[lang] || step.question.de,
      choices: step.choices[lang] || step.choices.de
    }))
  }));
}

function refreshSelectedTypeLocale() {
  if (!state.selectedType) return;
  const types = getLocalizedDateTypes(currentLanguage);
  const type = types.find((item) => item.id === state.selectedType.id);
  if (!type) return;
  state.selectedType = type;
}

const dayOptions = [
  { key: 'all', labels: { de: 'Irgendein Tag', en: 'Any day', fr: 'Quand vous voulez' } },
  { key: 'sun', labels: { de: 'Sonntag', en: 'Sunday', fr: 'Dimanche' } },
  { key: 'mon', labels: { de: 'Montag', en: 'Monday', fr: 'Lundi' } },
  { key: 'tue', labels: { de: 'Dienstag', en: 'Tuesday', fr: 'Mardi' } },
  { key: 'wed', labels: { de: 'Mittwoch', en: 'Wednesday', fr: 'Mercredi' } },
  { key: 'thu', labels: { de: 'Donnerstag', en: 'Thursday', fr: 'Jeudi' } },
  { key: 'fri', labels: { de: 'Freitag', en: 'Friday', fr: 'Vendredi' } },
  { key: 'sat', labels: { de: 'Samstag', en: 'Saturday', fr: 'Samedi' } }
];

const dayIndexMap = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6
};

const state = {
  noAttempts: 0,
  selectedType: null,
  stepIndex: 0,
  answers: {}
};

// --- Site lock overlay support ---
const lockOverlay = document.querySelector('#lockOverlay');
const lockTitleEl = document.querySelector('#lockTitle');
const lockMessageEl = document.querySelector('#lockMessage');
const appShell = document.querySelector('.app-shell');

function showLock(message = 'Webseite wurde vorübergehend gesperrt', owner = 'CharlesCpr') {
  if (owner) {
    lockMessageEl.textContent = `${message} durch den Owner "${owner}"`;
  } else {
    lockMessageEl.textContent = message;
  }
  lockOverlay.hidden = false;
  // block interaction with the app
  if (appShell) appShell.setAttribute('aria-hidden', 'true');
  appShell.style.pointerEvents = 'none';
  document.documentElement.style.overflow = 'hidden';
}

function hideLock() {
  lockOverlay.hidden = true;
  if (appShell) appShell.removeAttribute('aria-hidden');
  appShell.style.pointerEvents = '';
  document.documentElement.style.overflow = '';
}
function setRating(value) {
  ratingStars.forEach((star) => {
    const starValue = Number(star.dataset.value);
    if (starValue <= value) {
      star.classList.add('active');
      star.setAttribute('aria-pressed', 'true');
    } else {
      star.classList.remove('active');
      star.setAttribute('aria-pressed', 'false');
    }
  });
  const t = translations[currentLanguage] || translations.de;
  const plural = (currentLanguage === 'fr' && value > 1) ? 's' : '';
  const template = t.ratingThanks || translations.de.ratingThanks;
  ratingMessage.textContent = template.replace('{value}', String(value)).replace('{plural}', plural);

}

function createInviteLink() {
  const isLocalFile = window.location.protocol === 'file:';
  const url = new URL(window.location.href);
  url.searchParams.set('invite', 'oui-ou-oui');
  url.hash = '';

  if (isLocalFile) {
    return `https://date-invitation-gilt.vercel.app/?invite=oui-ou-oui`;
  }

  return url.toString();
}

function updateInviteResult() {
  const url = createInviteLink();
  inviteLinkEl.href = url;
  inviteLinkEl.textContent = url;
  inviteQrEl.src = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(url)}`;
}

function copyInviteLink() {
  const url = inviteLinkEl.href;
  const t = translations[currentLanguage] || translations.de;
  return navigator.clipboard.writeText(url).then(() => {
    shareStatus.textContent = t.shareCopied || 'Link kopiert!';
  }).catch((err) => {
    shareStatus.textContent = t.shareCopyFailed || 'Kopieren fehlgeschlagen. Bitte manuell kopieren.';
    throw err;
  });
}

function shareInviteLink() {
  const url = inviteLinkEl.href;
  const t = translations[currentLanguage] || translations.de;
  if (navigator.share) {
    navigator.share({ title: t.shareDialogTitle || 'Oui ou Oui Einladung', text: t.shareDialogText || 'Meine Einladung ist fertig!', url })
      .catch(() => {
        shareStatus.textContent = t.shareCancelled || 'Teilen wurde abgebrochen.';
      });
  } else {
    copyInviteLink().then(() => {
      shareStatus.textContent = t.shareUnavailable || 'Teilen ist auf diesem Gerät nicht verfügbar. Link wurde kopiert.';
    }).catch(() => {
      // copyInviteLink already set an error message
    });
  }
}
function initLockFromStorage() {
  try {
    const locked = localStorage.getItem('siteLocked');
    if (locked === 'true') {
      const msg = localStorage.getItem('siteLockMessage');
      const owner = localStorage.getItem('siteLockOwner');
      if (!msg && !owner) {
        // stale lock state from earlier versions; clear it and show the site
        clearLockStorage();
        hideLock();
        return;
      }
      showLock(msg || 'Webseite wurde vorübergehend gesperrt', owner || 'CharlesCpr');
    } else {
      hideLock();
    }
  } catch (e) {
    // ignore storage errors
  }
}

// Convenience functions to control from console or other scripts
window.lockSite = function(message, owner) {
  try {
    localStorage.setItem('siteLocked', 'true');
    if (message) localStorage.setItem('siteLockMessage', message);
    if (owner) localStorage.setItem('siteLockOwner', owner);
  } catch (e) {}
  initLockFromStorage();
};

window.unlockSite = function() {
  try {
    localStorage.setItem('siteLocked', 'false');
  } catch (e) {}
  initLockFromStorage();
};

// --- Sperre per Code aktivieren / deaktivieren ---
// Um die Seite zu sperren: entferne die Kommentarzeichen vor den drei Zeilen
// und kommentiere die Entsperrzeile aus.
 //localStorage.setItem('siteLocked', 'true');
 //localStorage.setItem('siteLockMessage', 'Webseite wurde vorübergehend gesperrt');
 //localStorage.setItem('siteLockOwner', 'Charles Compaore');
 //initLockFromStorage();

 //Um die Seite zu entsperren: entferne die Kommentarzeichen vor dieser Zeile.
  localStorage.setItem('siteLocked', 'false');
  initLockFromStorage();

// Achtung: Diese Befehle gelten nur für diesen Browser / dieses Gerät.

window.clearLockStorage = function() {
  try {
    localStorage.removeItem('siteLocked');
    localStorage.removeItem('siteLockMessage');
    localStorage.removeItem('siteLockOwner');
  } catch (e) {}
  initLockFromStorage();
};
// clearLockStorage();

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomTease() {
  const messages = playfulMessagesByLang[currentLanguage] || playfulMessagesByLang.de;
  const message = messages[randomBetween(0, messages.length - 1)];
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
  const types = getLocalizedDateTypes(currentLanguage);

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
    dateTypeGrid.appendChild(button);
  });
}

function selectDateType(typeId) {
  const types = getLocalizedDateTypes(currentLanguage);
  state.selectedType = types.find((type) => type.id === typeId);
  state.stepIndex = 0;
  state.answers = {};
  dateTypeGrid.style.display = "none";
  optionStep.hidden = false;
  renderStep();
}

function renderStep() {
  const currentStep = state.selectedType.steps[state.stepIndex];
  const totalSteps = state.selectedType.steps.length;
  const t = translations[currentLanguage] || translations.de;

  stepEyebrow.textContent = `${t.stepEyebrow} · ${t.stepProgress.replace('{current}', state.stepIndex + 1).replace('{total}', totalSteps)}`;
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
  const t = translations[currentLanguage] || translations.de;
  const selectedDay = dayOptions.find((option) => option.key === daySelect.value);
  const dayLabel = selectedDay ? selectedDay.labels[currentLanguage] : daySelect.value;
  const timeLabel = timeSelect.value === 'all' ? t.allHoursLabel : timeSelect.value;
  const items = [
    { label: "📍 " + state.selectedType.title, value: state.selectedType.title },
    ...readableAnswers().map((answer) => ({
      label: "✨ " + answer.label,
      value: answer.value
    })),
    { label: t.summaryDateLabel, value: dayLabel },
    { label: t.summaryTimeLabel, value: timeLabel }
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

function populateDayAndTimeSelects(selectedDay = 'all', selectedTime = '10:00') {
  const locale = currentLanguage;
  daySelect.innerHTML = '';
  const labelSelectDay = document.querySelector('label[for="daySelect"] span');
  const labelSelectTime = document.querySelector('label[for="timeSelect"] span');
  if (labelSelectDay) labelSelectDay.textContent = translations[locale]?.dayLabel || translations.de.dayLabel;
  if (labelSelectTime) labelSelectTime.textContent = translations[locale]?.timeLabel || translations.de.timeLabel;

  dayOptions.forEach((dayOption) => {
    const option = document.createElement('option');
    option.value = dayOption.key;
    option.textContent = dayOption.labels[locale] || dayOption.labels.de;
    daySelect.appendChild(option);
  });

  timeSelect.innerHTML = '';
  const allHoursOption = document.createElement('option');
  allHoursOption.value = 'all';
  allHoursOption.textContent = translations[locale]?.allHoursLabel || translations.de.allHoursLabel;
  timeSelect.appendChild(allHoursOption);

  for (let h = 10; h <= 22; h += 1) {
    const opt = document.createElement('option');
    const label = `${String(h).padStart(2, '0')}:00`;
    opt.value = label;
    opt.textContent = label;
    timeSelect.appendChild(opt);
  }

  const availableDays = Array.from(daySelect.options).map((option) => option.value);
  const availableTimes = Array.from(timeSelect.options).map((option) => option.value);
  daySelect.value = availableDays.includes(selectedDay) ? selectedDay : 'all';
  timeSelect.value = availableTimes.includes(selectedTime) ? selectedTime : '10:00';
}

function buildDateText() {
  const t = translations[currentLanguage] || translations.de;
  const answerText = readableAnswers()
    .map((answer) => `${answer.label}: ${answer.value}`)
    .join(", ");

  const selectedDay = dayOptions.find((option) => option.key === daySelect.value);
  const dayLabel = selectedDay ? selectedDay.labels[currentLanguage] : daySelect.value;
  const timeLabel = timeSelect.value === 'all' ? t.allHoursLabel : timeSelect.value;

  return `${t.shareTextIntro}\n\n${t.shareTextSuggestion}: ${state.selectedType.title}${answerText ? `\n${answerText}` : ""} \n${dayLabel} ${t.shareTextAt} ${timeLabel}.`;
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

function nextDateForDay(dayKey, timeValue) {
  const now = new Date();
  const targetDayIndex = dayIndexMap[dayKey] ?? now.getDay();

  if (dayKey === 'all') {
    dayKey = Object.keys(dayIndexMap)[now.getDay()];
  }
  if (timeValue === 'all') {
    timeValue = '19:00';
  }

  const [hours, minutes] = timeValue.split(":").map(Number);
  const candidate = new Date(now);
  candidate.setHours(hours, minutes, 0, 0);

  if (targetDayIndex === now.getDay() && candidate > now) {
    return candidate;
  }

  const diff = (targetDayIndex - now.getDay() + 7) % 7 || 7;
  candidate.setDate(now.getDate() + diff);
  return candidate;
}

function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

function finishExperience() {
  launchConfetti(120);
  launchHearts(42);
  updateInviteResult();
  showScreen("final");
}

startBtn.addEventListener("click", () => {
  renderDateTypes();
  showScreen("planner");
});
logoButton?.addEventListener("click", () => showScreen("start"));

ratingStars.forEach((star) => {
  star.addEventListener('click', () => setRating(Number(star.dataset.value)));
});

copyLinkBtn?.addEventListener('click', copyInviteLink);
shareLinkBtn?.addEventListener('click', shareInviteLink);

planBtn.addEventListener("click", () => {
  renderDateTypes();
  showScreen("planner");
});

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

initLockFromStorage();
initLanguage();
populateDayAndTimeSelects();
renderDateTypes();
