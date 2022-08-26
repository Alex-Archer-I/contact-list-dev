import {configureStore, createSlice} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';

import {ContactType} from '../models/contact';

const contacts: ContactType[] = [];
const filteredContacts: ContactType[] = [];

const authSlice = createSlice({
    name: 'auth',
    initialState: {isLogged: false},
    reducers: {
        logIn(state) {
            state.isLogged = true;
        },
        logOut(state) {
            state.isLogged = false;
        },
    },
});

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts: contacts, isSearch: false, filteredContacts: filteredContacts},
    reducers: {
        createContacts(state, action) {
            console.log(action.payload);
            state.contacts = action.payload;
        },
        searchContacts(state, action) {
            const regex = new RegExp(`${action.payload}`, 'i');
            const contactsList = [...state.contacts];

            const filteredContacts = contactsList.filter(contact => {
                return regex.test(`${contact.name}${contact.surname}`);
            });

            state.isSearch = true;
            state.filteredContacts = filteredContacts;
        },
        stopSearching(state) {
            state.isSearch = false;
        },
    },
});

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        contacts: contactsSlice.reducer,
    },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const authActions = authSlice.actions;
export const contactsActions = contactsSlice.actions;

export default store;