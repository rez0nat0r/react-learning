import "./button.scss";
import clsx from "clsx";

const Button = ({ text, className, onClick, type }) => (
  <button className={clsx(className)} onClick={onClick} type={type}>
    {text}
  </button>
);

export default Button;
