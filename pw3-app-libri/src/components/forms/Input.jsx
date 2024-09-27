import React from "react";
import style from "../forms/Input.module.css";

export default function Input({ type, text, name, placeHolder, handlerChangeBook }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} placeholder={placeHolder} />
    </div>
  );
}
