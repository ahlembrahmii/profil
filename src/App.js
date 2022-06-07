import React from 'react';
import './App.css';
import ProfilePhoto from './component/profil/ProfilePhoto';
import FullName from './component/profil/FullName';
import Address from './component/profil/Address';
function App() {
  return (
    <div className="App">
      <h1>Welcome To MyProfile</h1>
         <ProfilePhoto />
         <FullName />
         <Address />
      

    </div>
  );
}

export default App;
