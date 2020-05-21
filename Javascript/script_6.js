while (true) {
    entercode = prompt('Entre ton ARN :');
    if (entercode) {
        break
    } else { // on rentre dans ce else si letter est vide (l'utilisateur ne saisit rien)
        console.log("RENTRE ton ARN Garçon !!!!!!!")
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
tab=entercode.match(/.{1,3}/g)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
a=""
b=""
c=""
d=""
e=""
f=""

tab.forEach(x => {
   
    if( x=== "UCU" || x==="UCC" || x==="UCA" || x==="UCG" || x==="AGU" || x==="AGC" ){
        a="Sérine "
    } 
    if( x=== "CCU" || x==="CCC" || x==="CCA" || x==="CCG" ){
        b="Proline "
    }
    if( x=== "UUA" || x==="UUG"){
        c="Leucine "
    }
    if( x=== "UUU" || x==="UUC" ){
        d="Phénylalanine "
    }
    if( x=== "CGU" || x==="CGC" || x==="CGA" || x==="CGG" || x=="AGA" ||x==="AGG"){
        e="Arginine "
    }
    if( x=== "UAU" || x==="UAC" ){
        f="Tyrosine "
    }
});


let résultat= a+b+c+d+e+f
console.log(résultat)












