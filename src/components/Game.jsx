import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Scores } from "./Scores.jsx";
import { cardChooser } from "./cardChooser.js";
import { CardHtml } from "./CardHtml.jsx";

function Game() {
	const [allCards, setAllCards] = useState([]);
	const [hasClicked, setHasClicked] = useState(Array(10).fill(0));
	const [htmlCards, setHtmlCards] = useState(null);
	const [score, setScore] = useState({ actual: 0, bestScore: 0 });

	useEffect(() => {
		async function fetchData() {
			let tempAllCards = await cardChooser();
			setAllCards(tempAllCards);
		}
		fetchData();
	}, []);

	useEffect(() => {
		//console.log("ALL CARDS", allCards);
		if (allCards.length > 0) {
			setHtmlCards(CardHtml(allCards, hasClicked, setHasClicked, score, setScore, allCards, setAllCards));
		}
	}, [hasClicked, allCards, score]);

	return (
		<main>
			<Scores score={score} />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
