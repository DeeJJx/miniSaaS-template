"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CardGame } from '@/data/cardGames';

interface FeaturedGamesProps {
  cardGames: CardGame[];
}

const FeaturedGames: React.FC<FeaturedGamesProps> = ({ cardGames }) => {
  const [randomGames, setRandomGames] = useState<CardGame[]>([]);

  useEffect(() => {
    const shuffledGames = [...cardGames].sort(() => Math.random() - 0.5).slice(0, 3);
    setRandomGames(shuffledGames);
  }, [cardGames]);

  return (
    <>
      {randomGames.map((game, index) => (
        <Link className='link link-hover' href={`/games/${game.name}`} key={index}>
          {game.name}
        </Link>
      ))}
    </>
  );
};

export default FeaturedGames;