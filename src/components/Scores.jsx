import React from "react";

function Scores(props) {
	return (
		<div className="scores">
			<p>Score: {props.score.current}</p>
			<p>Best Score: {props.score.best}</p>
		</div>
	);
}

export { Scores };
