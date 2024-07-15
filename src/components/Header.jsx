import React from "react";

function Title() {
	return <h1>Memory Card</h1>;
}

// If doesn't work well then move Scores to Game()
// And move it to Game.jsx
// To be able to use Game() Props

function Header() {
	return (
		<div className="header-container">
			<Title />
		</div>
	);
}

export { Header };
