import React, {useRef} from 'react';

import {useAppDispatch, contactsActions} from '../../store/index';

import uiClasses from '../../styles/ui.module.css';

const SearchPanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const searchRef = useRef<HTMLInputElement>(null);

    const onSearch = () => {
        if(searchRef.current?.value.trim() === '') {
            dispatch(contactsActions.stopSearching());
            return;
        };

        dispatch(contactsActions.searchContacts(searchRef.current?.value));
    };

    return(
        <div className={`${uiClasses['input-field']}`}>
            <label htmlFor="search">Поиск</label>
            <input type="text" id="search" ref={searchRef} onChange={onSearch}/>
        </div>
    );
};

export default SearchPanel;