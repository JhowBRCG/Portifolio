// 1 Acessar a Janela (browser)                 .window
// 2 Pegar o HTML todo                          .document
// 3 Pegar o botão                              querySelector
// 4 Saber que está sendo clicado no botão      .addEventListener

// 5 Acessar a Janela
// 6 Pegar HTML todo
// 7 Pegar o elements
// 8 Mover o elements para a direita

const btnRight = document.querySelector(".button-arrow.-right");
const btnLeft = document.querySelector(".button-arrow.-left");
const elements = document.querySelector(".elements");
let pixels = 0;

btnRight.addEventListener("click", function () {
  pixels = pixels + 100;
  elements.style = `transform:translateX(${pixels}px);`;
});

btnLeft.addEventListener("click", function () {
  pixels = pixels + -100;
  elements.style = `transform:translateX(${pixels}px);`;
});
