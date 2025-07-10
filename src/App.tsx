import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experiences from "./pages/Experiences";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div >
      <div>
        <NavBar />
      </div>
      <div className="mt-20 overflow-hidden">
        <Home />
        <Experiences/>
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
