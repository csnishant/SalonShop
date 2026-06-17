import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TestimonialSlider from "../components/home/TestimonialSlider";

import AboutSection from "../components/home/AboutSection";
import TreatmentGrid from "../components/home/TreatmentGrid";
import DoctorTeam from "../components/home/DoctorTeam";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
   

      <main>
        <Hero />

        <section className="py-16 px-4">
          <AboutSection />
        </section>

        <section className="bg-gray-50 py-16">
          <TreatmentGrid />
        </section>

        <section className="py-16">
          <TestimonialSlider />
        </section>

        <section className="py-16 bg-blue-50">
          <DoctorTeam />
        </section>
      </main>
    </div>
  );
};

export default Home;
