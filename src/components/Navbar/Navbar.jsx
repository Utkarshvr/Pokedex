"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import pokeballSvg from "@/assets/icons/pokeball.svg";
import AppNameLogo from "@/assets/icons/logo-text.svg";
import Filters from "../Filters/Filters";

export default function Navbar() {
  return (
    <div className="p-3 h-[18vh] flex flex-col gap-5">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1 }}
        >
          <Image width={28} height={28} alt="logo" src={pokeballSvg} />
        </motion.div>
        <Image width={120} height={80} alt="logo-text" src={AppNameLogo} />
      </Link>
      {/* Search & Sort-Dropdown */}
      <Filters />
    </div>
  );
}
