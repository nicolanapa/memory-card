import React from "react";
import { Card } from "./Card.jsx";

async function CardChooser() {
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

	let htmlCards = [];
	for (let i = 0; i < 10; i++) {
		if (cards[i].sprites.other.dream_world.front_default === null) {
			if (cards[i]["sprites"]["other"]["official-artwork"]["front_default"] !== null) {
				htmlCards.push(
					<Card
						pokemonName={cards[i].name}
						/*pokemonDescription={}*/ pokemonSvg={cards[i]["sprites"]["other"]["official-artwork"]["front_default"]}
						key={cards[i].id}
					/>
				);
			} else {
				// If the high resolution Image doesn't exist then choose this
				// Highly unlikely
				// Pixel-variation

				htmlCards.push(
					<Card
						pokemonName={cards[i].name}
						/*pokemonDescription={}*/ pokemonSvg={cards[i].sprites.front_default}
						key={cards[i].id}
					/>
				);
			}
		} else {
			htmlCards.push(
				<Card
					pokemonName={cards[i].name}
					/*pokemonDescription={}*/ pokemonSvg={cards[i].sprites.other.dream_world.front_default}
					key={cards[i].id}
				/>
			);
		}
	}
	return { cards, htmlCards };
}

export { CardChooser };
