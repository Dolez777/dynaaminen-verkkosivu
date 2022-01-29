import React from "react";
import "./App.scss";
import DogGrid from "./components/grid/index";

/*Create simple website, that retrieves some data from API service
1. Create layout mock
2. Use real data from dog.api
3. get dogs by breed
*/
function App() {
	return (
		<div className="App">
			<div className="container">
				<h1>Api tehtävä</h1>
				<DogGrid></DogGrid>
			</div>
		</div>
	);
}

export default App;
