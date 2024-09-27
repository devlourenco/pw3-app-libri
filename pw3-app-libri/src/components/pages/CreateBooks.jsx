import React from "react";
import { useState, useEffect } from "react";
import style from "./CreateBooks.module.css";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Button from "../forms/Button";
const CreateBooks = () => {
  /*Define o state de dados da categoria*/
  const [categorias, setCategorias] = useState([]);
  const [book, setBook] = useState({});

  function handlerChangeBook(event) {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);

    function submit(event) {
      event.preventDefault();
      createBook(book);
    }

    function createBook(book) {
      // console.log(JSON.stringify(book))

      fetch("http://localhost:5000/inserirLivro", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
        body: JSON.stringify(book),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          // navigate('/livros',{state:'LIVRO CADASTRADO COM SUCESSO!'});
        })
        .catch((err) => {
          console.log(err);
        });
    }

    useEffect(() => {
      fetch("http://localhost:5000/listagemCateorias", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
        .then((response) =>
          // console.log("RESPOSTA:" + resp);
          response.json()
        )
        .then((data) => {
          console.log("DATA: " + data);
          setCategorias(data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
      <section className={style.create_book_container}>
        <h1>CADASTRAR LIVRO</h1>
        <Input
          type="text"
          name="nome_livro"
          placeHolder="Digite o nome do seu livro"
          text="Título do Livro"
          Onchange={handlerChangeBook}
        />

        <Input
          type="text"
          name="autor_livro"
          placeHolder="Digite o nome do autor do livro"
          text="Nome do autor"
          Onchange={handlerChangeBook}

/>

        <Input
          type="text"
          name="descricao_livro"
          placeHolder="Digite a descrição do livro"
          text="Descrição do livro"
          Onchange={handlerChangeBook}
/>

        <Select
          name="categoria"
          text="Escolha uma categoria de livro"
          options={categorias}
        />
        <Button rotulo="Cadastrar Livro" onClick={createBook} />
      </section>
    );
  }
};
export default CreateBooks;
