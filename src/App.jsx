import React, { Suspense, lazy } from "react";
import SplashCursor from "./components/SplashCursor";

const Nav = lazy(() => import("./components/Navbar/Nav"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Services = lazy(() => import("./components/Services/Services"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Footer = lazy(() => import("./components/Footer/Footer"));

const App = () => {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <SplashCursor />
      <main className="w-full overflow-hidden">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Footer />
      </main>

    </Suspense>
  );
};

export default App;
