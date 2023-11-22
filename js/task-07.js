const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.addEventListener("input", onInputValue);
function onInputValue() {
    span.style.fontSize = input.value + "px";
};