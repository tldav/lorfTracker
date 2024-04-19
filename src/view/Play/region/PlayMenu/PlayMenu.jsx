import { IoMdHome, IoMdRefresh } from "react-icons/io";

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
			<button style={{ marginRight: "2.5px", padding: "4px 14px" }}>
				<IoMdHome size={28} />
			</button>
			<button style={{ marginLeft: "2.5px", padding: "4px 14px" }}>
				<IoMdRefresh size={28} />
			</button>
		</div>
	);
}

export default PlayMenu;
