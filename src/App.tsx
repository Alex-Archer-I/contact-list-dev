import React from 'react';

import {useAppSelector} from './store/index';

import Auth from './components/auth/auth';
import Header from './components/header/header';
import ContactsField from './components/contacts/contacts-field'; 

function App() {
  const isLogin = useAppSelector(state => state.auth.isLogged);

  return (
    <>
      <Header/>
      {!isLogin && <Auth/>}
      {isLogin && <ContactsField/>}
    </>
  );
}

export default App;
