import React from "react";
import ReactPlayer from "react-player/youtube";

import "../../styles/player.scss";

export default function VideoPlayer() {
  return (
    <div className="player_video">
      <div className="pl__wrapper">
        <ReactPlayer
          width={"100%"}
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
      </div>
    </div>
  );
}
