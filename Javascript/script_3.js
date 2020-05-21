while (true) {
    number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

    if (isFinite(number)) {
        hashtag="" 
        vide=" "
        for(number; number >0; number--){
            hashtag += "#"
            totvide= vide.repeat(number-1)
            pyramide = totvide + hashtag
            console.log(pyramide);
        }
        break

    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        console.log("RENTRE un nombre Garçon !!!!!!!")
    }
}
