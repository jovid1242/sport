import React from "react";

import ReactPlayer from "react-player";

import g1Icon from "../../assets/img/621.png";
import g2Icon from "../../assets/img/1084.png";
import "../../styles/tour.scss";

export default function Tour({ matchStart }) {
  return (
    <div className="league_tour">
      <div className="tour__wrapper">
        <div className="l_item">
          <span>Манчестер Юнайтед</span>
          <img
            src={"https://liveball.uno/public/img/teams/33.png"}
            alt="group"
          />
        </div>
        <div className="info_vs">
          {matchStart === false ? (
            <div>
              <p>23:00</p>
              <span>15 марта</span>
            </div>
          ) : (
            <p>2:1</p>
          )}
        </div>
        <div className="r_item">
          <span>Атлетико</span>
          <img
            src={"https://liveball.uno/public/img/teams/530.png"}
            alt="group"
          />
        </div>
      </div>
    </div>
  );
}
