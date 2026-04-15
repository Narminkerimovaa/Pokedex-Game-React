import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  variant
}) => {
  return (
    <button className={`${styles.btn} ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
