import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

export default function PokemonCard({ pokemon }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/pokemons/${pokemon?.id}`} className="pok-card">
        <div className="flex justify-end py-1 px-2">
          <p className="text-neutral-500 font-medium">
            {"#"}
            {pokemon?.id < 100 && pokemon?.id >= 10
              ? `0${pokemon.id}`
              : pokemon?.id < 100 && pokemon?.id < 10
              ? `00${pokemon.id}`
              : pokemon.id}
          </p>
        </div>
        <div className="pok-detials">
          <div className="pok-img">
            <Image
              width={80}
              height={60}
              alt="pokemon"
              src={pokemon?.sprites?.other?.dream_world?.front_default}
            />
          </div>
          <p className="text-neutral-950 font-semibold">{pokemon?.name}</p>
        </div>
      </Link>
    </motion.div>
  );
}
