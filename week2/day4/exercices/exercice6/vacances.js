
function hotelCost(){
      
        let numNuit;
	do{
		numNuit = prompt("Combien de nuits souhaitez vous passer dans notre hotel?")
	}
	while
          (numNuit == " " || isNaN(numNuit) || null || numNuit.length == 0)
	 

	    let bill = numNuit*140
	      console.log(`Ca vous fera: ${bill}`)
	
}

hotelCost();


/*function planeRideCost(){

	let rideCost = prompt("veuillez entrer votre destination")

	   if (typeof(rideCost !== "")) {
	   	   prompt("veuillez entrer votre destination")

	   }
	   else{
	   	if (rideCost == "Londres") {
	   		console.log(`prices: 183$`)
	   	}
	   	else if (rideCost == "Paris") {
	   		console.log(`prices: 220$`)
	   	}
	   	else{
	   		console.log(`prices: 300$`)
	   	}
	   }
}
planeRideCost();*/