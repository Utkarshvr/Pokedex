"use client";
import PoksContainer from "../Container/PoksContainer";
import PokemonCard from "../Cards/PokemonCard";

import { useEffect, useState } from "react";

import InfiniteScroll from "react-infinite-scroller";
import Loading from "./Loading";

export default function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  // console.log({ pokemons, page, hasMore });

  const fetchPoks = async () => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/?offset=${
      page * 20
    }&limit=20`;
    // console.log(apiUrl);

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const promises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((response) => response.json())
      );

      const pokemonData = await Promise.all(promises);

      setPokemons((prev) =>
        [...prev, ...pokemonData].sort((a, b) => a.id - b.id)
      );

      setPage((prev) => prev + 1);

      // Check if there's a "next" URL in the response
      const hasNextPage = Boolean(data.next);

      // Only set hasMore to true if there's a next page
      setHasMore(hasNextPage);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // console.log("effect wala fetcher");
    fetchPoks();
  }, []);

  const loadMore = () => {
    // console.log("FETCHING POKS");
    fetchPoks();
  };

  return (
    <div className="scrollable-poks-container">
      <InfiniteScroll
        className="h-full"
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Loading small inContainer />}
        useWindow={false}
      >
        {pokemons?.length === 0 ? <Loading inContainer /> : null}
        <PoksContainer>
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </PoksContainer>
      </InfiniteScroll>
    </div>
  );
}
