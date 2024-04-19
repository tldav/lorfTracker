import PlayerZone from "./region/PlayerZone/PlayerZone";

function PlayView() {
	return (
		<div id="play-view">
			<PlayerZone player="player-two" />
			<PlayerZone player="" />
		</div>
	);
}

export default PlayView;
