"use client"; // Add this at the top of the file
import Link from "next/link";
import { useState } from 'react';
import cardGames, { CardGame } from "@/data/cardGames";

export default function Games() {
  const [cardState, setCardState] = useState<CardGame[]>(cardGames);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 gap-6 w-full lg:w-1/2">
        {cardState.map((card, index) => (
          <Link key={index} href={`games/${card.name.toLowerCase()}`} passHref>
            <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105 cursor-pointer">
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-primary">{card.name}</h2>
                <p className="text-lg text-secondary">Recommended Players: {card.recommendedPlayers[0]} 
                  {card.recommendedPlayers.length > 1 ? `- ${card.recommendedPlayers[card.recommendedPlayers.length -1]}` : ''} 
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
