import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { Header } from "./components/Header.jsx";
import { Game } from "./components/Game.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Header />
		<Game />
	</React.StrictMode>
);
