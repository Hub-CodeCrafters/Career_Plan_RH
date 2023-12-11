import React from 'react';
import Admin from './pages/admin';
import User from './pages/user';

import './App.css'
import GlobalProvider from './state/global';
function App() {
  return (
    <GlobalProvider>
      <Admin />
    </GlobalProvider>
    
    //  <User/> 
  )
}

export default App;