console.log("Entrée dans le fichier main.js");

/****************************************
 *             Déclaration des fonctions
 ****************************************/
function init() {
    console.log("Entrer dans la fonction init()")
    // Déclaration des variables / constantes
    let gameBoard = new Array();
    let hasWon = false;
    let isPlayer1 = true;
    const VIDE = " ";
    // Initialiser le plateau de jeu avec les valeurs de départ
    initGameBoard(gameBoard, VIDE);
    console.log(gameBoard);
    // Rendre le plateau de jeu cliquable 
    playOnce();
}

/**
 * Fonction qui initialise le plateau de jeu du morpiton sa valeur de départ
 * @param {Array} plateauDeJeu 
 * @param {string} caractere
 */
function initGameBoard(plateauDeJeu, caractere) {
    console.log("Entrée dans la fonction initGameBoard()");
    const TAILLE = 9;
    for (let i = 0; i < TAILLE; i++) {
        plateauDeJeu[i] = caractere;
    }
};


function playOnce() {
    console.log("Entrée dans la fonction playOnce()");
    // Déclaration des variables

    // Déclaration des variables pour le DOM
    let dom_all_cells = document.getElementsByClassName("cell");
    let newP = document.createElement("p");

    //do {
    // Quand c'est au joueur 1 de jouer 
    //         FALSE
    for (let i = 0; i < dom_all_cells.length; i++) {
        dom_all_cells[i].setAttribute("onclick", "detectCell(" + i + ")");
        console.log(dom_all_cells[i]);
    }
}
/**
 *  for (let i = dom_all_p.length - 1; i >= 0; i--) {
            dom_all_p[i].remove();
        }
        newP.innerText = "Joueur 1, A toi de jouer !";
        //newP.setAttribute = ("class", ".player1");
        dom_textArea.appendChild(newP);
        dom_textArea.setAttribute("class", "player1");
        console.log(dom_all_p);


        let dom_textArea = document.getElementById("textArea");
        let dom_all_p = document.getElementsByTagName("p");
 */

/**
 * La documentation...
 * @param {Number} himSelf 
 */
function detectCell(index) {
    console.log(index);
}

//}


// Démarrer une partie


// Vérifier une victoire (qui retourne un bolléen)

// Changer le texte du bouton jouer (pour mettre restart)

// En cas de victoire, se faire plaisir en CSS

// Alterner entre un thème bleu ou rouge selon le joueur qui joue