import style from "../forms/Select.module.css";

export default function Select({ name, text, options }) {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option>Selecione uma categoria</option>

        {options.map((option) => {
          // console.log(option.cod_categoria + ' - ' + option.nome_categoria)
          return <option>{option.nome_categoria}</option>;
        })}
      </select>
    </div>
  );
}
