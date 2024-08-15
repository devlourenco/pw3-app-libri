import style from "./CardBooks.module.css";

const CardBooks = ({ titulo, autor, imagem }) => {
  return (
    <div>
      <h3 className={style.titulo}>{titulo}</h3>
      <p className={style.autor}>{autor}</p>
      <img src={imagem} alt={titulo} title={{ titulo }} />
    </div>
  );
};

export default CardBooks;
