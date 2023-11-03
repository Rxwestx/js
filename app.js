const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？?",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
  {
    question: "ゲーム市場、最も売れたゲーム機は次のうちどれ？??",
    answers: [
      "スーパーファミコン",
      "プレイステーション２",
      "ニンテンドースイッチ",
      "ニンテンドーDS",
    ],
    correct: "ニンテンドーDS",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;

// const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";
// const answers = [
//   "スーパーファミコン",
//   "プレイステーション２",
//   "ニンテンドースイッチ",
//   "ニンテンドーDS",
// ];
// const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
  // クイズを回す命令文追加
};

//ボタンをクリックされたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

// $button[0].addEventListener("click", (e) => {
//   clickHander(e);
// });
// $button[1].addEventListener("click", (e) => {
//   clickHander(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHander(e);
// });

// $button[3].addEventListener("click", (e) => {
//   clickHander(e);
// });
