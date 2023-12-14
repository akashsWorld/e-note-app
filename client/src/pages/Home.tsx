import Hero from "components/Hero";
import Navbar from "components/Navbar";
import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <header className="w-full bg-hero-pattern h-full bg-cover bg-no-repeat">
      <Navbar visible={true} />
      <Hero />
    </header>
  );
};

export default Home;
