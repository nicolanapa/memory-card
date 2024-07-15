import React from "react";

function Card() {}

function CardMover() {}

function Scores() {
	return (
		<div className="scores">
			<p>Score: {}</p>
			<p>Best Score: {}</p>
		</div>
	);
}

function Game() {
	return (
		<main>
			<Scores />
		</main>
	);
}

export { Game };
