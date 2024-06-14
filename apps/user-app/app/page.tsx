"use client"

// import React from 'react';
import { PrismaClient } from "@repo/db/client";
import {useBalance} from "@repo/store/useBalance"

const client = new PrismaClient();
  

export default function Home() {
  const balance = useBalance();
  return (
    <div className="text-2xl font-bold">
      hello  
    </div>
  );
}
