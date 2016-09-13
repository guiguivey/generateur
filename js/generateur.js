var homme = ["Je préfère regarder le dernier Star Wars que de me réveiller une nouvelle fois à tes côtés.",
    "Désolé, je préfère ta mère. Elle fait de meilleurs sandwichs.",
    "Je ne peux pas continuer à fréquenter quelqu'un qui n'aime pas le NSDAP.",
    "Tu sues du dos, et tu pues du cul, Karine. Au revoir.",
    "Je me suis rendu compte que même mes pieds sentaient meilleurs que ta bouche. Au revoir."
];
var femme = ["Ce n'est pas toi le problème, c'est ta calvitie.",
    "12 centimètres c'est la taille parfaite pour une brosse à dent.",
    "Même mon oncle de 88 ans bande moins mou que toi, sale fiotte."
];

function phrase(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generation() {
    if (document.getElementById("homme").checked) {
        return phrase(homme)
    } else if (document.getElementById("femme").checked) {
        return phrase(femme)
    } else {
        return "Il faut choisir un sexe afin de profiter pleinement de l'expérience."
    }
};
