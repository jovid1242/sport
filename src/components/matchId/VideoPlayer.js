import React from "react";
import ReactPlayer from "react-player/youtube";

import domatch from "../../assets/img/domatch.png";

import "../../styles/player.scss";

export default function VideoPlayer({ matchStart }) {
  return (
    <div className="player_video">
      <div className="pl__wrapper">
        {matchStart === false ? (
          <div className="img_start_match">
            <img src={domatch} alt="" />
          </div>
        ) : (
          <ReactPlayer
            width={"100%"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        )}
      </div>
    </div>
  );
}
