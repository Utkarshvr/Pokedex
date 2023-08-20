"use client";
import PoksContainer from "../Container/PoksContainer";
import PokemonCard from "../Cards/PokemonCard";

import { useEffect, useState } from "react";
import loader from "@/assets/others/loading.svg";

import Image from "next/image";
import InfiniteScroll from "react-infinite-scroller";

const Loading = ({ small }) => {
  return (
    <div
      className={`flex flex-col w-full gap-2  ${
        small ? "" : "h-full"
      } items-center justify-center`}
    >
      <Image
        width={small ? 40 : 80}
        height={small ? 40 : 80}
        alt="pokemon"
        src={loader}
      />
      <h6
        className={`text-red-600 font-bold ${small ? "text-lg" : "text-2xl"}`}
      >
        LOADING
      </h6>
    </div>
  );
};

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
        loader={<Loading small />}
        useWindow={false}
      >
        {pokemons?.length === 0 ? <Loading /> : null}
        <PoksContainer>
          {pokemons?.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </PoksContainer>
      </InfiniteScroll>
    </div>
  );
}
