import React from "react";
import "./Header.scss";

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <p className="header__logo">
          LoremIpsum.<span>Net</span>
        </p>

        <nav className="header__nav">
          <a href="/" className="header__nav_link">
            Бизнес
          </a>
          <a href="/" className="header__nav_link">
            О нас
          </a>
          <a href="/" className="header__nav_link">
            Цены
          </a>
          <a href="#order" className="header__nav_link">
            Оформить заказ
          </a>
        </nav>
      </div>
    </section>
  );
}

export default Header;
