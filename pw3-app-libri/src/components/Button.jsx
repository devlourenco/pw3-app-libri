import styles from "./Button.module.css";

const Button = ({ label }) => {
  return (
    <div className={styles.buttonContainer}>
      <button>{label}</button>
    </div>
  );
};

export default Button;
