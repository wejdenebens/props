import React from 'react';
import './App.css';
import Profile from './profile/profile';


function App() {

  const handleName = (name) => {
   alert(name)
  };

  const personne = {
    fullName:'wejdenne', 
    bio:'hello', 
    profession: 'web developer'

  }
  return (
    <>
<Profile handleName={handleName} personne={personne}><img src={} /> </Profile>
    </>
  );
}

export default App;
