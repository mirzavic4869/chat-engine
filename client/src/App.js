import React from "react";

import { Browser as Router, Route } from "react-router-dom";

import Join from "./components/Join.js";
const App = () => {
	<Router>
		<Route path="/" exact component={Join} />
		<Route path="/chat" component={Chat} />
	</Router>;
};

export default App;
