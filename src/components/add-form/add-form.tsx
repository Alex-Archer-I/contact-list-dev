import React, {useRef} from 'react';

import uiClasses from '../../styles/ui.module.css';

const AddForm: React.FC<{returnHandler: () => void}> = (props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const onSubmitNewContact = (event: React.FormEvent) => {
        event.preventDefault();
        const newContact = {
            name: nameRef.current?.value,
            surname: surnameRef.current?.value,
            email: emailRef.current?.value,
            action: 'add',
        };

        fetch('/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        });

        props.returnHandler();
    };

    return (
        <form action="POST" onSubmit={onSubmitNewContact} className={`${uiClasses.middle} ${uiClasses.card}`}>
            <div className={`${uiClasses['input-field']}`}>
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" ref={nameRef}/>
            </div>
            <div className={`${uiClasses['input-field']}`}>
                <label htmlFor="surname">Фамилия</label>
                <input type="text" id="surname" ref={surnameRef}/>
            </div>
            <div className={`${uiClasses['input-field']}`}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" ref={emailRef}/>
            </div>
            <div className={`${uiClasses.actions}`}>
                <button className={`${uiClasses.submit}`} onClick={props.returnHandler}>Назад</button>
                <button type="submit" className={`${uiClasses.submit}`}>Добавить</button>
            </div>
        </form>
    );
};

export default AddForm;