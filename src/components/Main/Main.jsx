import React from "react";
import "./Main.scss";
import background from "../../vendor/images/bg.webp";
import { mainList } from "../../mocks/constants";

function Main() {
  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <section className="main">
      <picture className="main__bg">
        <img src={background} alt="background" />
      </picture>

      <div className="main__content_wrapper">
        <h1 className="main__title">
          <span>Lorem ipsum</span> dolor sit ametconsectetur{" "}
          <span>adipiscing</span>
        </h1>

        <div className="main__list_wrapper">
          <h4 className="main__list_title">
            At vero eos et accusamus et iusto odio dignissimos ducimus!
          </h4>
          <ul className="main__list">
            {mainList.map((item, idx) => (
              <li className="main__list-item" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="main__button_wrapper">
          <a
            href="/"
            className="main__button main__button_order"
            onClick={handleClick}
          >
            заказать
          </a>
          <a
            href="/"
            className="main__button main__button_details"
            onClick={handleClick}
          >
            подробнее
          </a>
        </div>
      </div>
    </section>
  );
}

export default Main;
