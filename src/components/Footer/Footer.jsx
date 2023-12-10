import React from "react";
import "./Footer.scss";

import qiwi from "../../vendor/icons/qiwi.svg";
import yandex from "../../vendor/icons/yandex.svg";
import webmoney from "../../vendor/icons/webmoney.svg";

import mail from "../../vendor/icons/mail.svg";
import vk from "../../vendor/icons/vk.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__wrapper">
        <p className="footer__rights">
          © 2018 «LOREMIPSUM.NET» Все права защищены.
        </p>
        <span className="footer__span" />
        <div className="footer__payment">
          <div className="footer__wallet">
            <img src={qiwi} alt="Qiwi" />
            <p className="footer__wallet_name">Qiwi wallet</p>
          </div>
          <div className="footer__wallet">
            <img src={yandex} alt="Yandex" />
            <p className="footer__wallet_name">Yandex Money</p>
          </div>
          <div className="footer__wallet">
            <img src={webmoney} alt="Web Money" />
            <p className="footer__wallet_name">Web Money</p>
          </div>
        </div>
        <span className="footer__span" />
        <div className="footer__contacts">
          <a className="footer__link" href="/">
            <img src={mail} alt="mail" />
            <p className="footer__link_text">info@ipsum228.com</p>
          </a>
          <a className="footer__link" href="/">
            <img src={vk} alt="vk" />
            <p className="footer__link_text">Мы вконтакте</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
