import React from "react";

import ReactPlayer from "react-player";

import g1Icon from "../../assets/img/621.png";
import g2Icon from "../../assets/img/1084.png";
import "../../styles/tour.scss";

export default function Tour() {
  return (
    <div className="league_tour">
      <div className="tour__wrapper">
        <div className="l_item">
          <span>Краснодар</span>
          <img src={g1Icon} alt="group" />
        </div>
        <div className="info_vs">
          <p>2:1</p>
        </div>
        <div className="r_item">
          <span>Урал</span>
          <img src={g2Icon} alt="group" />
        </div>
      </div>
    </div>
  );
}
