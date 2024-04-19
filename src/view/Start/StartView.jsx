import { useState } from "react";
import PlayBtn from "./region/PlayBtn/PlayBtn";
import LorfSetter from "./region/LorfSetter/LorfSetter";
import "./startView.css";

function StartView() {
	const [lorfStart, setLorfStart] = useState({ d1: 2, d2: 0 });
	const [lorfEnd, setLorfEnd] = useState({ d1: 0, d2: 0 });

	return (
		<div id="start-view">
			<div id="second">
				<p>
					<strong>Start Score</strong>
				</p>

				<LorfSetter lorf={lorfStart} setLorf={setLorfStart} />
				<PlayBtn lorfStart={lorfStart} lorfEnd={lorfEnd} />
				<LorfSetter lorf={lorfEnd} setLorf={setLorfEnd} />

				<p>
					<strong>End Score</strong>
				</p>
			</div>
		</div>
	);
}

export default StartView;
