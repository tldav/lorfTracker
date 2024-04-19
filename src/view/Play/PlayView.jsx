import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import useWakeLock from "react-use-wake-lock";
import PlayerZone from "./region/PlayerZone/PlayerZone";
import MenuBtn from "./region/MenuBtn/MenuBtn";

function PlayView() {
	const { request, release } = useWakeLock();
	const { pathname } = useLocation();

	useEffect(() => {
		request();
	});

	useEffect(() => {
		return () => release();
	}, [pathname]);

	return (
		<div id="play-view">
			<MenuBtn />
			<PlayerZone player="player-two" />
			<PlayerZone player="" />
		</div>
	);
}

export default PlayView;
