const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", typeName);
function typeName(event) {
    const inputValue = event.currentTarget.value.trim();
    if (!event.currentTarget.value || !inputValue) {
        output.textContent = "Anonymous"
    } else {
        output.textContent = event.currentTarget.value
    }
};