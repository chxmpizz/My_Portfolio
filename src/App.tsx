import NavBar from './components/Nav';
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css';

const App = () => {
  return (
    <div>
      <NavBar/>
      <div>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App