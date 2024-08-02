import "./App.css";
import CardBooks from "./components/CardBooks";

function App() {
  return (
    <>
      <CardBooks
        titulo="Os irmãos Karamázov"
        autor="Fiódor Dostoiévski e Paulo Bezerra"
      />

      <CardBooks
        titulo="Crime e castigo"
        autor="Fiódor Dostoiévski e Paulo Bezerra"
      />

      <CardBooks
        titulo="Noites brancas"
        autor="Nivaldo dos Santos e Fiódor Dostoiévski"
      />
    </>
  );
}

export default App;
