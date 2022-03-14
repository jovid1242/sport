import React from "react";

import "../../styles/news.scss";
import ballIcon from "../../assets/img/ball.png";
import cardNewsIcon from "../../assets/img/eur.jpeg";

export default function () {
  return (
    <>
      <div className="t_news_block">
        <div className="t_img_block">
          <img src="https://h46.liveball.pro/public/img/ufc272.jpg" alt="" />
        </div>
        <div className="t_info_block">
          <h3>Прямая трансляция UFC 272: Ковингтон vs Масвидал</h3>
          <p>
            Запланированный турнир по смешанным единоборствам, организованный
            Ultimate Fighting Championship, который должен состояться 5 марта
            2022 года в спортивном комплексе «T-Mobile Arena» в городе
            Лас-Вегас, штат Невада, США
          </p>
          <div className="live_ball">
            <img className="pub_logo" src={ballIcon} alt="Liveball" />
            <span className="publisher">LiveBall</span>
            <span className="p_date">03.03.2022</span>
          </div>
        </div>
      </div>
      <div className="other_news">
        <div className="card">
          <img src={cardNewsIcon} alt="cardNewsIcon" />
          <h4>Результаты жеребьевки Лиги Европы (1/8 финала)</h4>
          <div className="live_ball">
            <img className="pub_logo" src={ballIcon} alt="Liveball" />
            <span className="publisher">LiveBall</span>
            <span className="p_date">03.03.2022</span>
          </div>
        </div>
        <div className="card">
          <img src={cardNewsIcon} alt="cardNewsIcon" />
          <h4>Результаты жеребьевки Лиги Европы (1/8 финала)</h4>
          <div className="live_ball">
            <img className="pub_logo" src={ballIcon} alt="Liveball" />
            <span className="publisher">LiveBall</span>
            <span className="p_date">03.03.2022</span>
          </div>
        </div>
        <div className="card">
          <img src={cardNewsIcon} alt="cardNewsIcon" />
          <h4>Результаты жеребьевки Лиги Европы (1/8 финала)</h4>
          <div className="live_ball">
            <img className="pub_logo" src={ballIcon} alt="Liveball" />
            <span className="publisher">LiveBall</span>
            <span className="p_date">03.03.2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
