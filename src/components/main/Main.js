import React from "react";
import "../../styles/main.scss";

import newsIcon from "../../assets/img/news.png";
import News from "../news/News";
import LiveTable from "../liveTable/LiveTable";
import Championats from "../championats/Сhampionats";

export default function Main() {
  return (
    <>
      <div className="t_main">
        <div className="main">
          <div className="sport_containet">
            <div className="m__wrapper">
              <div className="box_l">
                <div className="title">
                  <img src={newsIcon} alt="newsIcon" />
                  <h1>Новости</h1>
                </div>
                <News />
                <LiveTable />
              </div>
              <div className="box_r">
                <Championats />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
