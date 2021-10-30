/*****************************
* 026 - Objets et méthodes
*/

/* Une MÉTHODE est une fonction associée à un objet */

// const aurora = {
//   nom: "Aurora",
//   sante: 150,
//   force: 25
// };

// Affiche "… a … points de vie et … en force"

// console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

// Crée une fonction décrire qui prend personnage en paramètre et renvoie la description du personnage

// function decrire(personnage) {
//     return `${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`;
// };


// Utilise cette fonction pour afficher la description d'Aurora

// console.log(decrire(aurora));

// Ajoute à présent cette fonction à l'intérieur de l'objet aurora
// => félicitations, tu viens d'ajouter une **méthode** à l'objet Aurora !

const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    decrire() {
    return `${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`;
    },
};

console.log(aurora.decrire());

/*
Un nouveau mot est apparu : le mot-clé 'this'.
**`this`** représente l'objet courant, l'objet auquel la méthode appartient.
 */
// Utilise à présent cette méthode pour afficher la description d'Aurora



/*
EXERCICE 1 : Ajoute une méthode calcAge à john qui calcule son age
(en soustrayant sa date de naissance de 2019), le retorune et le stocke dans une propriété age.
*/
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        return this.age = 2018 - this.birthYear;
    }
}
console.log(john);
console.log(john.calcAge());



/* 
EXERCICE 2 : 
- Crée un objet rectangle qui possède 2 propriétés : longueur (5) et largeur (3)
- Ajoute une méthode à cet objet qui lui permet de calculer sa propre surface
- Utilise cette méthode pour afficher sa surface dans la console
*/ 

let rectangle = {
    longueur: 5,
    largeur: 3,
    surface() {
        return this.longueur*this.largeur;
    }
}

console.log(rectangle.surface());



/* **********************************
* Les objets prédéfinis de JavaScript
*/

/*
JavaScript permet de programmer en utilisant des objets :
on dit que Javascript est un langage orienté objet.

Le langage  JavaScript nous permet de de créer nos propres objets
mais il nous fournit aussi des objets prédéfinis,
qui ont une série de propriétés et de méthodes qu'on peut utiliser telles quelles.

Nous en avons déjà utilisé quelques-uns :
- l'objet  console  donne accès à la console pour y écrire des messages texte ;
- l'objet  Math  rassemble des fonctionnalités mathématiques.
	Par exemple,  Math.random()  renvoie un nombre aléatoire entre 0 et 1 ;
- l'objet Array rassemble des propriétés et fonctions utiles pour manipuler des tableaux :
	Par exemple, monTableau.length est une propriété qui contient le nombre d'éléments du tableau
	monTableau.push() est une méthode qui permet d'ajouter un élément au tableau

Les objets et la manière de les utiliser se trouvent dans la DOCUMENTATION
Par exemple, pour l'objet Array :
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array
*/