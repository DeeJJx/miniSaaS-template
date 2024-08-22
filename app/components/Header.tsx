"use client"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function Header(){
    const { status } = useSession();
    const router = useRouter();

    const showSession = () => {
    if(status === "authenticated"){
      return (
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-center"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            })
          }}
          >
            Sign Out
        </button>
      )
    } else if (status === "loading"){
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Link
          href="/login"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-center"
        >
          Sign In
        </Link>
      )
    }  
  }

    return (
            <header className="bg-white shadow-md">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left Section: Logo */}
                <div className="flex items-center space-x-2 w-48">
                  {/* <img src= "/logo.png" alt="Logo" className="h-8 w-8" /> */}
                  <span className="font-bold text-xl text-gray-800">MyApp</span>
                </div>
        
                {/* Center Section: Title */}
                <div className="flex-grow text-center">
                  <Link href="/" className="text-2xl font-semibold text-gray-800">CardMaster</Link>
                </div>
        
                {/* Right Section: Signup/Login */}
                <div className="flex space-x-4 w-48">
                    {showSession()}
                  {status === "authenticated" ? '' : 
                    <Link className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 text-center" href="/register">
                        Sign Up
                    </Link>
                    }
                </div>
              </div>
            </header>
          );
}