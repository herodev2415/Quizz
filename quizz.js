 // Questions et réponses
 const questions = [
    "Qui a de très longs cheveux magiques et vit enfermée dans une tour ?",
    "Quelle princesse vit sous l'océan et rêve de devenir humaine ?",
    "Quel voleur au grand cœur trouve une lampe magique ?",
    "Qui croque une pomme empoisonnée et tombe dans un profond sommeil ?",
    "Quelle jeune femme perd une pantoufle de verre en fuyant un bal ?",
    "Quel lion doit reprendre sa place en tant que roi de la savane ?",
    "Quelle reine possède des pouvoirs de glace et vit à Arendelle ?",
    "Quelle jeune femme tombe amoureuse d'une bête prisonnière d'un château enchanté ?",
    "Quelle guerrière chinoise se déguise en homme pour aller à la guerre ?",
    "Quelle héroïne traverse l'océan pour sauver son île et restaurer le cœur de Te Fiti ?"
];

const reponses = [
    "raiponce", "ariel", "aladdin", "blanche neige", "cendrillon",
    "simba", "elsa", "belle", "mulan", "vaiana"
];

const choix = [
    ["raiponce", "cendrillon", "belle", "mulan"],
    ["vaiana", "ariel", "elsa", "blanche neige"],
    ["simba", "peter pan", "hercule", "aladdin"],
    ["cendrillon", "raiponce", "blanche neige", "ariel"],
    ["mulan", "cendrillon", "belle", "vaiana"],
    ["simba", "mufasa", "scar", "rafiki"],
    ["anna", "ariel", "elsa", "belle"],
    ["raiponce", "belle", "mulan", "jasmine"],
    ["cendrillon", "vaiana", "elsa", "mulan"],
    ["vaiana", "ariel", "belle", "mulan"]
];

let score = 0;
let index = 0;
const reponsesUtilisateur = [];

function updateProgressBar(score, totalQuestions) {
    const percentage = (score / totalQuestions) * 100;
    const progressBar = document.querySelector('.score-bar');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressEmoji = document.getElementById('progress-emoji');

    document.querySelector('.score-progress-container').style.display = "block";

    // Mise à jour du pourcentage affiché
    progressPercentage.textContent = `${Math.round(percentage)}%`;

    // Mise à jour de la largeur de la barre et de la position de l'emoji
    progressBar.style.width = percentage + "%";
    progressEmoji.style.left = percentage + "%";

    // Animation de la couleur de gauche à droite
    animerCouleur(percentage);

    // Mise à jour de l'emoji en fonction du pourcentage
    if (percentage >= 80) {
        progressEmoji.textContent = "😄";
        progressEmoji.style.animation = "bounce 1s infinite";
    } else if (percentage >= 50) {
        progressEmoji.textContent = "🙂";
        progressEmoji.style.animation = "bounce 1s infinite";
    } else {
        progressEmoji.textContent = "😢";
        progressEmoji.style.animation = "none";
    }
}

function animerCouleur(scorePourcent) {
    const progressBar = document.querySelector('.score-bar');
    let startColor = "#f44336"; // Rouge (départ)
    let endColor = "#f44336";   // Rouge (par défaut)
    if (scorePourcent >= 80) {
        endColor = "#4caf50"; // Vert (objectif atteint)
    } else if (scorePourcent >= 50) {
        endColor = "#ff9800"; // Orange (moyenne)
    }
    // On crée un dégradé qui évolue de gauche à droite selon le score
    progressBar.style.background = `linear-gradient(to right, ${startColor}, ${endColor} ${scorePourcent}%)`;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function afficherQuestion() {
    if (index >= questions.length) {
        document.getElementById("question-number").textContent = "";
        document.getElementById("question").textContent = "✨ Quiz terminé ! ✨";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("result").textContent = `Votre score est : ${score} sur ${questions.length}.`;

        updateProgressBar(score, questions.length);
        document.getElementById("show-corrections").style.display = "inline-block";
        return;
    }

    document.getElementById("question-number").textContent = `Question ${index + 1} sur ${questions.length}`;
    document.getElementById("question").textContent = questions[index];
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";

    // Créer un tableau de réponses et leurs images respectives
    const images = {
        "raiponce": "raiponce.jpg",
        "cendrillon": "cendrillon.jpg",
        "belle": "belle.jpg",
        "ariel": "ariel.jpg",
        "aladdin": "aladdin.jpg",
        "blanche neige": "blanche neige.jpg",
        "simba": "simba.jpg",
        "elsa": "elsa.jpg",
        "mulan": "mulan.jpg",
        "vaiana": "vaiana.jpg",
        "peter pan": "peter pan.jpg",
        "hercule": "hercule hercule.jpg",
        "mufasa": "mufasa.jpg",
        "scar": "scar.jpg",
        "rafiki": "rafiki.jpg",
        "anna": "anna.jpg",
        "jasmine": "jasmine.jpg"
    };
    

    // Ajouter les choix avec une image à côté
    // Ajouter les choix avec une image à côté
for (let i = 0; i < choix[index].length; i++) {
    const choice = choix[index][i];
    const button = document.createElement("button");
    button.className = "choice-btn";

    // Créer l'image
    const img = document.createElement("img");
    img.src = images[choice.toLowerCase()] || "";
    img.alt = choice;

    // Créer une div contenant le nom
    const span = document.createElement("span");
    span.textContent = choice;

    // Ajouter l'image et le nom dans le bouton
    button.appendChild(img);
    button.appendChild(span);

    // Ajouter l'événement de clic
    button.onclick = () => verifierReponse(choice, button);

    choicesContainer.appendChild(button);
}
}


function verifierReponse(reponseDonnee, boutonClique) {
    const bonneReponse = reponses[index];
    reponsesUtilisateur.push(reponseDonnee);

    const boutons = document.querySelectorAll(".choice-btn");

    for (let i = 0; i < boutons.length; i++) {
        const btn = boutons[i];
        btn.disabled = true;
        if (btn.textContent.toLowerCase() === bonneReponse) {
            btn.classList.add("correct");
        } else if (btn === boutonClique) {
            btn.classList.add("incorrect");
        }
    }

    if (reponseDonnee.toLowerCase() === bonneReponse) score++;

    setTimeout(() => {
        index++;
        afficherQuestion();
    }, 700);
}

function afficherCorrections() {
const correctionsData = [];

for (let i = 0; i < questions.length; i++) {
const userRep = reponsesUtilisateur[i] || "(aucune)";
const bonneRep = reponses[i];

correctionsData.push({
    question: questions[i],
    userRep: userRep,
    bonneRep: bonneRep,
    estJuste: userRep.trim().toLowerCase() === bonneRep.trim().toLowerCase()
});
}

localStorage.setItem("corrections", JSON.stringify(correctionsData));
window.location.href = "corrections.html";
}


afficherQuestion();