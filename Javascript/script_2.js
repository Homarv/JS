while (true) {
    number = prompt("De quel nombre veux-tu calculer la factorielle ?");

    if (isFinite(number)) {
        facto= number
        for(number; number >=2; number--){
        facto = facto*(number-1)
        }
        console.log(facto);
        break
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        console.log("RENTRE un nombre Garçon !!!!!!!")
    }
}
