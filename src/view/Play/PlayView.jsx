import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useWakeLock from "react-use-wake-lock";
import PlayMenu from "./region/PlayMenu/PlayMenu";
import PlayerZone from "./region/PlayerZone/PlayerZone";

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
			<PlayMenu />
			<PlayerZone player="player-two" />
			<PlayerZone player="" />
		</div>
	);
}

export default PlayView;
