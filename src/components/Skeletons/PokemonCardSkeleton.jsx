export default function PokemonCardSkeleton() {
  return (
    <div className="animate-pulse pok-card">
      <div className="flex justify-end py-1 px-2">
        <div className="bg-neutral-600 h-2 w-12"></div>
      </div>
      <div className="pok-detials">
        <div className="pok-img">
          <div className="absolute left-[50%] bottom-0 translate-x-[-50%] translate-y-[-30%] rounded-full bg-neutral-600 h-[60px] w-[60px]"></div>
          <div className="bg-neutral-800 rounded w-22 h-5"></div>
        </div>
      </div>
    </div>
  );
}
