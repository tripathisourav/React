import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './components/Card'

const App = () => {

  // let arr = [1, 2, 3, 4, 5]
  // let ans = arr.map((e,idx) => {
  //   return e
  // })
  // console.log(typeof(ans))  // object


  const [pokemon, setPokemon] = useState([])

  const [isHovered, setIsHovered] = useState(false);

  const API = "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();

        // console.log(data);

        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemon(detailedResponses);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchPokemon()
  }, [])

  // base exp, height, name, weight, img, types

  return (
    <div className='min-h-screen w-full flex flex-wrap justify-center gap-25 p-10 pb-20 bg-black bg-'>
      {pokemon.map((el, idx) => {
        let gradient;
        let color;

        if (idx < 3) {
          gradient = "from-emerald-400 via-green-300 to-emerald-700";
          color = 'green';
        } else if (idx < 6) {
          gradient = "from-red-500 via-rose-300 to-red-800";
          color = 'red';
        } else {
          gradient = "from-blue-500 via-sky-300 to-blue-800";
          color = '';
        }

        return (
          <Card key={idx} el={el} gradient={gradient} color={color} />
        );
      })}
    </div>
  )
}

export default App
