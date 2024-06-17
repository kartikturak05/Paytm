
"use client"
import { useRouter } from "next/navigation";
import React from 'react';

const HomePage = () => {
const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="bg-blue-600 w-full py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-white text-3xl font-bold">Paytm Wallet</h1>
        </div>
      </header>
      <main className="flex flex-col items-center mt-10">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Paytm Wallet</h2>
        <p className="text-gray-600 mb-8">Your digital wallet for easy money transfer</p>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300" onClick={()=>{
            router.push("/api/auth/signin")
          }}>
            Sign Up
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-300" onClick={()=>{
            router.push("/api/auth/signin")
          }}>
            Sign In
          </button>
        </div>
      </main>
      <footer className="bg-gray-800 w-full py-4 mt-10">
        <div className="container mx-auto text-center text-white">
          &copy; {new Date().getFullYear()} Paytm Wallet. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
