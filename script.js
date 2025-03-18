const textform = document.querySelector(".textform");
const button = document.querySelector(".submitbutton");
const output = document.querySelector(".kekka");
let randomNumber = Math.floor(Math.random() * 100) + 1;  // ゲームごとに新しいランダムな数字
let attempts = 0;  // 試行回数をカウン
console.log(randomNumber);

function distinguish() {
    var inputvalue = textform.value.trim();
    console.log(inputvalue);

    if (inputvalue === "") {
        alert("何も入力されていません！！");
    } else if (!isNaN(inputvalue)) {
        inputvalue = parseInt(inputvalue);  // 入力を整数に変換

        attempts++;  // 試行回数を1回増やす

        // ユーザーが入力した値とランダムな数字を比較
        if (inputvalue === randomNumber) {
            output.textContent = `正解！おめでとう！${attempts}回でクリアしました。`;
            // ゲーム終了後に新しい数字を生成する場合
            randomNumber = Math.floor(Math.random() * 100) + 1;  // 新しいランダム数字を生成
            attempts = 0;  // 次のゲームのために試行回数リセット
        } else if (inputvalue < randomNumber) {
            output.textContent = "もっと大きい数字です！";
        } else {
            output.textContent = "もっと小さい数字です！";
        }
    } else {
        alert("それは数字ではありません。");
    }
}
button.addEventListener('click', distinguish);
