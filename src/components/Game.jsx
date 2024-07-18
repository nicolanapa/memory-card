import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Card } from "./Card.jsx";
import { Scores } from "./Scores.jsx";
import { cardChooser } from "./cardChooser.js";
import { CardMover } from "./CardMover.jsx";
import { CardHtml } from "./CardHtml.jsx";

function Game() {
	const [allCards, setAllCards] = useState([]);
	const [hasClicked, setHasClicked] = useState(Array(10).fill(0));
	const [prevHasClicked, setPrevHasClicked] = useState(Array(10).fill(0));
	const [htmlCards, setHtmlCards] = useState(null);
	const [score, setScore] = useState({ actual: 0, bestScore: 0 });

	// Randomize directly allCards and hasClicked States
	// Then call CardHtml to get the updated htmlCards State

	useEffect(() => {
		async function fetchData() {
			let tempAllCards = await cardChooser();
			setAllCards(tempAllCards);
		}
		fetchData();
	}, []);

	useEffect(() => {
		console.log("ALL CARDS", allCards);
		if (allCards.length > 0) {
			setHtmlCards(CardHtml(allCards, hasClicked, setHasClicked, score, setScore, setPrevHasClicked));
		}
	}, [allCards]);

	useEffect(() => {
		console.log("UPDATING CLICKING", hasClicked);
		if (Object.is(prevHasClicked, hasClicked)) {
			console.log("hasClicked has changed!");
		}
	}, [prevHasClicked, hasClicked]);

	useEffect(() => {
		console.log("UPDATING SCORING", score);
	}, [score]);

	// useEffect or similar to make a variable similar to htmlCards State

	return (
		<main>
			<Scores score={score} />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
