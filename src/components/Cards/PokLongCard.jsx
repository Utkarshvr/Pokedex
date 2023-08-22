import { motion } from "framer-motion";

import Image from "next/image";
import Chip from "../common/Chip";

import weightIcon from "@/assets/icons/weight.svg";
import StraightenIcon from "@/assets/icons/straighten.svg";
import BaseStatus from "../ui/BaseStatus";
import typeColors from "@/config/colors";
import ChevronLeft from "@/assets/icons/chevron_left.svg";
import ChevronRight from "@/assets/icons/chevron_right.svg";
import Link from "next/link";

export default function PokLongCard({ color, pokId, pokemon }) {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative scrollable-poks-container pt-16 overflow-visible h-[72vh]">
        {/* Next & Prev Button */}
        <div
          className={`absolute left-0 top-0 w-full flex p-4 items-center ${
            Number(pokId) !== 1 ? "justify-between" : "justify-end"
          } `}
        >
          {Number(pokId) !== 1 ? (
            <Link
              href={`/pokemons/${Number(pokId) - 1}`}
              className="icon hover:bg-[rgba(0,0,0,0.19)]"
            >
              <Image width={28} height={28} alt="pokemon" src={ChevronLeft} />
            </Link>
          ) : null}
          <Link
            href={`/pokemons/${Number(pokId) + 1}`}
            className="icon hover:bg-[rgba(0,0,0,0.19)]"
          >
            <Image width={28} height={28} alt="pokemon" src={ChevronRight} />
          </Link>
        </div>

        {/* Pokemon Image */}
        <div className="absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-70%]">
          <Image
            width={200}
            height={200}
            alt="pokemon"
            src={pokemon?.sprites?.other?.dream_world?.front_default}
          />
        </div>

        {/* Pokemon Details */}
        <div className="w-full h-full overflow-auto">
          {/* Abilities */}
          <div className="w-full flex items-center justify-center gap-8">
            {pokemon?.types?.map(({ type }) => (
              <Chip
                key={type.name}
                text={type.name.charAt(0).toUpperCase() + type.name.slice(1)}
                color={`${typeColors[type.name]}`}
              />
            ))}
          </div>
          {/* About */}
          <h2
            style={{ color }}
            className="flex justify-center my-3 mx-auto text-2xl font-bold"
          >
            About
          </h2>
          <div className="w-full grid grid-cols-3 gap-4">
            <div className="relative flex items-center flex-col pb-8 gap-3">
              <div className="flex gap-4 items-center justify-center">
                <Image width={28} height={28} alt="pokemon" src={weightIcon} />

                <p className="text-sm text-neutral-900">{pokemon.weight} Kg</p>
              </div>
              <p className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-10%] text-sm text-neutral-500">
                Weight
              </p>
            </div>

            <div className="relative flex items-center flex-col pb-8 gap-3">
              <div className="flex gap-4 items-center justify-center">
                <Image
                  width={28}
                  height={28}
                  alt="pokemon"
                  src={StraightenIcon}
                />

                <p className="text-sm text-neutral-900">{pokemon.height} m</p>
              </div>
              <p className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-10%] text-sm text-neutral-500">
                Height
              </p>
            </div>

            <div className="relative flex items-center flex-col pb-8 gap-3">
              <div>
                {pokemon.abilities.map(({ ability }) => (
                  <p
                    key={ability.name.slice(1)}
                    className="text-sm text-neutral-900"
                  >
                    {ability.name.charAt(0).toUpperCase() +
                      ability.name.slice(1)}
                  </p>
                ))}
              </div>
              <p className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-10%] text-sm text-neutral-500">
                Moves
              </p>
            </div>
          </div>

          {/* Short Desc */}
          {/* <h2 className="my-3 leading-6">
          There is a plant seed on its back right from the day Pokémon is born.
          The seed slowly grows larger.
        </h2> */}

          {/* Base Status */}
          <h2
            style={{ color }}
            className="flex justify-center my-3 mx-auto text-2xl font-bold"
          >
            Base Status
          </h2>
          <BaseStatus color={color} stats={pokemon.stats} />
        </div>
      </div>
    </motion.div>
  );
}
