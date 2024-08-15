import "./App.css";
import CardBooks from "./components/CardBooks";
import capaLivro from './assets/livros/livros/irmaos_karamazov.jpg'

function App() {
  return (
    <>
      <CardBooks
        titulo="Os irmãos Karamázov"
        autor="Fiódor Dostoiévski e Paulo Bezerra"
        imagem={capaLivro}
      />

      
    </>
  );
}

export default App;
