import StatChart from "../Chart/StatChart";

export default function BaseStatus({ color, stats }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-1">
        {["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"].map((statName) => (
          <p style={{ color }} className="text-sm font-bold" key={statName}>
            {statName}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div className="w-0.5 h-[140px] bg-neutral-400" />

      <div className="flex flex-col w-full gap-1">
        {stats?.map(({ base_stat }) => (
          <div className="flex items-center gap-2">
            <h6
              key={base_stat?.stat?.name}
              className="text-neutral-900 text-sm font-medium"
            >
              {base_stat < 100 ? `0${base_stat}` : base_stat}
            </h6>
            <StatChart color={color} base_stat={base_stat} />
          </div>
        ))}
      </div>
    </div>
  );
}
