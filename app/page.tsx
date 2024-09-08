"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FindGame from './components/FindGame';


export default function Home(){

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <FindGame />
    </main>
  );
}
