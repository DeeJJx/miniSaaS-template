"use client"
import { useState } from 'react';
import cardGames, { CardGame } from "@/data/cardGames";
import Link from "next/link";

export default function FindGame() {
    const [playerCount, setPlayerCount] = useState<number | null>(null);
    const [filteredGames, setFilteredGames] = useState<CardGame[]>([]);
    const [currentGame, setCurrentGame] = useState<CardGame | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    // const isConnected = testDatabaseConnection();
  
    const filterGames = (count: number) => {
      const games = cardGames.filter((game) => game.recommendedPlayers.includes(count));
      setFilteredGames(games);
      setCurrentGame(games[Math.floor(Math.random() * games.length)] || null);
      setHasSearched(true);
    }
  
    const handleNextGame = () => {
      if(filteredGames.length > 0){
        let nextIndex = filteredGames.indexOf(currentGame || filteredGames[0]) + 1;
  
        if(nextIndex >= filteredGames.length){
          nextIndex = 0;
        }
  
        setCurrentGame(filteredGames[nextIndex]);
      }
    }
  
    const incrementPlayerCount = () => setPlayerCount((prev) => (prev ? prev + 1 : 2));
    const decrementPlayerCount = () => setPlayerCount((prev) => (prev && prev > 1 ? prev - 1 : 1));
  
  
    return (
      <div className="flex min-h-screen flex-col items-center justify-start p-12 bg-neutral text-neutral-content w-full">
  
        <div className='mb-4'>
          {/* <label className='block text-lg font-bold mb-2'>Select Number of Players:</label> */}
          <div className="text-center text-4xl font-bold mb-8">Number of Players:</div>

          <div className='flex items-center w-full justify-center'>
            <button onClick={decrementPlayerCount} className="btn btn-outline btn-primary">-</button>
  
            <input
              type='number'
              value={playerCount || ""}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className='input input-bordered input-primary mx-2 w-16 text-black'
            />
  
            <button onClick={incrementPlayerCount} className="btn btn-outline btn-primary">+</button>
          </div>
  
          <button
            onClick={() => playerCount && filterGames(playerCount)}
            className='btn btn-primary mt-4 w-full'
          >
            Find a Game
          </button>
        </div>
  
        {hasSearched && filteredGames.length === 0 ? (
          <div className="text-lg text-red-500">
            Sorry, we don't have a game for that number of players.
          </div>
          ) : (
            <>
              {currentGame && (
                <Link href={`games/${currentGame.name.toLowerCase()}`} passHref>
                  <div className="card bg-base-100 shadow-xl w-full mb-4">
                    <div className="card-body">
                      <h2 className="card-title text-2xl font-bold text-primary">{currentGame.name}</h2>
                      <p className="text-lg text-secondary">Recommended Players: {currentGame.recommendedPlayers.join(", ")}</p>
                    </div>
                  </div>
                </Link>
              )}
  
              {currentGame && filteredGames.length > 1 && (
                <button onClick={handleNextGame} className="btn btn-secondary mt-4">
                  Next Game
                </button>
              )}
            </>
        )}
  
      </div>
    );
}