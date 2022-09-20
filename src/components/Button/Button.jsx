import "./button.scss";

const Button = ({ text, ...otherProps }) => (
  <button {...otherProps}>{text}</button>
);

export default Button;
