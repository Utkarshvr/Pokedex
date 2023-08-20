export default function Chip({ text, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`px-2 py-1 flex items-center justify-center text-white font-bold rounded-2xl }`}
    >
      {text}
    </div>
  );
}
