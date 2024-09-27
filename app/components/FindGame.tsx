"use client"
import { useEffect, useState } from 'react';
import cardGames, { CardGame } from "@/data/cardGames";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import Image from "next/image";
import starOutline from '../../public/star-outline.svg'
import starSolid from '../../public/star-solid.svg'



export default function FindGame() {
    const [playerCount, setPlayerCount] = useState<number | null>(null);
    const [filteredGames, setFilteredGames] = useState<CardGame[]>([]);
    const [currentGame, setCurrentGame] = useState<CardGame | null>(null);
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    // const isConnected = testDatabaseConnection();
    const [userFavourites, setUserFavourites] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const { data: session, status } = useSession()

    useEffect(() => {
      const fetchFavourites = async (email: string) => {
        try {
          const response = await fetch(`/api/favourites/get?email=${email}`);
          const data = await response.json();

          if(response.ok){
            setUserFavourites(data.favourites); // Set the response data
          } else {
            console.error('Error:', data.message);
          }
          // console.log(userFavourites)
        } catch (error) {
          console.error('Error fetching user favourites:', error);
        } finally {
          setLoading(false);
        }
      };
  
      if (status === "authenticated" && session.user?.email) {
        fetchFavourites(session.user.email as string);
      }

    }, [status])

    // useEffect(() => {
    //   console.log(userFavourites, 'userFavs')
    // }, [userFavourites])
  
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
  
    const addFavouriteHandler = async (gameName: string, email: string | null | undefined) => {
      if(userFavourites.includes(gameName)){
        console.log('user favs already has game, return here')
        return;
      }

      try {
        const response = await fetch('/api/favourites/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ favourite: gameName, email: email})
        });

        const data = await response.json();

        if(response.ok){
          console.log(`Added ${gameName} to favourites`, data)
          setUserFavourites(userFavourites => [...userFavourites, gameName])
        } else {
          console.error('Error adding favourite:', data.message);
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const rmvFavouriteHandler = async (gameName: string, email: string | null | undefined) => {
      console.log(gameName, 'gameName');
      console.log(userFavourites, 'userFavs')
      const isInFavourites = (gameName: string, userFavourites: string[]): boolean => {
        return userFavourites.some(game => game === gameName);
      }

      const isFavourite = isInFavourites(gameName, userFavourites)

      console.log(isFavourite, 'isFavourtie')

      if(!isFavourite){
        console.log('not in favs do nothing')
        return;
      }

      try {
        const response = await fetch('/api/favourites/rmv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ favourite: gameName, email: email})
        });

        const data = await response.json();

        if(response.ok){
          console.log(`Removed ${gameName} from favourites`, data)
          setUserFavourites(userFavourites => userFavourites.filter(game => game !== gameName));
        } else {
          console.error('Error removing favourite:', data.message);
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }
  
    return (
      <div className="flex min-h-screen flex-col items-center justify-start p-12 w-full">
  
        <div className='mb-4'>
          {/* <label className='block text-lg font-bold mb-2'>Select Number of Players:</label> */}
          <div className="text-center text-4xl font-bold mb-8 max-w-prose"><h1>Enter Your Number of Players:</h1></div>

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
                  <div className="card bg-base-100 shadow-xl max-w-96 mb-4">
                    <div className="card-body">
                      <div className='card-title justify-between'>
                        <h2 className="card-title text-2xl font-bold text-primary">{currentGame.name}</h2>
                        <div className='card-actions'>
                        {userFavourites.includes(currentGame.name) ?
                          <button onClick={(e) => {
                            e.preventDefault();
                            if(status !== "authenticated"){
                              return;
                            }
                            rmvFavouriteHandler(currentGame.name, session.user?.email)
                          }} className='rmvFavourite btn btn-secondary'> 
                          <Image
                            src={starSolid}
                            priority
                            alt="Favourited" 
                            />
                          </button>
                        :
                          <button onClick={(e) => {
                            e.preventDefault();
                            if(status !== "authenticated"){
                              return;
                            }
                            addFavouriteHandler(currentGame.name, session.user?.email)
                            }
                          } className='addFavourite btn btn-secondary z-10'>
                          <Image
                            src={starOutline}
                            priority
                            alt="Favourited" 
                            />
                          </button>
                        }                        
                      </div>
                      </div>
                      <p className="text-lg text-secondary">Recommended Players:</p>
                      <p className="text-lg text-secondary">
                        {currentGame.recommendedPlayers[0]} 
                        {currentGame.recommendedPlayers.length > 1 ? `- ${currentGame.recommendedPlayers[currentGame.recommendedPlayers.length -1]}` : ''} 
                      </p>
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