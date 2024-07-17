import React from "react";
import { CardMover } from "./CardMover";

function Card({ pokemonName, /*pokemonDescription,*/ pokemonSvg, hasClicked, setHasClicked, position }) {
	function replaceAt(array, index, value) {
		array[index] = value;
		console.log(array);
		return array;
	}

	function settingClicked() {
		if (hasClicked[position] === 0) {
			setHasClicked(replaceAt(hasClicked, position, 1));
			CardMover();
		} else {
			// 0 1
			setHasClicked(replaceAt(hasClicked, position, 0));
			CardMover();
		}

		console.log("INTERNAL POSITION " + position, hasClicked);
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
