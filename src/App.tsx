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


/*
<a href="https://www.flaticon.com/free-icons/scientist" title="scientist icons">Scientist icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/boy" title="boy icons">Boy icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/cool" title="cool icons">Cool icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/woman" title="woman icons">Woman icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/girl" title="girl icons">Girl icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/artist" title="artist icons">Artist icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/skater" title="skater icons">Skater icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/flower" title="flower icons">Flower icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/man" title="man icons">Man icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/halloween" title="halloween icons">Halloween icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/king" title="king icons">King icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/followers" title="followers icons">Followers icons created by SBTS2018 - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/remove" title="remove icons">Remove icons created by Phoenix Group - Flaticon</a> 
 */