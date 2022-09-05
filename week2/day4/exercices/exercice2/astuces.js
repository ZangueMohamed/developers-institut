
function calculateTrip(){

	let montant = Number(prompt("entrez le montant de votre facture"));

	if (montant < 50) {
		let p = montant*(0.2)
		let mT = montant + p
		console.log(`votre pourboire est de ${p} et votre facture totale est de ${mT}`)

		}
	else if(montant >= 50 && montant <= 200) {
				let p = montant*(0.15)
				let mT = montant + p
				console.log(`votre pourboire est de ${p} et votre facture totale est de ${mT}`)
			}
	   else{ 
				  let p = montant*(0.10)
				  let mT = montant + p
				   console.log(`votre pourboire est de ${p} et votre facture totale est de ${mT}`)

		}
		
}	
calculateTrip();	