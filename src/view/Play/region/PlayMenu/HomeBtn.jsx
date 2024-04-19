import { IoMdHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function HomeBtn() {
	const navigate = useNavigate();

	const toHome = () => {
		navigate("/");
	};

	return (
		<button onClick={toHome} style={{ marginRight: "2.5px", padding: "4px 14px" }}>
			<IoMdHome size={28} />
		</button>
	);
}

export default HomeBtn;
