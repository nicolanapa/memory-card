import React from "react";

function Card({ pokemonName, /*pokemonDescription,*/ pokemonSvg, hasClicked }) {
	return (
		<div className="card">
			<h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
			{/*<p>{pokemonDescription}</p>*/}

			<img src={pokemonSvg} alt={pokemonName} />
		</div>
	);
}

export { Card };
