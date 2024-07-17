import React from "react";

function Scores({ score }) {
	return (
		<div className="scores">
			<p>Score: {score.score}</p>
			<p>Best Score: {score.bestScore}</p>
		</div>
	);
}

export { Scores };
