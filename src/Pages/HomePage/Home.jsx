import About from "../AboutPage/About";
import Contact from "../ContactPage/Contact";
import MyExperience from "../MyExperiencePage/MyExperience";
import MySkill from "../MySkillPage/MySkill";
import Projects from "../ProjectPage/Projects";
import Banner from "./Banner";

const Home = () => {
  return (
    
  <div>
    <Banner></Banner>
    <About></About>
    <MySkill></MySkill>
    <MyExperience></MyExperience>
    <Projects></Projects>
    <Contact></Contact>
  </div>
  );
};

export default Home;
