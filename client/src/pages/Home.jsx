import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Service from "../components/home/Services";
import Reviews from "../components/home/Reviews";
import StylistsTeam from "../components/home/StylistsTeam";
import ProductsPage from "./Products";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />

        <section className="py-16 px-4">
          <Service />
        </section>

        <section className="bg-gray-50 py-16">
          <ProductsPage />
        </section>

        <section className="py-16">
          <Reviews/>
        </section>

        <section className="py-16 bg-blue-50">
          <StylistsTeam />
        </section>
      </main>
    </div>
  );
};

export default Home;
