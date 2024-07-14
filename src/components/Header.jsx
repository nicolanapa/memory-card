import React from "react";

function Title() {
	return <h1>Memory Card</h1>;
}

// If doesn't work well then move Scores to Game()
// And move it to Game.jsx
// To be able to use Game() Props

function Scores() {
	return (
		<div className="scores">
			<p>Score: {}</p>
			<p>Best Score: {}</p>
		</div>
	);
}

function Header() {
	return (
		<div className="header-container">
			<Title />
			<Scores />
		</div>
	);
}

export { Header };
