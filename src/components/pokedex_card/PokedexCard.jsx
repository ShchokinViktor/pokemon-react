import React from "react";

import { addAdditionalClass } from "../../utils/addAdditionalClass.js";
import PikachuPlaceholder from "../../assets/images/pikachu-placeholder.png";

const PokedexCard = ({ className = "", pokemon }) => {
  return (
    <div className={addAdditionalClass(className, "pokedex-card")}>
      <div className='pokedex-card__card-img'>
        <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
        {/* <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} /> */}
      </div>
      <div className='pokedex-card__card-number'>№{pokemon.id}</div>
      <div className='pokedex-card__card-name'>{pokemon.name}</div>
      <ul className='pokedex-card__types-list'>
        {pokemon.types.map((item, i) => {
          return (
            <li key={i} className='pokedex-card__type-item'>
              <div className='pokedex-card__type'>{item.type.name}</div>
            </li>
          );
        })}
        {/* <li className='pokedex-card__type-item'>
          <div className='pokedex-card__type'>Lightning</div>
        </li>
        <li className='pokedex-card__type-item'>
          <div className='pokedex-card__type'>Grass</div>
        </li> */}
      </ul>
    </div>
  );
};

export default PokedexCard;
