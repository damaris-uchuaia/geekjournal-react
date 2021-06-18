
import React from 'react';
import BannerImage from './components/BannerImage'; //importamos banner criado dentro da pasta components
/* import PhotoEntry from './components/PhotoEntry';  */
import AlbumMaker from './components/AlbumMaker';  
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BannerImage />                                 {/* chamamos ele pra tela  */}
        <div>
          <h1>Welcome to my Geekjournal</h1>
          <h3>Damaris Uchuaia Mori</h3>

          <AlbumMaker />

          {/* <PhotoEntry src='mario.jpg' location='Location' caption='Caption'/> */}
        </div>
       
      </header>
    </div>
  );
}

export default App;
