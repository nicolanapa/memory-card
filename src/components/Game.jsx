import React, { useEffect, useState } from "react";
import "../styles/game.css";

function Card({ pokemonName, /*pokemonDescription,*/ pokemonSvg, key }) {
	return (
		<div className="card" key={key}>
			<img src={pokemonSvg} alt={pokemonName} />
			<h2>{pokemonName}</h2>
			{/*<p>{pokemonDescription}</p>*/}
		</div>
	);
}

function CardMover() {}

async function CardChooser() {
	let cards = [];
	let allPokemons = 1302;
	let allID = [];
	for (let i = 0; i < 6; i++) {
		allID.push(Math.floor(Math.random() * allPokemons));

		let tempPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + allID[i] + "/");
		tempPokemon = await tempPokemon.json();
		cards.push(tempPokemon);
	}
	console.log(cards);
	console.log(allID);

	let htmlCards = [];
	for (let i = 0; i < 6; i++) {
		htmlCards.push(
			<Card
				pokemonName={cards[i].name}
				/*pokemonDescription={}*/ pokemonSvg={cards[i].sprites.other.dream_world.front_default}
				key={cards[i].id}
			/>
		);
	}
	return { cards, htmlCards };
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
	const [allCards, setAllCards] = useState();
	const [htmlCards, setHtmlCards] = useState();

	useEffect(() => {
		async function fetchData() {
			let tempAllCards = await CardChooser();
			setAllCards(tempAllCards.cards);
			setHtmlCards(tempAllCards.htmlCards);
		}
		fetchData();
	});

	return (
		<main>
			<Scores />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
