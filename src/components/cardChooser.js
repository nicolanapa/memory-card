async function cardChooser() {
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	let cards = [];

	// To get the latest updated Pokemon count
	let allPokemons = /*1302*/ await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
	allPokemons = await allPokemons.json();
	allPokemons = allPokemons.count;

	let allID = [];
	for (let i = 0; i < 10; i++) {
		let tempID = Math.floor(Math.random() * allPokemons) + 1;
		let differentID = false;

		do {
			if (allID.length === 0) {
				differentID = true;
			} else {
				if (allID.includes(tempID)) {
					tempID = Math.floor(Math.random() * allPokemons) + 1;
				} else {
					differentID = true;
				}
			}
		} while (differentID === false);

		if (tempID >= 1025) {
			tempID = 10001 + (tempID - 1025);
		}

		let tempPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + tempID + "/");
		allID.push(tempID);

		tempPokemon = await tempPokemon.json();
		cards.push(tempPokemon);

		console.log(i);
		//await delay(1000);
	}
	console.log(cards);
	console.log(allID);

	return cards;
}

export { cardChooser };
