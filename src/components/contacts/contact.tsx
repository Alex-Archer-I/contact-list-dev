import React from 'react';

import {useAppDispatch, contactsActions} from '../../store/index';

import {ContactType} from '../../models/contact';

import classes from '../../styles/contacts.module.css';

const Contact: React.FC<ContactType> = (props) => {
    const dispatch = useAppDispatch();

    const onDeleteContact = (id: string) => {
        const contactData = {
            id: id,
            action: 'delete',
        };
        fetch('/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData),
        }).then(data => data.json()).then(data => dispatch(contactsActions.createContacts(data)));
    };

    return (
        <li className={`${classes.contact}`}>
            <div className={`${classes['contact-img']}`}>
                <img src={props.img} alt="user's profile photo"/>
            </div>
            <div className={`${classes['contact-text']}`}>
                <h2>{`${props.name} ${props.surname}`}</h2>
                <p>{props.email}</p>
            </div>
            <button onClick={() => {onDeleteContact(props.id)}} className={`${classes['contact-delete']}`}>
                <img src="/img/icons/delete-contact.png" alt="trash"/>
            </button>
        </li>
    );
};

export default Contact;