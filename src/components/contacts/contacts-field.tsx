import React, {useState} from 'react';

import ContactsList from './contacts-list';
import AddForm from '../add-form/add-form';

import classes from '../../styles/contacts.module.css';
import uiClasses from '../../styles/ui.module.css';

const ContactsField: React.FC = () => {
    const [addForm, setAddForm] = useState(false);

    const openAddForm = () => {
        setAddForm(true);
    };

    const returnToContacts = () => {
        setAddForm(false);
    };

    return (
        <>
            {!addForm && 
            <>
                <ContactsList/>
                <div className={`${classes['add-contact']} ${uiClasses.middle}`}>
                    <button onClick={openAddForm}>
                        <img src="/img/icons/add-contact.png" alt="add-contact icon"/>
                    </button>
                </div>
            </>}
            {addForm && <AddForm returnHandler={returnToContacts}/>}
        </>
    );
};

export default ContactsField;