while (true) {
    name = prompt('Entre ton prénom :');
    let hello="Hello, "

    if (name) {
        hello += name; //on rajoute la lettre saisie à la suite du mot
        console.log(hello);
        break
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        console.log("RENTRE ton prénom Garçon !!!!!!!")
    }
}


