import './button.scss'

const Button = ({ text, className = '' }) => (
    <button className={`btn ${className}`}>{text}</button>
)

export default Button;