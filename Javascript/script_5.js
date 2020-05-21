const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 0 }
];

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

count=0
console.log("**********Est-ce que tous les livres ont été emprunté une fois:")
books.forEach(x => {
    if (x.rented == 0)
      count +=1
  });

  if (count >= 1) 
  console.log ("Au moins 1 livre n'a pas été emprunté")
  else console.log ("Ils ont tous déjà été emprunté ")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("**********Vooi le livre le plus emprunté")

function triDécroissant(a,b)
{
	if (a.rented > b.rented) return -1;
	else if (a.rented == b.rented) return 0;
	else return 1;
}

booksdecroissant= books.sort(triDécroissant)
console.log(booksdecroissant[0].title)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("**********Voici le livre le moins emprunté")


function triCroissant(a,b)
{
	if (a.rented < b.rented) return -1;
	else if (a.rented == b.rented) return 0;
	else return 1;
}

bookscroissant= books.sort(triCroissant)
console.log(booksdecroissant[0].title)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("**********Voici le livre avec L'ID: 873495")

books.forEach(x => {
  if (x.id === 873495)
    console.log(x)
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("********** L'ID: 133712 est détruite")

books.forEach(x => {
  if (x.id === 133712)
    delete ;
});

console.log(books)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("********** Trier les livres par ordres alphabétique")

function Alphabet(a,b)
{
	if (a.title < b.title) return -1;
	else if (a.title == b.title) return 0;
	else return 1;
}

booksAlphabet= books.sort(Alphabet)
console.log(booksAlphabet)
