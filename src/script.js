// 数値を入力して判定ボタンをクリックすると、条件に合った内容の特定のp要素(最初はvisibility: hidden;で非表示)をvisibility: visible;で出現させたい。現状として、どうしてもinput要素内の入力値を取得できず、undefinedやNaNが返ってきてしまう。クリックイベントは動作しているが、
const form =　document.querySelector(".form");
const input01 = document.getElementsByClassName("input01");
const input02 = document.getElementsByClassName("input02");

form.addEventListener("submit", (event) => {
 event.preventDefault();
 buttonClick();
});

const checkButton = document.getElementsByClassName("button");
console.log(checkButton)

function buttonClick() {
  const input011 = Number(input01.value)
  const input022 = Number(input02.value)
  console.log(input011) //←Numberで数値型のデータにしているのに、NaNが出力されてしまう。
  if (input011 >= 20 && input022 >= 14) {
    offense.classList.add("visibile")
   }
}



