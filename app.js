const question = "ゲーム市場、最も売れたゲーム機は次のうちどれ？";
const answers = [
  "スーパーファミコン",
  "プレイステーション２",
  "ニンテンドースイッチ",
  "ニンテンドーDS",
];
const correct = "ニンテンドーDS";

//定数の文字列をHTMLに反映させる
document.getElementById("js-question").textContent = question;

const $button = document.getElementsByTagName("button");

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

// buttonをループ文にて再設計
let buttonIndex = 0;
let buttonLength = $button.length;
while (buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = answers[buttonIndex];
  buttonIndex++;
}

//ボタンをクリックされたら正誤判定
document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
});
document.getElementsByTagName("button")[1].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[1].textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
});
document.getElementsByTagName("button")[2].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[2].textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
});

document.getElementsByTagName("button")[3].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[3].textContent) {
    window.alert("正解!!");
  } else {
    window.alert("不正解");
  }
});
