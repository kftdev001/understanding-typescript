"use strict";
const button = document.querySelector('button');
// ('button')! ボタンのobjectがnullかどうかがわからない。 
// メソッドの後ろに! をつけるとエラーを回避できる。
// !の意味は後ほど説明
// typescript は javascript / node.js どちらでも利用される。
// a comment
button.addEventListener('click', () => {
    console.log('Clicked!');
});
// function add(n1: number, n2: number): number {
//   return n1 + n2;
// }
// let age;
// age = 30;
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }
// // printResult(add(5, 12));
// console.log("watch modexxxx!!!!!!")
//# sourceMappingURL=app.js.map