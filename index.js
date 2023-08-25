var dado1 = Math.floor(Math.random() * 6) + 1;
var dado2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".dado-fulano").setAttribute("src", "Images/dice" + dado1 + ".png")
document.querySelector(".dado-beltrano").setAttribute("src", "Images/dice" + dado2 + ".png")

if (dado1 == dado2) {
    document.querySelector(".resultado").textContent = "Ih rapaz, empatou. 😅"
}

else if (dado1 > dado2) {
    document.querySelector(".resultado").textContent = "🚩 A vitória é do Fulano!!."
}

else if (dado1 < dado2) {
    document.querySelector(".resultado").textContent = "O Beltrano levou essa daqui. 🚩"
}