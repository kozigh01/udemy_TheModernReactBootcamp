import React from 'react';
import './Pokecard.css';

export default class Pokecard extends React.Component {
  render() {
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.props.id.toString().padStart(3,'0')}.png`

    return (
      <div className="Pokecard">
        <h1 style={{ textAlign: "center"}}>{this.props.name}</h1>
        <div style={{ textAlign: "center"}}>
          <img src={url} alt={this.props.name}/>
        </div>
        <div style={{ textAlign: "center"}}>{this.props.type}</div>
      </div>
    );
  }
}