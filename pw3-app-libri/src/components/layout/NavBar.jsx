import { Outlet, Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <Link to="/">
            <li className={styles.item}>
              <img className={styles.logo} src="./book.png" />
            </li>
          </Link>
          <Link to="/">
            <li className={styles.item}>HOME</li>
          </Link>
          <Link to="/createBooks">
            <li className={styles.item}>CADASTRAR LIVRO</li>
          </Link>
          <Link to="/listBooks">
            <li className={styles.item}>LISTAR LIVRO</li>
          </Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
