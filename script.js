// 1. Récupérer les éléments de la page.
const formulaire = document.querySelector("#form-tache");
const champTache = document.querySelector("#input-tache");
const listeTaches = document.querySelector("#liste-taches");
const modeleTache = document.querySelector("#template-tache");
const compteur = document.querySelector("#nb-taches");
const boutonToutSupprimer = document.querySelector("#btn-vider-terminees");

// Adapter le texte du bouton à son action.
boutonToutSupprimer.textContent = "Tout supprimer";

// 2. Mettre à jour le nombre de tâches présentes.
function mettreAJourCompteur() {
  compteur.textContent = listeTaches.children.length;
}

// 3. Ajouter une tâche à l'envoi du formulaire.
function ajouterTache(event) {
  // Empêcher le rechargement de la page.
  event.preventDefault();

  // Lire le texte et retirer les espaces au début et à la fin.
  const texte = champTache.value.trim();

  // Arrêter la fonction si le texte est vide.
  if (texte === "") {
    champTache.focus();
    return;
  }

  // Copier le modèle avec tous ses éléments.
  const nouvelleTache =
    modeleTache.content.firstElementChild.cloneNode(true);

  // Récupérer les éléments à l'intérieur de cette copie.
  const texteTache = nouvelleTache.querySelector(".tache-texte");
  const boutonSupprimer = nouvelleTache.querySelector(".btn-supprimer");
  const caseTache = nouvelleTache.querySelector(".tache-case");

  // Insérer le texte saisi dans la tâche.
  texteTache.textContent = texte;

  // Supprimer uniquement cette tâche.
  boutonSupprimer.addEventListener("click", function () {
    nouvelleTache.remove();
    mettreAJourCompteur();
  });

  // Cocher ou décocher une tâche : adapter son apparence.
  caseTache.addEventListener("change", function () {
    nouvelleTache.classList.toggle("terminee", caseTache.checked);
  });

  // Ajouter la tâche à la liste.
  listeTaches.appendChild(nouvelleTache);

  // Actualiser le compteur et préparer la prochaine saisie.
  mettreAJourCompteur();
  champTache.value = "";
  champTache.focus();
}

// 4. Supprimer toutes les tâches.
function supprimerToutesLesTaches() {
  listeTaches.replaceChildren();
  mettreAJourCompteur();
}

// 5. Relier les actions aux événements.
formulaire.addEventListener("submit", ajouterTache);
boutonToutSupprimer.addEventListener("click", supprimerToutesLesTaches);

// Initialiser le compteur.
mettreAJourCompteur();