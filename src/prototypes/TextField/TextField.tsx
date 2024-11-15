import { useState } from 'react';
import style from './TextField.module.css';
import { IProps } from './TextField.type';
import ViewIcon from '../../assets/view.svg?react';

const TextField = ({
    value,
    onChange,
    label = undefined,
    type = 'text',
    error = false,
}: IProps) => {
    const [focused, setFocused] = useState(false);
    const [visible, setVisible] = useState(false);

    const handleBlur = () => {
        if (value !== '') return;
        setFocused(false);
    };

    return (
        <div
            className={`${style['text-field']} ${
                focused
                    ? style['text-field--focused']
                    : style['text-field--blurred']
            } ${error && style['text-field--error']}`}
        >
            <label className={style['text-field__label']}>{label}</label>
            <input
                type={visible ? 'text' : type}
                className={style['text-field__input']}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={handleBlur}
            />
            {type === 'password' && (
                <ViewIcon
                    onClick={() => setVisible(!visible)}
                    className={`${style[`text-field__icon`]} ${
                        visible && style[`text-field__icon--visible`]
                    }`}
                />
            )}
        </div>
    );
};

export default TextField;
