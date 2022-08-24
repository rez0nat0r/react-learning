import './app-button.scss'

const Button = ({text, className=''}) => {
    return (
        <button  className={`btn ${className}`}>{text}</button>
    )
}

export default Button;