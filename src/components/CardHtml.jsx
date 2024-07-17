import React from "react";
import { Card } from "./Card";

function CardHtml(cards, hasClicked, setHasClicked, score, setScore) {
	let htmlCards = [];

	for (let i = 0; i < 10; i++) {
		if (cards[i].sprites.other.dream_world.front_default === null) {
			if (cards[i]["sprites"]["other"]["official-artwork"]["front_default"] !== null) {
				htmlCards.push(
					<Card
						pokemonName={cards[i].name}
						/*pokemonDescription={}*/ pokemonSvg={cards[i]["sprites"]["other"]["official-artwork"]["front_default"]}
						hasClicked={hasClicked}
						setHasClicked={setHasClicked}
						position={i}
						score={score}
						setScore={setScore}
						key={cards[i].id}
					/>
				);
			} else {
				// If the high resolution Image doesn't exist then choose this
				// Highly unlikely
				// Pixel-variation

				htmlCards.push(
					<Card
						pokemonName={cards[i].name}
						/*pokemonDescription={}*/ pokemonSvg={cards[i].sprites.front_default}
						hasClicked={hasClicked}
						setHasClicked={setHasClicked}
						position={i}
						score={score}
						setScore={setScore}
						key={cards[i].id}
					/>
				);
			}
		} else {
			htmlCards.push(
				<Card
					pokemonName={cards[i].name}
					/*pokemonDescription={}*/ pokemonSvg={cards[i].sprites.other.dream_world.front_default}
					hasClicked={hasClicked}
					setHasClicked={setHasClicked}
					position={i}
					score={score}
					setScore={setScore}
					key={cards[i].id}
				/>
			);
		}
	}

	return htmlCards;
}

export { CardHtml };
