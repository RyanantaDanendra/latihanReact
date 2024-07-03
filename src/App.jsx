import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar";
import Carousel from "./components/carousel";
import Hero from "./components/Hero";
import LearningProps from './components/learningProps';
import Land from "./assets/land.png";
import Mountain from "./assets/mountain.png";
import Waterfall from "./assets/waterfall.png";
import LearningHook from './components/LearningHook';
import ArrayState from './components/ArrayState';

function App() {
  const cards = [
    {id: 1, name: "Land", image: Land},
    {id: 2, name: "Mountain", image: Mountain},
    {id: 3, name: "Waterfall", image: Waterfall}
  ];

  return (
    <>
      <header>
        <Navbar/>
      </header>
      <Hero />
      <LearningProps items={cards}/>
      <LearningHook />
      <ArrayState />
    </>
  );
}

export default App
