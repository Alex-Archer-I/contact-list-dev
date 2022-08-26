import React, {useEffect} from 'react';

import {useAppSelector, useAppDispatch, contactsActions} from '../../store/index';

import Contact from './contact';
import SearchPanel from './search-panel';

import classes from '../../styles/contacts.module.css';
import uiClasses from '../../styles/ui.module.css';

const ContactsList: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        fetch('/contacts').then(data => data.json()).then(data => dispatch(contactsActions.createContacts(data)));
    }, []);

    const contacts = useAppSelector(state => state.contacts.contacts);
    const isSearched = useAppSelector(state => state.contacts.isSearch);
    const filteredContacts = useAppSelector(state => state.contacts.filteredContacts);

    let currentContacts;

    if (isSearched) {
        currentContacts = filteredContacts.map(contact => {
            return <Contact 
                        name={contact.name}
                        surname={contact.surname}
                        email={contact.email}
                        id={contact.id}
                        img={contact.img}
                        key={contact.id} />
        });
    } else {
        currentContacts = contacts.map(contact => {
            return <Contact 
                        name={contact.name}
                        surname={contact.surname}
                        email={contact.email}
                        id={contact.id}
                        img={contact.img}
                        key={contact.id} />
        });
    };

    return (
        <ul className={`${classes['contact-list']} ${uiClasses.middle} ${uiClasses.card}`}>
            <SearchPanel/>
            {currentContacts}
        </ul>
    );
};

export default ContactsList;