import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import logo from './logo.svg';
import "./assets/App.css";
import AllContent from "./components/AllContent";
import SearchContextProvider from "./context/SearchContext";
require("dotenv").config();

function App() {
	return (
		<Router>
			<SearchContextProvider>
				<AllContent />
			</SearchContextProvider>
		</Router>
	);
}

export default App;
