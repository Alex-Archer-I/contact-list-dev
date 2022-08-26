import React, {useRef, useState} from 'react';
import {useAppDispatch, authActions} from '../../store/index';

import uiClasses from '../../styles/ui.module.css';

const Auth:React.FC = () => {
    const [error, setError] = useState({
        isError: false,
        type: '',
        message: '',
    });

    const dispath = useAppDispatch();

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const userErrorCheck = () => {
        if (error.isError && error.type === 'user') {
            setError({
                isError: false,
                type: '',
                message: '',
            });
        };
    };

    const passwordErrorCheck = () => {
        if (error.isError && error.type === 'password') {
            setError({
                isError: false,
                type: '',
                message: '',
            });
        };
    };

    const onSubmitLoginData = (event: React.FormEvent) => {
        event.preventDefault();
        const userData = {
            login: loginRef.current?.value,
            password: passwordRef.current?.value,
        };
        fetch('/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        }).then(data => data.json()).then(data => {
            if (!data.isLogin && !data.isPassword) {
                setError({
                    isError: true,
                    type: 'user',
                    message: 'Проверьте, пожалуйста, правильность введенных данных.',
                });
                return;
            };

            if (!data.isLogin) {
                setError({
                    isError: true,
                    type: 'user',
                    message: 'Проверьте, пожалуйста, имя пользователя.',
                });
                return;
            };

            if (!data.isPassword) {
                setError({
                    isError: true,
                    type: 'password',
                    message: 'Проверьте, пожалуйста, пароль.',
                });
                return;
            };

            loginRef.current!.value = '';
            passwordRef.current!.value = '';
            dispath(authActions.logIn());
        });
    };

    return (
        <form onSubmit={onSubmitLoginData} className={`${uiClasses.middle} ${uiClasses.card}`} action="POST">
            <div className={`${uiClasses['input-field']}`}>
                <label htmlFor="login">Логин</label>
                <input type="text" id="login" ref={loginRef} onFocus={userErrorCheck} required/>
            </div>
            <div className={`${uiClasses['input-field']}`}>
                <label htmlFor="password">Пароль</label>
                <input type="password" id="password" ref={passwordRef} onFocus={passwordErrorCheck} required/>
            </div>
            <button className={`${uiClasses.submit}`}>Войти</button>
            {error.isError && <p className={`${uiClasses.error}`}>{error.message}</p>}
        </form>
    );
};

export default Auth;