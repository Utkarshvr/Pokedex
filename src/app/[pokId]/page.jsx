"use client";

import PokLongCard from "@/components/Cards/PokLongCard";
import PokHeader from "@/components/Header/PokHeader";
import typeColors from "@/config/colors";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function PokemonPage() {
  const pokId = usePathname().split("/")[1];
  const [pokemon, setPokemon] = useState(null);
  const [color, setColor] = useState("");

  const fetchPoks = async () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokId}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // // console.log(data);
      setPokemon(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (pokId) fetchPoks();
  }, [pokId]);

  useEffect(() => {
    if (pokemon) {
      // Assuming pokemon.types is an array of types
      const firstType = pokemon?.types[0]?.type?.name; // Access the first type, safely

      // Find the color associated with the first type
      const colorForFirstType = typeColors[firstType] || "#A890F0";
      setColor(colorForFirstType);
    }
  }, [pokemon]);
  // 74CB48
  return (
    <main
      style={{ backgroundColor: color }}
      className={`flex flex-col justify-between w-full max-w-lg min-h-screen`}
    >
      {pokemon ? (
        <>
          <PokHeader color={color} pokemon={pokemon} />
          <PokLongCard color={color} pokemon={pokemon} />
        </>
      ) : null}
    </main>
  );
}
