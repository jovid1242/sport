import React from "react";
import logo from "../../assets/img/new_logo.png";

import "../../styles/header.scss";

export default function Header() {
  return (
    <header>
      <div className="header">
        <div className="sport_container">
          <div className="h__wrapper">
            <div className="h__logo">
              <img src={logo} alt="logo sport" />
            </div>
            <div className="search_section">
              <form action="">
                <div className="search__group">
                  <input type="text" placeholder="Найти команду" />
                  <button>
                    <img
                      src="https://h46.liveball.pro/public/img/search.svg"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="menu_links">
        <div className="sport_container">
          <ul className="">
            <li className="s_active_tab">
              <svg
                class="sport_img"
                id="Layer_1"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m256 .662c-141.159 0-256 114.841-256 256 14.062 339.619 497.99 339.52 512-.002 0-141.157-114.841-255.998-256-255.998zm191.438 135.98c19.72 31.456 31.478 67.49 34.032 104.635l-55.036-39.991zm-191.438-105.98c18.681 0 37.103 2.281 55.041 6.802l-55.041 39.99-55.04-39.991c17.937-4.52 36.359-6.801 55.04-6.801zm-191.445 105.975 21.002 64.642-55.034 39.985c2.556-37.141 14.314-73.168 34.032-104.627zm18.182 265.012h67.925l21.037 64.748c-34.507-13.867-65.001-36.061-88.962-64.748zm257.559 64.739 21.042-64.747h67.922c-23.965 28.686-54.463 50.882-88.964 64.747zm110.194-94.747h-100.05c-6.498 0-12.257 4.184-14.266 10.364l-30.953 95.242c-31.497 7.186-66.959 7.185-98.455-.002l-30.941-95.231c-2.008-6.18-7.768-10.365-14.266-10.365h-100.045c-16.577-27.931-27.309-59.714-30.501-93.661l80.994-58.845c5.258-3.82 7.457-10.59 5.449-16.77l-30.895-95.089c21.832-24.734 48.977-44.666 79.637-57.994l80.984 58.841c5.651 4.104 12.791 3.519 17.635 0l80.985-58.841c30.658 13.328 57.802 33.257 79.632 57.99l-30.898 95.101c-2.008 6.18.191 12.95 5.448 16.77l81 58.857c-3.194 33.937-13.923 65.71-30.494 93.633z"></path>
                  <path d="m356.501 214.739-91.685-66.612c-5.256-3.819-12.377-3.819-17.633 0l-91.685 66.612c-5.258 3.82-7.458 10.591-5.449 16.771l35.025 107.775c2.009 6.18 7.768 10.364 14.266 10.364h113.326c6.498 0 12.258-4.185 14.266-10.365l35.018-107.775c2.009-6.18-.191-12.95-5.449-16.77zm-54.732 104.911h-91.53l-28.289-87.046 74.051-53.8 74.051 53.801z"></path>
                </g>
              </svg>
              <a href="#">Футбол</a>
            </li>
            <li>
              <svg
                class="sport_img"
                id="Layer_1"
                enable-background="new 0 0 512 512"
                height="512"
                viewBox="0 0 512 512"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m256 .662c-141.159 0-256 114.841-256 256 14.062 339.619 497.99 339.52 512-.002 0-141.157-114.841-255.998-256-255.998zm191.438 135.98c19.72 31.456 31.478 67.49 34.032 104.635l-55.036-39.991zm-191.438-105.98c18.681 0 37.103 2.281 55.041 6.802l-55.041 39.99-55.04-39.991c17.937-4.52 36.359-6.801 55.04-6.801zm-191.445 105.975 21.002 64.642-55.034 39.985c2.556-37.141 14.314-73.168 34.032-104.627zm18.182 265.012h67.925l21.037 64.748c-34.507-13.867-65.001-36.061-88.962-64.748zm257.559 64.739 21.042-64.747h67.922c-23.965 28.686-54.463 50.882-88.964 64.747zm110.194-94.747h-100.05c-6.498 0-12.257 4.184-14.266 10.364l-30.953 95.242c-31.497 7.186-66.959 7.185-98.455-.002l-30.941-95.231c-2.008-6.18-7.768-10.365-14.266-10.365h-100.045c-16.577-27.931-27.309-59.714-30.501-93.661l80.994-58.845c5.258-3.82 7.457-10.59 5.449-16.77l-30.895-95.089c21.832-24.734 48.977-44.666 79.637-57.994l80.984 58.841c5.651 4.104 12.791 3.519 17.635 0l80.985-58.841c30.658 13.328 57.802 33.257 79.632 57.99l-30.898 95.101c-2.008 6.18.191 12.95 5.448 16.77l81 58.857c-3.194 33.937-13.923 65.71-30.494 93.633z"></path>
                  <path d="m356.501 214.739-91.685-66.612c-5.256-3.819-12.377-3.819-17.633 0l-91.685 66.612c-5.258 3.82-7.458 10.591-5.449 16.771l35.025 107.775c2.009 6.18 7.768 10.364 14.266 10.364h113.326c6.498 0 12.258-4.185 14.266-10.365l35.018-107.775c2.009-6.18-.191-12.95-5.449-16.77zm-54.732 104.911h-91.53l-28.289-87.046 74.051-53.8 74.051 53.801z"></path>
                </g>
              </svg>
              <a href="#">Футбол</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
