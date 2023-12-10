import React from "react";
import { useState, useRef } from "react";
import "./Form.scss";

import SelectInput from "../SelectInput/SelectInput";

import Export from "../../vendor/icons/export.svg";

function Form() {
  const [data, setData] = useState({});

  const [optionValue, setOptionValue] = useState(null);
  const emailRef = useRef();
  const nameRef = useRef();
  const [range, setRange] = useState(50);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Прикрепить файл");

  function handleSubmit(event) {
    event.preventDefault();
    setData((values) => ({
      ...values,
      systemType: optionValue,
      email: emailRef.current.value,
      name: nameRef.current.value,
      range: range,
      file: fileName,
    }));
  }

  console.log(data);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <SelectInput className="input__select" setOptionValue={setOptionValue} />

      <input
        className="input__email"
        id="email"
        type="email"
        ref={emailRef}
        placeholder="Ваш e-mail"
      />

      <input
        className="input__name"
        id="name"
        type="text"
        ref={nameRef}
        placeholder="Ваше имя"
      />

      <div className="input__range_wrapper">
        <label className="input__range_label">
          <span className="input__range_label-title">
            Sed ut perspiciatis, unde omnis iste natus
          </span>{" "}
          <span className="input__range_label-percent">{range}%</span>
        </label>
        <input
          className="input__range"
          type="range"
          id="range"
          onChange={(e) => setRange(e.target.value)}
          placeholder="text"
        />
      </div>

      <div className="input__file-wrapper">
        <label className="input__file_label" htmlFor="file">
          <img src={Export} alt="export" />
          <p className="input__file_label-text">{fileName}</p>
        </label>
        <input
          type="file"
          id="file"
          accept="*"
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setFile(URL.createObjectURL(files[0]));
            }
          }}
          hidden
        />
      </div>

      <button className="submit__btn" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default Form;
