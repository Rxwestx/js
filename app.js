const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];
const correct = "ニンテンドーDS";

const $button = document.getElementsByTagName("button");

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHander = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
};

//ボタンをクリックされたら正誤判定
$button[0].addEventListener("click", (e) => {
  clickHander(e);
});
$button[1].addEventListener("click", (e) => {
  clickHander(e);
});
$button[2].addEventListener("click", (e) => {
  clickHander(e);
});

$button[3].addEventListener("click", (e) => {
  clickHander(e);
});
