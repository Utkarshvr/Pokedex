import Image from "next/image";

import pokeballSvg from "@/assets/icons/pokeball.svg";
import AppNameLogo from "@/assets/icons/logo-text.svg";
import Filters from "../Filters/Filters";

export default function Navbar() {
  return (
    <div className="p-3 h-[18vh] flex flex-col gap-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Image width={28} height={28} alt="logo" src={pokeballSvg} />
        <Image width={120} height={80} alt="logo-text" src={AppNameLogo} />
      </div>
      {/* Search & Sort-Dropdown */}
      <Filters />
    </div>
  );
}
