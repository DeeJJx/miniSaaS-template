"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FindGame from "./components/FindGame";
import cardGames from "@/data/cardGames";
import FeaturedGames from "./components/FeaturedGames";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="hero bg-base-200 min-h-screen p-4">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Discover Fun Card Games for Any Number of Players
            </h1>
            <p className="py-6">
              Whether you're hosting a game night with friends or just looking
              for a quick game with a deck of cards, we have a variety of card
              games suited for any number of players. Input the number of
              players, and we'll suggest a random game for you to enjoy!
              These games are all suited to a standard 52-card deck.
            </p>
          </div>
        </div>
      </div>
      <FindGame />
      <section className="text-center p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Popular Card Games</h2>
        <p className="max-w-lg mb-10">
          Check out some of the most popular card games that you can play with
          your friends and family. These games are perfect for any occasion,
          whether you're playing with 2 or 10 players.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <FeaturedGames cardGames={cardGames} />
        </div>
      </section>
    </main>
  );
}
