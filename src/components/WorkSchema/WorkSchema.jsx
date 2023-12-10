import React from "react";
import "./WorkSchems.scss";

import Search from "../../vendor/icons/search.svg";
import Percent from "../../vendor/icons/percent.svg";
import File from "../../vendor/icons/file.svg";
import Message from "../../vendor/icons/message.svg";
import Money from "../../vendor/icons/money.svg";

function WorkSchema() {
  return (
    <div className="schema">
      <div className="schema__item">
        <div className="schema__item_circle">
          <img src={Search} alt="search" />
        </div>
        <p className="schema__item_caption">Lorem ipsum dolor sit amet</p>
      </div>

      <div className="schema__dots">
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
      </div>

      <div className="schema__item">
        <div className="schema__item_circle">
          <img src={Percent} alt="percent" />
        </div>
        <p className="schema__item_caption">Сonsecteturadipiscing elit</p>
      </div>

      <div className="schema__dots">
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
      </div>

      <div className="schema__item">
        <div className="schema__item_circle">
          <img src={File} alt="file" />
        </div>
        <p className="schema__item_caption">Sed do eiusmod tempor</p>
      </div>

      <div className="schema__dots">
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
      </div>

      <div className="schema__item">
        <div className="schema__item_circle">
          <img src={Message} alt="message" />
        </div>
        <p className="schema__item_caption">Esse cillum dolore eu fugiat</p>
      </div>

      <div className="schema__dots">
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
        <span className="schema__dot" />
      </div>

      <div className="schema__item">
        <div className="schema__item_circle">
          <img src={Money} alt="money" />
        </div>
        <p className="schema__item_caption">
          Excepteur sint occaecat cupidatat non proident
        </p>
      </div>
    </div>
  );
}

export default WorkSchema;
