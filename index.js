function produceDrivingRange(blockRange) {
	    return function(start, end) {
		let startBlock = parseInt(start);
		let endBlock = parseInt(end);
		let distance = Math.abs(startBlock - endBlock)
		let difference = Math.abs(blockRange - distance);
		if(distance <= blockRange) {
			return `within range by ${difference}` 

		} else {
			return `${difference} blocks out of range`
		}
	}
}

function produceTipCalculator(tip) {
	return function(cost) {
		return tip * cost;
	}
}