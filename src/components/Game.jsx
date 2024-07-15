import React, { useState } from "react";

function Card() {}

function CardMover() {}

async function CardChooser() {
	let cards = [];
	let allPokemons = 1302;
	let allID = [];
	for (let i = 0; i < 2; i++) {
		allID.push(Math.floor(Math.random() * allPokemons));

		let tempPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + allID[i] + "/");
		tempPokemon = await tempPokemon.json();
		cards.push(tempPokemon);
	}
	console.log(cards);
	console.log(allID);

	return cards;
}

function Scores() {
	return (
		<div className="scores">
			<p>Score: {}</p>
			<p>Best Score: {}</p>
		</div>
	);
}

function Game() {
	const [allCards, SetAllCards] = useState(CardChooser);

	return (
		<main>
			<Scores />
		</main>
	);
}

export { Game };
