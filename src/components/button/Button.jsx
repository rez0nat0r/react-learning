import "./button.scss";
import clsx from 'clsx';

const Button = ({ text, className, onClick }) => {
  return (<button className={clsx(className)} onClick={onClick}>
    {text}
  </button>);
};

export default Button;
