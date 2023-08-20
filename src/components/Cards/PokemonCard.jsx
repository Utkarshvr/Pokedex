import Image from "next/image";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="pok-card">
      <div className="flex justify-end py-1 px-2">
        <p className="text-neutral-500 font-medium">
          {"#"}
          {pokemon?.id}
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
    </div>
  );
}
