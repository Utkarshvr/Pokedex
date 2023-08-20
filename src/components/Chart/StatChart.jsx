export default function StatChart({ base_stat, color }) {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-neutral-400 h-1">
      <div
        style={{
          width: `${base_stat}%`,
          backgroundColor: color,
          height: "100%",
        }}
      />
    </div>
  );
}
