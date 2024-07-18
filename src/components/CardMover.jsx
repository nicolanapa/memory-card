function CardMover(hasClicked) {
	console.log("BEFORE MOVING", hasClicked);

	for (let i = 0; i < 10; i++) {
		let numberToRandomize = Math.floor(Math.random() * 10);
		let tempHasClicked = hasClicked[i];
		hasClicked[i] = hasClicked[numberToRandomize];
		hasClicked[numberToRandomize] = tempHasClicked;
	}

	console.log("AFTER MOVING", hasClicked);

	return hasClicked;
}

export { CardMover };
