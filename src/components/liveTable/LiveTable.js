import React from "react";
import "../../styles/liveTable.scss";
import clockIcon from "../../assets/img/clock.png";
import g1Icon from "../../assets/img/621.png";
import g2Icon from "../../assets/img/1084.png";

export default function LiveTable() {
  return (
    <>
      <div className="table">
        <div className="sport_container">
          <div className="table_wrapper">
            <div className="title">
              <img src={clockIcon} alt="clockIcon" />
              <h3>Ближайшие матчи</h3>
            </div>
            <div className="table_group">
              <ul>
                <li>
                  <a href="#">
                    <div className="l_item">
                      <span>Краснодар</span>
                      <img src={g1Icon} alt="group" />
                    </div>
                    <div className="data">
                      <p>14:00</p>
                    </div>
                    <div className="r_item">
                      <img src={g2Icon} alt="group" />
                      <span>Урал</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="l_item">
                      <span>Краснодар</span>
                      <img src={g1Icon} alt="group" />
                    </div>
                    <div className="data">
                      <p>14:00</p>
                    </div>
                    <div className="r_item">
                      <img src={g2Icon} alt="group" />
                      <span>Урал</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="l_item">
                      <span>Краснодар</span>
                      <img src={g1Icon} alt="group" />
                    </div>
                    <div className="data">
                      <p>14:00</p>
                    </div>
                    <div className="r_item">
                      <img src={g2Icon} alt="group" />
                      <span>Урал</span>
                    </div>
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
