export default function Main({ children }) {
  return (
    <div className="flex bg-neutral-950 bg-cover min-h-screen flex-col items-center justify-between">
      {children}
    </div>
  );
}
