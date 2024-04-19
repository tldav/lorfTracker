import { IoMdRefresh } from "react-icons/io";

function RestartBtn() {
	const restart = () => {
		window.location.reload();
	};

	return (
		<button onClick={restart} style={{ marginLeft: "2.5px", padding: "4px 14px" }}>
			<IoMdRefresh size={28} />
		</button>
	);
}

export default RestartBtn;
