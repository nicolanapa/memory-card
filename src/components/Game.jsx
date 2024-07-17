import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Card } from "./Card.jsx";
import { Scores } from "./Scores.jsx";
import { cardChooser } from "./cardChooser.js";
import { CardMover } from "./CardMover.jsx";
import { CardHtml } from "./CardHtml.jsx";

function Game() {
	const [allCards, setAllCards] = useState();
	const [hasClicked, setHasClicked] = useState(Array(10).fill(0));
	const [htmlCards, setHtmlCards] = useState();
	const [score, setScore] = useState({ current: 0, best: 0 });

	useEffect(() => {
		async function fetchData() {
			let tempAllCards = await cardChooser();
			setAllCards(tempAllCards);
			setHtmlCards(CardHtml(tempAllCards, hasClicked, setHasClicked));
		}
		fetchData();
	}, []);

	useEffect(() => {
		console.log("UPDATING", hasClicked);
	}, [hasClicked]);

	// useEffect or similar to make a variable similar to htmlCards State

	return (
		<main>
			<Scores score={score} />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
