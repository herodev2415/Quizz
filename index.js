
// Déclaration des questions et réponses dans des tableaux
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
    "raiponce",
    "ariel",
    "aladdin",
    "blanche neige",
    "cendrillon",
    "simba",
    "elsa",
    "belle",
    "mulan",
    "vaiana"
  ];
  
  // Initialisation du score
  let score = 0;
  
  // Afin d'Importater le prompt-sync
  const prompt = require('prompt-sync')();
  
  // Fonction pour demander la réponse à l'utilisateur
  // function demanderReponse(i) {
  //   return prompt(questions[i]);
  // }
  
  // Fonction pour calculer le score
  function calculerScore(reponseUtilisateur,i) {
    if (reponseUtilisateur.toLowerCase() === reponses[i]) {
      score++;
      console.log("Bonne réponse !");
    } else {
      console.log("Mauvaise réponse ! La bonne réponse est " + reponses[i] + ".");
    }
  }
  
  // Fonction principale pour gérer le quiz
  function quiz() {
    for (let i = 0; i < questions.length; i++) {
      // Demander la réponse à l'utilisateur
      let reponseUtilisateur = prompt(questions[i]);
      
      // Calculer le score
      calculerScore(reponseUtilisateur,i);
    }
  
    // Afficher le score à la fin
    console.log("Votre score est :" +score+ " sur 10 !");
  }
  
  // Lancer le quiz
  quiz();
  