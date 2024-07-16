import React, { useEffect, useState } from "react";
import "../styles/game.css";
import { Card } from "./Card.jsx";
import { Scores } from "./Scores.jsx";
import { CardChooser } from "./CardChooser.jsx";
import { CardMover } from "./CardMover.jsx";

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

	// Move some functiona in  specific files
	// useEffect to make a variable similar to htmlCards State

	return (
		<main>
			<Scores score={score} />
			<section className="card-container">{htmlCards}</section>
		</main>
	);
}

export { Game };
