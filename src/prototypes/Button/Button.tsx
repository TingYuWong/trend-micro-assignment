import { IProps } from './Button.type';
import style from './Button.module.css';

const Button = ({
    children,
    outline = false,
    type = 'button',
    onClick = () => {},
}: IProps) => {
    return (
        <button
            type={type}
            className={`${style.btn} ${!outline || style['btn--outline']}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
