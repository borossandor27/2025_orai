document.addEventListener("DOMContentLoaded", () => {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    document.getElementById("osszead").addEventListener("click", () => {
        const n1 = Number(number1.value);
        const n2 = Number(number2.value);
        const osszeg = n1 + n2;
        alert(`Az összeadás eredménye: ${osszeg}`);
    });
});