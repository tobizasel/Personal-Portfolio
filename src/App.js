import './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegation from './components/header/Navegation';
import Section from './components/section/Section';
import SkillsCarousel from './components/skills/SkillsCarousel';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
        <Navegation/>
        <Section/>
        <SkillsCarousel/>
        <Projects/>
    </div>
  );
}

export default App;
