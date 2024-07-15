import React, { useEffect, useState } from "react";
import "../styles/game.css";

function Card({ pokemonName, /*pokemonDescription,*/ pokemonSvg }) {
	return (
		<div className="card">
			<h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
			{/*<p>{pokemonDescription}</p>*/}

			<img src={pokemonSvg} alt={pokemonName} />
		</div>
	);
}

function CardMover() {}

async function CardChooser() {
	const delay = (ms) => new Promise((res) => setTimeout(res, ms));

	let cards = [];
	let allPokemons = 1302;
	let allID = [];
	for (let i = 0; i < 10; i++) {
		let tempID = Math.floor(Math.random() * allPokemons) + 1;
		let differentID = false;

		/*while (differentID !== true) {
			if (allID.length === 0) {
				differentID = true;
			} else {
				for (let i2 = 0; i2 < allID.length; i++) {
					if (allID[i2] === tempID) {
						tempID = Math.floor(Math.random() * allPokemons) + 1;
						differentID = false;
					} else if (i2 === allID.length - 1) {
						differentID = true;
					}
				}
			}
		}*/

		if (tempID >= 1025) {
			tempID = 10001 + (tempID - 1025);
		}

		let tempPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + tempID + "/");

		/*while (!tempPokemon.ok) {
			pauseBrowser(5000);

			tempID = Math.floor(Math.random() * allPokemons);
			tempPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + tempID + "/");
		}*/

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

function Scores(props) {
	return (
		<div className="scores">
			<p>Score: {props.score.current}</p>
			<p>Best Score: {props.score.best}</p>
		</div>
	);
}

function Game() {
	const [allCards, setAllCards] = useState();
	const [htmlCards, setHtmlCards] = useState();
	const [score, setScore] = useState({ current: 0, best: 0 });

	useEffect(() => {
		async function fetchData() {
			let tempAllCards = await CardChooser();
			setAllCards(tempAllCards.cards);
			setHtmlCards(tempAllCards.htmlCards);
		}
		fetchData();
	}, []);

	// useEffect to make a variable similar to htmlCards State

	return (
		<main>
			<Scores score={score} />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
