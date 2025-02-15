document.addEventListener("DOMContentLoaded", function () {
    const carta = document.getElementById("carta");

    carta.addEventListener("click", function () {
        carta.classList.toggle("abierta");
    });
});
