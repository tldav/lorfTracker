import HomeBtn from "./HomeBtn";
import RestartBtn from "./RestartBtn";

function PlayMenu() {
	return (
		<div
			style={{
				position: "absolute",
				left: "0",
				right: "0",
				margin: "auto",
				top: "49%",
				bottom: "50%",
				height: "41px",
				maxWidth: "200px",
				textAlign: "center",
				zIndex: "2",
			}}
		>
			<HomeBtn />
			<RestartBtn />
		</div>
	);
}

export default PlayMenu;
