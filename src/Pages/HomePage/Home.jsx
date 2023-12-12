import { FaCode } from "react-icons/fa";
const Home = () => {
   
    
    return (
        <div className="hero min-h-screen bg-[#1D2833]">
  <div className="hero-content flex-col lg:flex-row-reverse items-center">
    <div>
    <iframe className="w-[40rem] h-[40rem]" src="https://lottie.host/embed/c306ec8e-0747-4c4f-aff6-0a209c79bcea/6Vjko7kP83.json"></iframe>
    </div>
    <div className="text-white">
    <div className="flex items-center gap-3 text-[#7EBC12]">
    <FaCode />
        <p className="text-base font-bold">Introducing</p>
    </div>
      <h1 className="text-7xl font-bold">Hello<br/> I'm Imran Hossain!</h1>
      <p className="py-6 text-lg">Front-End developer. My favorite tracks are HTML5, CSS3, JavaScript, ES6, React.js and MongoDB. I base most of my work on them and enjoy using them. I'm MERN stack developer. I am very passionate about working with and using new web technologies.</p>
      <button className="btn btn-primary uppercase rounded">Contact me</button>
    </div>
  </div>
</div>
    );
};

export default Home;