const deBtn = document.querySelector(`[data-action="decrement"]`);
const inBtn = document.querySelector(`[data-action="increment"]`);
deBtn.addEventListener("click", minusClick);
inBtn.addEventListener("click", plusClick);
const counterValueSpan = document.querySelector("#value");
let counterValue = 0;
function plusClick() {
    counterValue += 1;
    counterValueSpan.textContent = counterValue;
};
function minusClick() {
    counterValue -= 1;
    counterValueSpan.textContent = counterValue;
};