'use client'

import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';
import React from 'react';

export default function Home() {

  return (
    <section>
      <Navbar/>
      <PokemonCard />
    </section>
  )
}
