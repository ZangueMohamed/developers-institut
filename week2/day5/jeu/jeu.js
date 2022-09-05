function playTheGame(){
	
	let txt = confirm("voulez-vous jouer a ce jeu");
	if (txt == true){
		let x = prompt("entrer un numero compris entre 0 et 10")

		if (isNaN(x)){
		  	alert("desole, ce n est pas un nombre, au revoir")
		  }

		else if (x >= 0 && x <= 10) {
			let computerNumber = Math.round(Math.random()*10)
		    console.log(computerNumber)
		    compareNumbers(x, computerNumber);
		    }
		else{
		      	alert("desole, ce n est pas un bon nombre, au revoir")
		      }
		
	}
	else{
		alert("pas de probleme au revoir")
	}
}

function compareNumbers(userNumber,computerNumber){

	for (let i = 0; i <= 2; i++) {

		if (userNumber == computerNumber) {
		alert("winner");
		return;
		}
		else if (i == 2) {
			alert("trop de tentatives! le bon nombre etait: " + computerNumber)
		}
		else if (userNumber > computerNumber) {
			userNumber = prompt("trop grand ! essayez encore: "); 
		}
		    else if (userNumber < computerNumber){
				userNumber = prompt("trop petit ! essayer encore: ")
		}

	}
}
