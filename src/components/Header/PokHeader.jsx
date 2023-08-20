import arrowBackIcon from "@/assets/icons/arrow_back.svg";
import Image from "next/image";

import Link from "next/link";

export default function PokHeader({ pokemon }) {
  return (
    <div className="py-6 px-4 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <Link href={"/"} className="icon">
          <Image width={28} height={28} alt="pokemon" src={arrowBackIcon} />
        </Link>
        <h1 className="text-white text-xl font-bold">
          {pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
        </h1>
      </div>
      <p className="text-white text-base font-medium">
        {"#"}
        {pokemon?.id < 100 && pokemon?.id > 10
          ? `0${pokemon.id}`
          : pokemon?.id < 100 && pokemon?.id < 10
          ? `00${pokemon.id}`
          : pokemon.id}
      </p>
    </div>
  );
}
