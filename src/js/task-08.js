const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const userEmail = event.currentTarget.elements.email.value;
    const userPassword = event.currentTarget.elements.password.value;
    if (!userEmail || !userPassword) {
        alert ("Усі поля повинні бути заповнені!")
    } else {
        const userData = {
            email: userEmail,
            password: userPassword
        }
        console.log(userData);
        event.currentTarget.reset();
    }
};
