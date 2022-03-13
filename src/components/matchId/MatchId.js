import React from "react";
import VideoPlayer from "./VideoPlayer";
import Tour from "../tour/Tour";

import newsIcon from "../../assets/img/news.png";
import clock from "../../assets/img/clock.png";
import calendar from "../../assets/img/calendar.svg";
import stadn from "../../assets/img/field.png";

import "../../styles/main.scss";
import "../../styles/match.scss";

export default function MatchId() {
  return (
    <div>
      <div className="t_main">
        <div className="main">
          <div className="sport_containet">
            <div className="m__wrapper">
              <div className="box_l">
                <div className="title">
                  <img src={newsIcon} alt="newsIcon" />
                  <h1>Российская Премьер Лига</h1>
                </div>
                <Tour />
                <VideoPlayer />
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
                        <p>7 mart</p>
                      </div>
                    </div>
                    <div className="i__group">
                      <div className="info_l">
                        <img src={calendar} alt="clock" />
                        <span>Тур</span>
                      </div>
                      <div className="info_r">
                        <p>Regular Season - 20</p>
                      </div>
                    </div>
                    <div className="i__group">
                      <div className="info_l">
                        <img src={stadn} alt="clock" />
                        <span>Стадион</span>
                      </div>
                      <div className="info_r">
                        <p>Stadion FK Krasnodar</p>
                      </div>
                    </div>
                  </div>
                  <div className="info_game">
                    <h3>КРАСНОДАР - УРАЛ:</h3>
                    <p>
                      Готовы к Российская Премьер Лига? Если вам интересны
                      команды Краснодар или Урал , вы должны отметить 7 марта в
                      своем календаре. У кого больше шансов выиграть игру?
                      Пришло время для Regular Season - 20 в Российская Премьер
                      Лига. Поклонники и критики с нетерпением ждут игры.
                      Противники будут противостоять друг другу на Stadion FK
                      Krasnodar. Кто победит в итоге: Краснодар или Урал ?
                      Смотрите матч на LiveBall, а также смотрите результаты,
                      статистику и отчеты! Смотреть онлайн матч Краснодар - Урал
                      в прямом эфире. Прямой эфир так же доступен для просмотра
                      на мобильных гаджетах iPad, iPhone и Android устройствах.
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
