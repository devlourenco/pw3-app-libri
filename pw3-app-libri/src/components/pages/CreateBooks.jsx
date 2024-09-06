import React from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
const CreateBooks = () => {
  return (
    <section className={style.create_book_container}>
      <h1>Cadastrar Livro</h1>
      <Input
        type="text"
        name="txt_livro"
        placeHolder="Digite o nome do seu livro"
        text="Título do Livro"
      />

      <Input
        type="text"
        name="txt_autor"
        placeHolder="Digite o nome do autor do livro"
        text="Nome do autor"
      />

      <Input
        type="text"
        name="txt_desc_livro"
        placeHolder="Digite a descrição do livro"
        text="Descrição do livro"
      />

      <Select name="categoria" text="Escolha uma categoria de livro" />
      <Button rotulo="Cadastrar Livro" />
    </section>
  );
};

export default CreateBooks;
