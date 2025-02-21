console.log("Entrée dans le fichier main.js");

/****************************************
 *             Déclaration des fonctions
 ****************************************/
function init() {
    console.log("Entrer dans la fonction init()")
    // Déclaration des variables / constantes
    let gameBoard = new Array();

    const VIDE = " ";
    const J1 = new Image;
    // Initialiser le plateau de jeu avec les valeurs de départ
    initGameBoard(gameBoard);
    console.log(gameBoard);
    playOnce(gameBoard);
}

/**
 * Fonction qui initialise l
 * @param {Array} plateauDeJeu 
 */
function initGameBoard(plateauDeJeu) {
    console.log("Entrée dans la fonction initGameBoard()");
    const VIDE = " ";
    const TAILLE = 9;

    for (let i = 0; i < TAILLE; i++) {
        plateauDeJeu[i] = VIDE;
    }
};


function playOnce(plateauDeJeu) {
    console.log("Entrée dans la fonction playOnce()");
    // Déclaration des variables
    let hasWon = false;
    let isPlayer1 = true;
    // Déclaration des variables pour le DOM
    let dom_textArea = document.getElementById("textArea");
    console.log(plateauDeJeu);

    do {
        // Quand c'est au joueur 1 de jouer 
        //         FALSE
        if (isPlayer1 === true) {

        }
        // Si c'est au joueur 2 de jouer
        else {

        }
        isPlayer1 != isPlayer1;
    } while (hasWon === false);

}


// Démarrer une partie


// Vérifier une victoire (qui retourne un bolléen)

// Changer le texte du bouton jouer (pour mettre restart)

// En cas de victoire, se faire plaisir en CSS

// Alterner entre un thème bleu ou rouge selon le joueur qui joue