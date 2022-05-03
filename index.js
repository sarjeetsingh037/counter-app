const incrementBtn = document.getElementById("increase");
const decrementBtn = document.getElementById("decrease");
const h2 = document.querySelector("h2");
let count = +h2.textContent;
// const timerHandler = () => {
//   setInterval(() => {
//     h2.textContent = ++count;
//     console.log(count);
//   }, 1000);
// };
// timerHandler();
incrementBtn.addEventListener("click", () => {
  h2.textContent = ++count;
});
decrementBtn.addEventListener("click", () => {
  h2.textContent = --count;
});
