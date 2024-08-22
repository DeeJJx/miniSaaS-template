'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  console.log('client session', session)
  return (
    <main>
      <h2>Dashboard</h2>
      <Link href='/' />
    </main>
    // <pre>{JSON.stringify(session)}</pre>
  )
}