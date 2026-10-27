const formTache = document.querySelector("#form-tache");
const inputTache = document.querySelector("#input-tache");
const templateTache = document.querySelector("#template-tache");
const listeTaches = document.querySelector("#liste-taches");
const compteurTaches = document.querySelector("#nb-taches");
const boutonViderTerminees = document.querySelector("#btn-vider-terminees");

function mettreAJourCompteur() {
    const toutesLesTaches = listeTaches.querySelectorAll(".tache");

    compteurTaches.textContent = toutesLesTaches.length;
}

formTache.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(inputTache.value.trim());

    let texteTache = inputTache.value.trim();
    if (texteTache === "") {
        return;
    }

    const nouvelleTache = templateTache.content.cloneNode(true);
    const texteElement = nouvelleTache.querySelector(".tache-texte");
    texteElement.textContent = texteTache;
    const boutonSupprimer = nouvelleTache.querySelector(".btn-supprimer");
    boutonSupprimer.addEventListener("click", function () {
        boutonSupprimer.parentElement.remove();
        mettreAJourCompteur();
    });
    listeTaches.appendChild(nouvelleTache);
    mettreAJourCompteur();
    inputTache.value = "";


});

boutonViderTerminees.addEventListener("click", function () {
    const toutesLesTaches = listeTaches.querySelectorAll(".tache");

    toutesLesTaches.forEach(function (tache) {
        tache.remove();
    });
    
    mettreAJourCompteur();

});

