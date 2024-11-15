import style from './Checkbox.module.css';
import { IProps } from './Checkbox.type';

const Checkbox = ({ label, checked, onChange }: IProps) => {
    return (
        <label className={style.checkbox}>
            <span>{label}</span>
            <input
                className={style.checkbox__input}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={style.checkbox__mark}></span>
        </label>
    );
};

export default Checkbox;
