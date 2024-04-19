import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartView from "./view/Start/StartView";
import PlayView from "./view/Play/PlayView";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<StartView />} />
				<Route path="/play" element={<PlayView />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
