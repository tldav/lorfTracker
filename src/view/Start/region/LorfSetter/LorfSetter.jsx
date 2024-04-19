import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import debounce from "debounce";
import "./lorfSetter.css";

function LorfSetter({ lorf, setLorf }) {
	const increaseDigit = (digit) => {
		return debounce(
			() => setLorf((prevState) => ({ ...prevState, [digit]: prevState[digit] + 1 })),
			50
		);
	};

	const decreaseDigit = (digit) => {
		return debounce(
			() => setLorf((prevState) => ({ ...prevState, [digit]: prevState[digit] - 1 })),
			50
		);
	};

	const isIncBtnDisabled = (digit) => {
		return lorf[digit] >= 9;
	};

	const isDecBtnDisabled = (digit) => {
		return lorf[digit] <= 0;
	};

	return (
		<div id="lorf-setter-grid-wrapper">
			<button
				id="lorf-setter-top-left"
				onClick={increaseDigit("d1")}
				disabled={isIncBtnDisabled("d1")}
			>
				<FaChevronUp />
			</button>

			<button
				id="lorf-setter-top-right"
				onClick={increaseDigit("d2")}
				disabled={isIncBtnDisabled("d2")}
			>
				{" "}
				<FaChevronUp />
			</button>

			<p id="lorf-setter-left-digit">
				<strong>{lorf.d1}</strong>
			</p>

			<p id="lorf-setter-right-digit">
				<strong>{lorf.d2}</strong>
			</p>

			<button
				id="lorf-setter-bottom-left"
				onClick={decreaseDigit("d1")}
				disabled={isDecBtnDisabled("d1")}
			>
				<FaChevronDown />
			</button>

			<button
				id="lorf-setter-bottom-right"
				onClick={decreaseDigit("d2")}
				disabled={isDecBtnDisabled("d2")}
			>
				{" "}
				<FaChevronDown />
			</button>
		</div>
	);
}

export default LorfSetter;
