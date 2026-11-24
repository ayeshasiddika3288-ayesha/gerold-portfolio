import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Services from "./sections/Services";
import Works from "./sections/Works";
import MarqueeBand from "./sections/MarqueeBand";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-purple-800"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Skills />
        <About />
        <Services />
        <Works />
        <MarqueeBand />
        <Experience />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
