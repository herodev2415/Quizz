const correctionsData = JSON.parse(localStorage.getItem("corrections"));

if (correctionsData) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("corrections-container").style.display = "block";

    const container = document.getElementById("corrections");

    correctionsData.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = item.estJuste ? "correction-item correct" : "correction-item incorrect";
        div.innerHTML = `
            <strong>Q${index + 1} :</strong> ${item.question}<br>
            <strong>Votre réponse :</strong> ${item.userRep || "(aucune)"}<br>
            ${item.estJuste 
                ? "<strong>😉 Correct</strong>" 
                : `<strong>😓 Bonne réponse :</strong> ${item.bonneRep}`
            }`;
        container.appendChild(div);
    });
} else {
    document.getElementById("loading").innerText = "Erreur : Aucune donnée disponible";
}
function recommencerQuiz() {
    document.body.classList.add('fading-out');
    setTimeout(() => {
        window.location.href = "quizz.html";
    }, 500);
}