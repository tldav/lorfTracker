import { GiHamburgerMenu } from "react-icons/gi";

function MenuBtn() {
	return (
		<button
			style={{
				position: "absolute",
				left: "0",
				right: "0",
				top: "0",
				bottom: "0",
				margin: "auto",
				zIndex: 200,
				height: "40px",
				maxWidth: "55px",
				// width: "50px",
			}}
		>
			<GiHamburgerMenu />
		</button>
	);
}

export default MenuBtn;
