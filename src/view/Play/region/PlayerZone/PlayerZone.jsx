import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import debounce from "debounce";
import "./playerZone.css";

function PlayerZone({ player }) {
	const searchParams = new URLSearchParams(window.location.search);
	const lorfStart = parseInt(searchParams.get("lorf_start"));
	const lorfEnd = parseInt(searchParams.get("lorf_end"));

	const [lorf, setLorf] = useState(lorfStart);

	const increaseLorf = () => {
		return debounce(() => setLorf((prevState) => prevState + 1), 50);
	};

	const decreaseLorf = () => {
		if (lorf > 0) {
			return debounce(() => setLorf((prevState) => prevState - 1), 50);
		}
	};

	const increaseLorfByFive = () => {
		return debounce(() => setLorf((prevState) => prevState + 5), 50);
	};

	const decreaseLorfByFive = () => {
		if (lorf >= 5) {
			return debounce(() => setLorf((prevState) => prevState - 5), 50);
		} else {
			return debounce(() => setLorf(0), 50);
		}
	};

	const isDecBtnDisabled = () => {
		return lorf <= 0;
	};

	return (
		<div className={`player-zone ${player}`}>
			<div className="lorf-row">
				{" "}
				<button
					className="lorf-btn dec-lorf-btn"
					onClick={decreaseLorf()}
					disabled={isDecBtnDisabled()}
				>
					{" "}
					<FaChevronDown />{" "}
				</button>
				<p className="player-lorf">
					<strong>{lorf}</strong>
				</p>
				<button className="lorf-btn inc-lorf-btn" onClick={increaseLorf()}>
					{" "}
					<FaChevronUp />{" "}
				</button>
			</div>
			<div className="five-flex">
				<button
					className="five-btn minus-five-btn"
					onClick={decreaseLorfByFive()}
					disabled={isDecBtnDisabled()}
				>
					-5
				</button>
				<button className="five-btn plus-five-btn" onClick={increaseLorfByFive()}>
					+5
				</button>
			</div>
		</div>
	);
}

export default PlayerZone;
