import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import Tour from "../tour/Tour";

import newsIcon from "../../assets/img/news.png";
import clock from "../../assets/img/clock.png";
import calendar from "../../assets/img/calendar.svg";
import stadn from "../../assets/img/field.png";
import tg from "../../assets/img/tg.svg";
import ligaIcon from "../../assets/img/132.png";

import "../../styles/main.scss";
import "../../styles/match.scss";

export default function MatchId() {
  const [activeTab, setActiveTab] = useState(true);

  const matchStart = false;
  return (
    <div>
      <div className="t_main">
        <div className="main">
          <div className="sport_containet">
            <div className="m__wrapper">
              <div className={activeTab === true ? "tg_block" : "dd_none"}>
                <a href="https://t.me/socceron2022" target="_blank">
                  <img src={tg} alt="tg-icon" />
                  <div className="tg_info">
                    <span>Не пропускай трансляции</span>
                    <p>
                      Ссылки на трансляции, новости футбола и многое другое в
                      нашем Telegram канале
                    </p>
                  </div>
                  <button
                    className="tg_close"
                    id="tg_close"
                    type="submit"
                    onClick={() => setActiveTab(false)}
                  >
                    x
                  </button>
                </a>
              </div>
              <div className="box_l">
                <div className="title">
                  <img src={ligaIcon} alt="ligaIcon" />
                  <h1>Лига чемпионов</h1>
                </div>
                <Tour matchStart={matchStart} />
                <VideoPlayer liveStart={false} />
              </div>
              <div className="box_r">
                <div className="info_match">
                  <div className="title">
                    <span>ИНФОРМАЦИЯ О МАТЧЕ</span>
                  </div>
                  <div className="__info">
                    <div className="i__group">
                      <div className="info_l">
                        <img src={clock} alt="clock" />
                        <span>Дата матча</span>
                      </div>
                      <div className="info_r">
                        <p>15 марта 2022. 23:00 МСК</p>
                      </div>
                    </div>
                    <div className="i__group">
                      <div className="info_l">
                        <img src={calendar} alt="clock" />
                        <span>Тур</span>
                      </div>
                      <div className="info_r">
                        <p>1/8 финала. 2-й матч</p>
                      </div>
                    </div>
                    <div className="i__group">
                      <div className="info_l">
                        <img src={stadn} alt="clock" />
                        <span>Стадион</span>
                      </div>
                      <div className="info_r">
                        <p>Олд Траффорд (Манчестер, Англия)</p>
                      </div>
                    </div>
                  </div>
                  <div className="info_game">
                    <h3>Манчестер Юнайтед - Атлетико:</h3>
                    <p>
                      15 марта во втором матче 1/8 финала Лиги чемпионов сыграют
                      «Манчестер Юнайтед» и «Атлетико». Встреча пройдет на
                      стадионе «Олд Траффорд» и начнется в 23.00. Аналитики
                      букмекерской компании БЕТСИТИ считают, что в этом матче
                      победу одержит «Манчестер Юнайтед». На англичан можно
                      поставить с котировкой 2.18 — это примерно 44%
                      вероятности. Ничью предлагается взять за 3.30 (29%), а
                      победа «Атлетико» есть в линии за 3.60 (27%). Ф1(-1.5)
                      идет за 4.00, а Ф2(+1.5) — за 1.73. Тотал мячей больше 2.5
                      доступен за 2.22, ТМ 2.5 можно взять за 1.71. Исход «обе
                      забьют» предлагают взять за 1.98. Обратный результат есть
                      за 1.83.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
