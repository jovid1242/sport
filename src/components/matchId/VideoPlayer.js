import React from "react";
import ReactPlayer from "react-player";

import domatch from "../../assets/img/domatch.png";

import "../../styles/player.scss";

export default function VideoPlayer({ liveStart }) {
  return (
    <div className="player_video">
      <div className="pl__wrapper">
          <ReactPlayer
            width={"100%"}
            url="blob:https://matchtv.ru/30fa3ed2-8372-4871-9e4d-58268297feb6"
        />
      </div>
      {/* <div><br />		<iframe allowfullscreen="true" scrolling="no" frameborder="0" width="100%" height="580" src="https://matchtv.ru/vdl/player/media/608733"></iframe></div> */}
    </div>
  );
}
