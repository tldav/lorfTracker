import { useNavigate } from "react-router-dom";
import "./playBtn.css";

function PlayBtn({ lorfStart, lorfEnd }) {
	const navigate = useNavigate();

	const toPlay = () => {
		navigate(
			`play?lorf_start=${lorfStart.d1}${lorfStart.d2}&lorf_end=${lorfEnd.d1}${lorfEnd.d2}`
		);
	};

	const isBtnDisabled = () => {
		const startingLorf = parseInt(`${lorfStart.d1}${lorfStart.d2}`);
		const endingLorf = parseInt(`${lorfEnd.d1}${lorfEnd.d2}`);

		return startingLorf === endingLorf;
	};

	return (
		<button className="play-btn" onClick={toPlay} disabled={isBtnDisabled()}>
			<strong>Play</strong>
		</button>
	);
}

export default PlayBtn;
