
function changeEnough(itemPrice, amountOfChange){

	let prices = [0.25, 0.10, 0.05, 0.01];
      
        let amount = 0
	    for (let i = 0; i < amountOfChange.length; i++){
	    	amount += amountOfChange[i]*prices[i]
	    }
	    if (amount > itemPrice) {
	    	return true;
	    }
	    else{
	    	return false;
	    }
	}

console.log(changeEnough(14.11, [2,100,0,0]));
