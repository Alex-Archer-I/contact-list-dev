import React from 'react';

import {useAppSelector, useAppDispatch, authActions} from '../../store/index';

import classes from '../../styles/header.module.css';
import uiClasses from '../../styles/ui.module.css';

const Header = () => {
    const isLoggin = useAppSelector(state => state.auth.isLogged);

    const dispatch = useAppDispatch();

    return (
        <header className={`${classes.header}`}>
            {!isLoggin && <h1>Добро пожаловать!</h1>}
            {isLoggin && <button className={`${uiClasses.submit}`} onClick={() => {dispatch(authActions.logOut())}}>Выйти</button>}
        </header>
    );
};

export default Header;