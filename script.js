const lessons = {
  spanish: [
    { word: "Hola", translation: "Hello", pronunciation: "[oh-lah]" },
    { word: "Gracias", translation: "Thank you", pronunciation: "[grah-syahs]" }
  ],
  french: [
    { word: "Bonjour", translation: "Hello", pronunciation: "[bon-zhoor]" },
    { word: "Merci", translation: "Thank you", pronunciation: "[mehr-see]" }
  ],
  german: [
    { word: "Hallo", translation: "Hello", pronunciation: "[hah-lo]" },
    { word: "Danke", translation: "Thank you", pronunciation: "[dahn-keh]" }
  ]
};

let currentLanguage = "spanish";

const wordElement = document.getElementById("word");
const translationElement = document.getElementById("translation");
const pronunciationElement = document.getElementById("pronunciation");
const newWordButton = document.getElementById("new-word");
const startLessonButton = document.getElementById("start-lesson");
const languageSelect = document.getElementById("language");

const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");

function showRandomWord() {
  const words = lessons[currentLanguage];
  const randomIndex = Math.floor(Math.random() * words.length);
  const wordObj = words[randomIndex];
  wordElement.textContent = wordObj.word;
  translationElement.textContent = wordObj.translation;
  pronunciationElement.textContent = wordObj.pronunciation;
}

function startLesson() {
  currentLanguage = languageSelect.value;
  document.querySelector(".lesson-section").classList.remove("hidden");
  document.querySelector(".quiz-section").classList.remove("hidden");
  showRandomWord();
  loadQuiz();
}

function loadQuiz() {
  let question, correctAnswer, options;

  if (currentLanguage === "spanish") {
    question = 'What is "Gracias" in English?';
    correctAnswer = "Thank you";
    options = ["Thank you", "Goodbye", "Please"];
  } else if (currentLanguage === "french") {
    question = 'What is "Merci" in English?';
    correctAnswer = "Thank you";
    options = ["Hello", "Thank you", "Goodbye"];
  } else if (currentLanguage === "german") {
    question = 'What is "Danke" in English?';
    correctAnswer = "Thank you";
    options = ["Please", "Thank you", "Hello"];
  }

  quizQuestion.textContent = question;
  quizOptions.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("quiz-option");
    btn.addEventListener("click", () => {
      quizFeedback.textContent = opt === correctAnswer ? "✅ Correct!" : "❌ Try again";
    });
    quizOptions.appendChild(btn);
  });
}

newWordButton.addEventListener("click", showRandomWord);
startLessonButton.addEventListener("click", startLesson);
