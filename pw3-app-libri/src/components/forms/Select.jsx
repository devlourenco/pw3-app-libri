import style from "../forms/Select.module.css";

export default function Select({ name, text }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma categoria</option>
        <option>Ficção Científica</option>
        <option>Fantasia Heroica</option>
        <option>Suspense</option>
        <option>Terror</option>
      </select>
    </div>
  ); 
}
