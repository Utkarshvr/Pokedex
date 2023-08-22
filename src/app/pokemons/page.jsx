import Navbar from "@/components/Navbar/Navbar";
import Pokemons from "@/components/Screens/Pokemons";

export default function Home() {
  return (
    <main className="overflow-hidden w-full bg-red-600 max-w-lg min-h-screen">
      <Navbar />
      <Pokemons />
    </main>
  );
}
