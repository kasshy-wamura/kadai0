// ここからコードを書きます🤗
// alert("ジーズの授業です！");
// console.log("はじめてのJavaScript");

// console.log(23 + 5);
// console.log(2000 - 1800);
// console.log("18 + 5");

// const a = "ジーズアカデミー";

// console.log(a);

// const ten = 10;

// const kekka = ten + ten;

// const aa = 2;

// if (aa === 1) {
//     console.log("大吉");
// } else if (aa === 2) {
//     console.log("中吉");
// } else if (aa === 3){
//     console.log("小吉");
// }else {
//     console.log("吉");
// }

// var point=90;
// if (80 <= point){
//     console.log("素晴らしい！おめでとう！");
// }else {
//     console.log("もっと頑張りましょう！");
// }

// const random = Math.floor(Math.random() * 5);
// console.log(random, "ランダム数字");

// if(random === 0){
//     console.log("末吉");
// } else if (random === 1){
//     console.log("吉");
// } else if (random === 2){
//     console.log("小吉");
// } else if (random === 3){
//     console.log("中吉");
// } else if (random === 4){
//     console.log("大吉");
// }

// $("h1").on("click", function () {
//     $("h1").css("color", "red");
//     window.location.href = "https://gsacademy.jp/reading/gs-014/";
//   });

$('.a').on("click", function (){
    const random = Math.floor(Math.random() * 5);
console.log(random, "ランダム数字");

if(random === 0){
    $("h1").text("大吉");
    $("h1").css("color", "red");
} else if (random === 1){
    $("h1").text("吉");
    $("h1").css("color", "black");
} else if (random === 2){
    $("h1").text("小吉");
    $("h1").css("color", "black");
} else if (random === 3){
    $("h1").text("中吉");
    $("h1").css("color", "black");
} else if (random === 4){
    $("h1").text("末吉");
    $("h1").css("color", "black");
}
})