import './styles/global.css'
import Header from './components/header';
import Banner from './components/banner';
import AboutMe from './components/about-me';
import Projects from './components/projects';
import Experiences from './components/experiences';
import Skills from './components/skills';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <AboutMe />
      <Experiences />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
