const nombre=document.getElementById("proposition");
const testButton=document.getElementById("tester");
const message=document.getElementById("message");
const essais=document.getElementById("essais");
const reinitialiser=document.getElementById("reinitialiser");

let essaisCount = 0;

testButton.addEventListener("click", function() {
    const reponse=Number(nombre.value);
    const nombreMystere=Math.floor(Math.random() * 100) + 1;

    if (reponse === nombreMystere) {
        message.textContent = "Bravo ! Vous avez trouvé le nombre mystère.";
    } else if(reponse < nombreMystere){
        message.textContent = "Trop petit !";
    } else {
        message.textContent = "Trop grand !";
    }
    essaisCount++;
    essais.textContent = "Nombre d'essais : " + essaisCount;
    if (essaisCount >=5){
        message.textContent = "Vous avez atteint le nombre maximum d'essais.";
        testButton.disabled = true;
    }
    nombre.value = "";
    alert("Nombre mystère était : " + nombreMystere);
});

reinitialiser.addEventListener("click", function() {
    nombre.value = "";
    message.textContent = "";
    essais.textContent = "Nombre d'essais : 0";
});