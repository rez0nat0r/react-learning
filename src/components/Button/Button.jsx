import "./button.scss";
// import clsx from "clsx";

const Button = ({ text, ...otherProps }) => (
  <button {...otherProps}>
    {text}
  </button>
);

export default Button;
