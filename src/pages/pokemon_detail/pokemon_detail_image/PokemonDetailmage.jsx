import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import checkZero from '../../../utils/chekZero';
import { pokemonsLimit } from '../../../utils/getAllPokemons';
import { definePokemonSprite } from '../../../utils/definePokemonSprite';
import ThreeDButton from '../../../components/buttons/three_d_button/ThreeDButton';
import { leftSlideAnim } from '../../../utils/framerMotionAnims';

const PokemonDetailmage = ({ pokemonData, loading }) => {
  const navigate = useNavigate();

  const onNextPokemon = () => {
    navigate(pokemonData.id === pokemonsLimit ? `/pokemon/${1}` : `/pokemon/${pokemonData.id + 1}`);
  };

  const onPrevPokemon = () => {
    navigate(pokemonData.id === 1 ? `/pokemon/${pokemonsLimit}` : `/pokemon/${pokemonData.id - 1}`);
  };

  return (
    <div className='pokemon-detail-img'>
      <div className='pokemon-detail-img__pokemon-id'>{checkZero(pokemonData.id)}</div>
      <motion.div
        custom={1.5}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={leftSlideAnim}
        className='pokemon-detail-img__img-holder'>
        {definePokemonSprite(pokemonData, false)}
      </motion.div>
      <div className='pokemon-return'></div>

      <div className='pokemon-detail-img__btns'>
        <ThreeDButton
          buttonText='PREV'
          className='pokemon-detail-img__btn'
          onClick={onPrevPokemon}
          disabled={loading}
        />

        <ThreeDButton
          buttonText='NEXT'
          className='pokemon-detail-img__btn'
          onClick={onNextPokemon}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default PokemonDetailmage;
