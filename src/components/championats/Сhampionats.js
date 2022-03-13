import React from "react";
import "../../styles/championats.scss";
import leaguesIcon from "../../assets/img/leagues.png";
import ballIcon from "../../assets/img/ball.png";

export default function Championats() {
  return (
    <>
      <div className="championats">
        <div className="sport_container">
          <div className="c__wrapper">
            <div className="title">
              <img src={leaguesIcon} alt="clockIcon" />
              <h3>Ближайшие матчи</h3>
            </div>
            <div className="table__list">
              <ul>
                <li>
                  <a href="#">
                    <img src={ballIcon} alt="ballIcon" />
                    <h3>Лига Чемпионов</h3>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ballIcon} alt="ballIcon" />
                    <h3>Лига Чемпионов</h3>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={ballIcon} alt="ballIcon" />
                    <h3>Лига Чемпионов</h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
