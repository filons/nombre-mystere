const nombre = document.getElementById("proposition");
const testButton = document.getElementById("tester");
const message = document.getElementById("message");
const essais = document.getElementById("essais");
const reinitialiser = document.getElementById("reinitialiser");

let essaisCount = 0;
let nombreMystere = Math.floor(Math.random() * 100) + 1;
alert("Bienvenue dans le jeu du nombre mystère ! Devinez un nombre entre 1 et 100. Vous avez 5 essais.");

testButton.addEventListener("click", function () {
    const reponse = Number(nombre.value);

    if (reponse === nombreMystere) {
        message.textContent = "🎉 Bravo ! Vous avez trouvé le nombre mystère.";
        testButton.disabled = true;
    } else if (reponse < nombreMystere) {
        message.textContent = "📉 Trop petit !";
    } else {
        message.textContent = "📈 Trop grand !";
    }

    essaisCount++;
    essais.textContent = "Nombre d'essais : " + essaisCount;

    if (essaisCount >= 5 && reponse !== nombreMystere) {
        message.textContent = "❌ Vous avez atteint le nombre maximum d'essais. Le nombre était " + nombreMystere;
        testButton.disabled = true;
    }

    nombre.value = "";
});

reinitialiser.addEventListener("click", function () {
    nombre.value = "";
    message.textContent = "";
    essaisCount = 0;
    essais.textContent = "Nombre d'essais : 0";
    testButton.disabled = false;
    nombreMystere = Math.floor(Math.random() * 100) + 1;
});
