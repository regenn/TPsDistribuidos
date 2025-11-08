"use client";

import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactNode, useState} from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import PokemonList from './components/PokemonList'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({children}:{ children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body
        className="bg-[var(--background)] text-[var(--foreground)] min-h-scren flex flex-col items-center"
        //className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <header className="fixed top-0 left-0 w-full bg-red-600 text-white shadow-md py-4 z-10 flex justify-center">
            <h1 className="text-3xl font-bold tracking-wide">Pokedex</h1>
          </header>
          <main className="flex-grow flex items-center justify w-full pt-20 pb-10">
            <nav>
              <Link href="/" style={{color: "white", fontWeight: "bold", padding:"1rem"}}> Home </Link>
            </nav>
          </main>
            {children}
          <footer>
            <p>Pokedex. Practica de Sistemas Distribuidos.</p>
          </footer>
        </QueryClientProvider>
      </body>
    </html>
  );
}
