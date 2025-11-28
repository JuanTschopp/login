const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("error");

loginBtn.addEventListener("click", () => {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();

    if (user === "juanpro" && pass === "1234") {
        // Acceso correcto → ir a menú principal
        window.location.href = "menu.html";
    } else {
        // Mostrar error
        errorMsg.classList.remove("hidden");
    }
});