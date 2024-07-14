import React from "react";

function Title() {
	return <h1>Memory Card</h1>;
}

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
		<div>
			<Title />
			<Scores />
		</div>
	);
}

export { Header };
