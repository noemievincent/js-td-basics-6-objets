/*****************************
* 029-2 - Boucles pour parcourir des objets
*/

// 2. Boucle for/in pour parcourir des objets

/*
for(const prop in objet) {
  console.log(prop + " : " + objet[prop]);
}   
*/

/*
EXERCICE 1 : 
Parcours l'objet mesFruits pour afficher, pour chacun des fruits, "Le fruit … coûte … €"
*/
const mesFruits = { 
  "Pomme": 1.3,
  "Poire": .5,
  "Ananas": 3
};

for (const prop in mesFruits) {
  console.log(`Le fruit ${prop} coûte ${mesFruits[prop]}`);
}




/*
EXERCICE 2 : 
Parcours l'objet fruit pour afficher chacune de ses propriétés avec, pour chacune, sa valeur
*/
const fruit = {
  "Nom": "Pomme",
  "Prix": 0.3,
  "Couleur": "Verte",
  "Variété": "Golden"
};

for (const prop in fruit) {
  console.log(`${prop} : ${fruit[prop]}`);
}



// Un mot est un objet de type String => ceci fonctionne également…
/*
EXERCICE 3 : 
Parcours le mot "Bonjour" pour afficher séparément chacune de ses lettres
*/

const sString = "Bonjour";
const Splits = sString.split("");

console.log(Splits);