import React from "react";
import "./Order.scss";
import map from "../../vendor/images/map.webp";

import WorkSchema from "../WorkSchema/WorkSchema";
import Form from "../Form/Form";

function Order() {
  return (
    <section className="order">
      <picture className="order__bg">
        <img src={map} alt="map" />
      </picture>
      <div className="order__wrapper">
        <h2 className="order__title">
          Оформление <span> Заказа</span>
        </h2>
        <p className="order__caption">
          Перед заполнением формы ознакомьтесь с нашей схемой работы!
        </p>
        <WorkSchema />
        <Form />
      </div>
    </section>
  );
}

export default Order;
