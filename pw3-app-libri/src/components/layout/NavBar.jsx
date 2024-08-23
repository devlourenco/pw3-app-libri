import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img className={styles.logo} src="./book.png" />
        </li>
        <li className={styles.item}>HOME</li>
        <li className={styles.item}>CADASTRAR LIVRO</li>
        <li className={styles.item}>LISTAR LIVRO</li>
      </ul>
    </nav>
  );
};

export default NavBar;
