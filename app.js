const quiz = [
  {
    question: "10進数27はASCIIではをどう表記する？",
    answers: ["NUL", "@", "ESC", "10", "A"],
    correct: "ESC",
  },
  {
    question: "高水準言語で最初に出来たといわれているプログラミング言語は？",
    answers: ["アセンブル", "COBOL", "R", "FORTRAN", "BASIC"],
    correct: "FORTRAN",
  },
  {
    question: "Windowsの実行ファイルの拡張子は？",
    answers: [".exe", ".dmg", ".app", ".msi", ".csv", ".env"],
    correct: ".exe",
  },
  {
    question: "コンパイルが必要な言語は？",
    answers: ["Go", "perl", "sass", "Ruby", "どれも当てはまらない"],
    correct: "Go",
  },
  {
    question: "次のうち、２進数でないのはどれ？",
    answers: [
      "機械語",
      "オブジェクトプログラム",
      "バイナリデータ",
      "0010",
      "どれも２進数",
    ],
    correct: "どれも２進数",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解!!");
    score++;
  } else {
    window.alert("不正解");
  }
  // クイズを回す命令文追加
  quizIndex++;
  if (quizIndex < quizLength) {
    // 問題数があればこちらを実行
    setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert("終了!!あなたの正解率は" + score + "/" + quizLength + "です");
  }
};

//ボタンをクリックされたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
