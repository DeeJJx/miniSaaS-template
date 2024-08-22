'use client'
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  console.log('client session', session)
  return (
    <pre>{JSON.stringify(session)}</pre>
  )
}