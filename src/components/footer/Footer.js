import React from "react";

import logo from "../../assets/img/logo.svg";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="sport_container">
            <div className="footer_wrapper">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2021. All Rights Reserved By <br /> SOCCER-ON
                  – Мы там, где футбол
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
