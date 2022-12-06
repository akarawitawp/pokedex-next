import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import PokedexLayout from "../components/PokedexLayout";
import PokemonCard from "../components/PokemonCard";
import { NextCustomPage } from "../types/next";
import pokemonInfo from "./pokedex/[pokedexid]";
import { Button } from "../components/Button";
import Link from "next/link";
const HomePage: NextCustomPage = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-2.5">
      <Link href="https://www.youtube.com/" target="_blank">
        <Button className="bg-red-400 text-white">Youtube</Button>
      </Link>
      <Link href="/pokedex">
        <Button className="bg-gray-200  ">Pokedex</Button>
      </Link>
    </div>
  );
};

export default HomePage;
