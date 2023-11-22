const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleInput);
function handleInput(event) {
    const inputLength = event.currentTarget.value.length;
    const validLength = Number(input.dataset.length);
    if (inputLength < validLength) {
        input.classList.add("invalid");
    } else {
        input.classList.add("valid");
    }
};