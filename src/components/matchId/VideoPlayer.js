import React from "react";
import ReactPlayer from "react-player/youtube";

import domatch from "../../assets/img/domatch.png";

import "../../styles/player.scss";

export default function VideoPlayer({ liveStart }) {
  return (
    <div className="player_video">
      {/* <div className="pl__wrapper">
        {liveStart === false ? (
          <div className="img_start_match">
            <img src={domatch} alt="" />
          </div>
        ) : (
          <ReactPlayer
            width={"100%"}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        )}
      </div> */}
      <div><br/>		<iframe allowfullscreen="true" scrolling="no" frameborder="0" width="100%" height="580" src="http://var16.ru//4.html"></iframe></div>
    </div>
  );
}
