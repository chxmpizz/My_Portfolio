import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div >
      <div>
        <NavBar />
      </div>
      <div className="mt-20">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
