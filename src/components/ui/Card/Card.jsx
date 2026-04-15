import styles from './Card.module.css';

const Card = ({children,variant,onClick,className = ""}) => {
  const variantClass = styles[variant] || "";
  return (
    <div className={`${variantClass} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;