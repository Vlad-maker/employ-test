import React, { useState } from "react";
import Select from "react-select";

import { options } from "../../mocks/constants";

function SelectInput({ value, setOptionValue }) {
  const [clicked, setClicked] = useState(false);

  const SelectInputStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      height: "48px",
      border: "none",
      backgroundColor: clicked ? "#3D4050" : "#ffffffd9",
      boxShadow: "none",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      width: "376px",
      top: "40px",
      backgroundColor: "#272733e5",
      borderRadius: "3px",
    }),
    menuList: (baseStyles) => ({
      ...baseStyles,
      height: "228px",
      borderRadius: "3px",

      "::-webkit-scrollbar": {
        width: "7px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#3D4050",
        borderRadius: "3px",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#3E9CDC",
        borderRadius: "3px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#3E9CDC",
      },
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#272733E5",
      color: state.isSelected
        ? "#42a9ed"
        : state.isFocused
        ? "#42a9ed"
        : "white",
      textAlign: "left",
      cursor: "pointer",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "34px",
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      marginLeft: 0,
      color: clicked ? "#fff" : "#2a2b30",
      cursor: "pointer",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "34px",
    }),
    placeholder: (baseStyles) => ({
      ...baseStyles,
      color: clicked ? "#fff" : "#2a2b30",
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      transition: "all .2s ease",
      transform: clicked ? "rotate(180deg)" : null,
      color: clicked ? "#fff" : "#2a2b30",
      "&:hover": {
        color: clicked ? "#fff" : "#2a2b30",
      },
    }),
  };

  return (
    <>
      <Select
        options={options}
        onChange={(option) => {
          setOptionValue(option.value);
        }}
        styles={SelectInputStyle}
        value={value}
        onMenuOpen={() => setClicked(true)}
        onMenuClose={() => setClicked(false)}
        isSearchable={false}
        placeholder="Выберите тип системы"
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </>
  );
}

export default SelectInput;
