const eyeButton = document.getElementById("eye");
const passwordInput = document.getElementById("password");

eyeButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
