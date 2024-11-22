import Application from "./components/Application";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Increase from "./components/Increase";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Increase />
      <Application />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
