import style from './App.module.css';

import Checkbox from './prototypes/Checkbox';
import Button from './prototypes/Button';
import TextField from './prototypes/TextField';

import GoogleIcon from './assets/google.svg?react';
import FacebookIcon from './assets/facebook.svg?react';
import BackIcon from './assets/back.svg?react';
import ErrorIcon from './assets/error.svg?react';

import isEmail from 'validator/lib/isEmail';

import { useState } from 'react';

const DEFAULT_ERROR_CONFIG = {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    isAgreed: false,
};

const VALIDATION_RULE = {
    // return true if validation fails
    firstName: (val: string) => val === '',
    lastName: (val: string) => val === '',
    email: (val: string) => val === '' || !isEmail(val),
    password: (val: string) => val.length < 8 || !/\d/.test(val),
    isAgreed: (val: boolean) => !val,
};

function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [errorObj, setErrorObj] = useState({ ...DEFAULT_ERROR_CONFIG });

    const handleErrorObj = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const error = { ...DEFAULT_ERROR_CONFIG };
        if (VALIDATION_RULE.firstName(firstName)) error.firstName = true;
        if (VALIDATION_RULE.lastName(lastName)) error.lastName = true;
        if (VALIDATION_RULE.email(email)) error.email = true;
        if (VALIDATION_RULE.password(password)) error.password = true;
        if (VALIDATION_RULE.isAgreed(isAgreed)) error.isAgreed = true;
        setErrorObj(error);
        if (Object.values(error).every((item) => item === false)) {
            alert('Success');
        }
    };

    return (
        <div className={style.wrap}>
            <div className={style.back}>
                <BackIcon />
                <div>Back</div>
            </div>
            <form className={style.form} onSubmit={handleErrorObj}>
                <div className={style.form__top}>
                    <div className={style.form__intro}>
                        <div className={style.form__intro__subtitle}>
                            Start from free
                        </div>
                        <div className={style.form__intro__title}>
                            Create an account
                        </div>
                    </div>
                    {Object.values(errorObj).some((item) => item === true) && (
                        <div className={style.form__error}>
                            <ErrorIcon />
                            <div>
                                Please complete all the required fields to
                                proceed.
                            </div>
                        </div>
                    )}
                    <div className={style.form__sign__in__btns}>
                        <Button
                            outline={true}
                            onClick={() => console.log('Sign Up With Google')}
                        >
                            <GoogleIcon />
                            <div>Sign Up With Google</div>
                        </Button>
                        <Button
                            outline={true}
                            onClick={() => console.log('Sign Up With Facebook')}
                        >
                            <FacebookIcon />
                            <div>Sign Up With Facebook</div>
                        </Button>
                    </div>
                    <div className={style.form__divide}>
                        <div className={style.form__divide__text}>
                            Or use your email for registration
                        </div>
                        <div className={style.form__divide__line}></div>
                    </div>
                </div>
                <div className={style.form__inputs}>
                    <div className={style.form__inputs__first__row}>
                        <TextField
                            type="text"
                            label="First Name"
                            value={firstName}
                            onChange={(val) => setFirstName(val.trim())}
                            error={errorObj.firstName}
                        />
                        <TextField
                            type="text"
                            label="Last Name"
                            value={lastName}
                            onChange={(val) => setLastName(val.trim())}
                            error={errorObj.lastName}
                        />
                    </div>
                    <div className={style.form__inputs__second_row}>
                        <TextField
                            type="text"
                            label="E-mail"
                            value={email}
                            onChange={(val) => setEmail(val.trim())}
                            error={errorObj.email}
                        />
                    </div>
                    <div className={style.form__inputs__third__row}>
                        <TextField
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(val) => setPassword(val.trim())}
                            error={errorObj.password}
                        />
                        <div className={style.form__inputs__validation_row}>
                            <div
                                className={`${
                                    style['form__inputs__validation']
                                } ${
                                    password.length < 8 &&
                                    style['form__inputs__validation--invalid']
                                }`}
                            >
                                <div
                                    className={
                                        style['form__inputs__validation__icon']
                                    }
                                ></div>
                                <div
                                    className={
                                        style['form__inputs__validation__rule']
                                    }
                                >
                                    8 Characters min.
                                </div>
                            </div>
                            <div
                                className={`${
                                    style['form__inputs__validation']
                                } ${
                                    !/\d/.test(password) &&
                                    style['form__inputs__validation--invalid']
                                }`}
                            >
                                <div
                                    className={
                                        style['form__inputs__validation__icon']
                                    }
                                ></div>
                                <div
                                    className={
                                        style['form__inputs__validation__rule']
                                    }
                                >
                                    One number
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.form__bottom}>
                    <Checkbox
                        label="By creating account, you agree to accept our Privacy Policy, Terms of Service and Notification settings."
                        checked={isAgreed}
                        onChange={() => setIsAgreed(!isAgreed)}
                    />
                    <div className={style.form__submit__btn}>
                        <Button type="submit">
                            <div>Create an Free Account!</div>
                        </Button>
                    </div>
                    <div className={style.form__log__in}>
                        <div className={style.form__log__in__text}>
                            Already have an account?
                        </div>
                        <a className={style.form__log__in__link} href="#">
                            Log in
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default App;
