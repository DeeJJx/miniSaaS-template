"use client"
import Link from "next/link"

export default function Header(){

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
                  <Link href="/login">
                    <span className="text-gray-800 hover:text-gray-600">Login</span>
                  </Link>
                  <Link href="/register">
                    <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Sign Up
                    </span>
                  </Link>
                </div>
              </div>
            </header>
          );
}