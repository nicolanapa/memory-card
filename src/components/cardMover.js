function cardMover(allCards, hasClicked) {
	console.log("BEFORE MOVING", allCards, hasClicked);

	for (let i = 0; i < 10; i++) {
		let numberToRandomize = Math.floor(Math.random() * 10);
		let tempCard = allCards[i];
		let tempHasClicked = hasClicked[i];
		allCards[i] = allCards[numberToRandomize];
		allCards[numberToRandomize] = tempCard;
		hasClicked[i] = hasClicked[numberToRandomize];
		hasClicked[numberToRandomize] = tempHasClicked;
	}

	console.log("AFTER MOVING", allCards, hasClicked);

	return { allCards, hasClicked };
}

export { cardMover };
