import React from 'react';
import Pokecard from './Pokecard';


export default class Pokedex extends React.Component {
  render() {
    return (
      <div>
        <Pokecard id={1} name="PM1" type="fire" exp={330} />
       </div>
    );
  }
}