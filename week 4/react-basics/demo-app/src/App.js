import React from 'react';
import logo from './logo.svg';
import './App.scss';
import CharacterDetailsComponent from './pages/character-details/CharacterDetails';

function App() {
  let character = {
    name: 'Luke Skywalker',
    imageUrl: 'https://starwars.fandom.com/es/wiki/Luke_Skywalker/Leyendas?file=Luke-rotjpromo.jpg',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    id: 1,
    strength: 5,
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z'
  };
  return (
    <CharacterDetailsComponent character={character}></CharacterDetailsComponent>
  );
}

export default App;
