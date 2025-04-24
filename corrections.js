// On récupère les données de correction depuis le stockage local du navigateur
const correctionsData = JSON.parse(localStorage.getItem("corrections"));

// Si les données existent
if (correctionsData) {
    // On cache le message de chargement
    document.getElementById("loading").style.display = "none";
    // On affiche le conteneur des corrections
    document.getElementById("corrections-container").style.display = "block";

    // On récupère l'endroit où afficher les corrections
    const container = document.getElementById("corrections");

    // Pour chaque question/réponse dans les données
    correctionsData.forEach((item, index) => {
        // On crée un nouvel élément <div> pour afficher la correction
        const div = document.createElement("div");

        // On ajoute une classe CSS selon si la réponse est juste ou fausse
        div.className = item.estJuste ? "correction-item correct" : "correction-item incorrect";

        // On remplit le contenu HTML de la correction
        div.innerHTML = `
            <strong>Q${index + 1} :</strong> ${item.question}<br>
            <strong>Votre réponse :</strong> ${item.userRep || "(aucune)"}<br>
            ${item.estJuste 
                ? "<strong>😉 Correct</strong>" 
                : `<strong>😓 Bonne réponse :</strong> ${item.bonneRep}`
            }`;

        // On ajoute la correction au conteneur
        container.appendChild(div);
    });
} else {
    // Si aucune donnée n'a été trouvée, on affiche un message d'erreur
    document.getElementById("loading").innerText = "Erreur : Aucune donnée disponible";
}

// Fonction pour recommencer le quiz
function recommencerQuiz() {
    // Ajoute une animation de disparition (fading-out)
    document.body.classList.add('fading-out');

    // Après 0,5 seconde, on redirige vers la page du quiz
    setTimeout(() => {
        window.location.href = "quizz.html";
    }, 500);
}

d