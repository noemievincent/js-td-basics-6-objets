/*
OBJETS - PRÉPA 2 : Modélisation d'un chien
Ecris un programme qui :
1. crée un objet chien contenant
	- les propriétés nom ("Tobby"), race ("Border Collie") et couleur ("bleu merle tricolore") ;
	- la méthode grogner() qui retourne "Grrr ! Grrr !"
		et la méthode aboyer() qui retourne "Wah ! Wah !"
2. affiche dans la console le message "… est un … de couleur …"
3. affiche dans la console le message "Tiens, un chat ! … aboie : …"
	(où … est le nom du chien et … utilise la méthode aboie du chien pour le faire aboyer)
*/

let Dog = {
    name: "Tobby",
    breed: "Border Collie",
    color: "bleu merle tricolore",
    grogner() {
        return `${this.name} est un ${this.breed} de couleur ${this.color}`;
    },
    aboyer() {
        return "Wah ! Wah !";
    }
}

console.log(Dog.grogner());
console.log(`Tiens, un chat ! ${Dog.name} aboie : ${Dog.aboyer()}`);

  


  