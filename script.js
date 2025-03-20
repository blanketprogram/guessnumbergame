window.addEventListener("load", function() {
    document.querySelector(".loading-screen").style.display = "none"; // ロード画面を非表示
    document.querySelector(".content").style.display = "block"; // ゲーム画面を表示
});
const textform = document.querySelector(".textform");
const button = document.querySelector(".submitbutton");
const output = document.querySelector(".kekka");
const reloadButton = document.querySelector(".reloadbutton");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
console.log(randomNumber);

function distinguish() {
    var inputvalue = textform.value.trim();
    console.log(inputvalue);

    if (inputvalue === "") {
        alert("何も入力されていません！！");
    } else if (!isNaN(inputvalue)) {
        inputvalue = parseInt(inputvalue);
        attempts++;
        if (inputvalue === randomNumber) {
            output.textContent = `正解！おめでとう！${attempts}回でクリアしました。`;
            randomNumber = Math.floor(Math.random() * 100) + 1;
            reloadButton.style.display = "block";
        } else if (inputvalue < randomNumber) {
            output.textContent = "もっと大きい数字です！";
        } else {
            output.textContent = "もっと小さい数字です！";
        }
    } else {
        alert("それは数字ではありません。");
        textform.value = "";
    }
}

button.addEventListener('click', distinguish);
reloadButton.addEventListener("click", function() {
    location.reload();
});
