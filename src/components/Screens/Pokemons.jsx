"use client";
import PoksContainer from "../Container/PoksContainer";
import PokemonCard from "../Cards/PokemonCard";

import { useEffect, useState } from "react";
import loader from "@/assets/others/loading.svg";

import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex flex-col gap-2 h-full items-center justify-center">
      <Image width={80} height={80} alt="pokemon" src={loader} />
      <h6 className="text-red-600 font-bold text-2xl">LOADING</h6>
    </div>
  );
};

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const promises = data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemonData) => {
              setPokemons((prev) => [...prev, pokemonData]);
            });
        });

        // Wait for all individual Pokemon requests to complete
        return Promise.all(promises);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="m-1 overflow-auto px-3 pt-5 rounded-lg bg-white h-[80vh]">
      {pokemons?.length === 0 ? <Loading /> : null}

      <PoksContainer>
        {pokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </PoksContainer>
    </div>
  );
}
