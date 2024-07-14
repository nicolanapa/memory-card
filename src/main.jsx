import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { Header } from "./components/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Header />
	</React.StrictMode>
);

