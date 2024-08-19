import { testDatabaseConnection } from "../actions";
import Link from "next/link";

export default async function Home() {
  const isConnected = await testDatabaseConnection();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to your Card game dashboard</div>
    </main>
  );
}
