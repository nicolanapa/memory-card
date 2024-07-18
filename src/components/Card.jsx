import React from "react";
import { CardMover } from "./CardMover";

function Card({
	pokemonName,
	/*pokemonDescription,*/ pokemonSvg,
	hasClicked,
	setHasClicked,
	position,
	score,
	setScore,
	setPrevHasClicked,
}) {
	function replaceAt(array, index, value) {
		array[index] = value;
		console.log(array);
		return array;
	}

	function settingClicked() {
		if (hasClicked[position] === 0) {
			setHasClicked(replaceAt(hasClicked, position, 1));

			if (score.actual + 1 > score.bestScore) {
				score.actual = score.actual + 1;
				score.bestScore = score.actual;
				setScore({ actual: score.actual, bestScore: score.bestScore });
			} else {
				score.actual = score.actual + 1;
				setScore({ actual: score.actual, bestScore: score.bestScore });
			}

			if (score.actual === 10) {
				alert("Max Score!");

				for (let i = 0; i < 10; i++) {
					hasClicked[i] = 0;
				}
				setHasClicked(hasClicked);
				score.actual = 0;
				setScore({ actual: score.actual, bestScore: score.bestScore });
			}
		} else {
			for (let i = 0; i < 10; i++) {
				hasClicked[i] = 0;
			}
			setHasClicked(hasClicked);
			score.actual = 0;
			setScore({ actual: score.actual, bestScore: score.bestScore });
		}

		//console.log("INTERNAL POSITION " + position, hasClicked);
		setPrevHasClicked(hasClicked);
		setHasClicked(CardMover(hasClicked));
	}

	return (
		<div className="card" onClick={settingClicked}>
			<h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
			{/*<p>{pokemonDescription}</p>*/}

			<img src={pokemonSvg} alt={pokemonName} />
		</div>
	);
}

export { Card };
