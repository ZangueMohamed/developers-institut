function instruction(){
	let mot;

	do{
		mot = prompt("Joueur 1, veuillez entrer votre mot")
	} 
	while(isNaN(mot) == false)

		if (mot.length < 8) {
				alert("Votre mot est trop court")
				mot = prompt("veuillez essayer de nouveau")
		}
		else if (mot.length >= 8){
			let letter = prompt("Joueur 2, veuillez entrer une lettre")
				if (isNaN(letter) == true) {
					for (let i = 0; i >= 10; ++i) {
						if (mot.charAt(i) !== letter) {
						let letter = prompt("Joueur 2, veuillez entrer une lettre")
						}
						else if (i == 10) {
						alert("Vous avez perdu")
						}
						else if (mot.charAt(i) == letter){
						console.log(`${mot.charAt(i)}`)
						}

					}

				}
				else{
					alert('veuillez entrer une lettre')
				}	
		}
			
}


instruction();