"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FindGame from './components/FindGame';


export default function Home(){

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
       <h1 className="text-4xl font-bold text-center mt-2 mb-6">Discover Fun Card Games for Any Number of Players</h1>
        <p className="text-center max-w-prose mt-2 mb-6">
          Whether you're hosting a game night with friends or just looking for a quick game with a deck of cards, 
          we have a variety of card games suited for any number of players. Input the number of players, and we'll 
          suggest a random game for you to enjoy!
        </p>
      <FindGame />
    </main>
  );
}
