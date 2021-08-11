'use strict';

// Définition des variables
let button;
let forme;
let nbrMouvements = 0;

//
// Enregistrer le compteur dans la sessionStorage
//

function save()
{
	nbrMouvements++;
	sessionStorage.setItem("mouvements", nbrMouvements);
	document.getElementById('debug').innerHTML = 'Nombre de mouvements sur la forme : '+nbrMouvements;
}

//
// Afficher/cacher la forme
//

function buttonClick()
{
  // Ajout ou suppression de la classe hide
  forme.classList.toggle('hide');
}

//
// Actions à effectuer au survol de la souris
//

function formMouseOver()
{
	// Ajout de la classe survol
  this.classList.add('survol');
  this.innerHTML = "Mouse Over";
  save();
}

//
// Actions à effectuer quand on quitte le survol de la forme
//

function formMouseOut()
{
	// Suppression des classes
	/*if (this.classList.contains("dblclick")) {
		this.classList.remove('dblclick');
	}
	this.classList.remove('survol');*/
	// Supprimer une classe qui n'existe pas NE génère PAS d'erreurs
  this.classList.remove('survol', 'dblclick');
  this.innerHTML = "Mouse Out";
  save();
}

//
// Actions à effectuer au double click
//

function formDoubleClick()
{
  // Ajout ou suppression de la classe dblclick
  if (this.classList.toggle('dblclick')) {
  	this.innerHTML = "Double Click";
  }
  else {
  	this.innerHTML = "Mouve Over";
  }
  save();
}

//
// CODE PRINCIPAL
//

document.addEventListener("DOMContentLoaded",function() {

	// Recherche des éléments dans l'arbre du DOM
	button = document.querySelector('#toggle-forme');
	forme = document.querySelector('.forme');

	// Définition des écouteurs d'évènement
	button.addEventListener('click', buttonClick);
	forme.addEventListener('mouseout', formMouseOut);
	forme.addEventListener('mouseover', formMouseOver);
	forme.addEventListener('dblclick', formDoubleClick);

	// Récupération du compteur en session storage
	nbrMouvements = sessionStorage.getItem("mouvements");
	if (nbrMouvements == null) {
		nbrMouvements = 0;
	}

	// Affichage du compteur
	document.getElementById('debug').innerHTML = 'Nombre de mouvements sur la forme : '+nbrMouvements;

});