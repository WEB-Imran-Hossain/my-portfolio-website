import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
import { useTypewriter} from "react-simple-typewriter";

import about1 from '../../assets/images/Web Imran.jpg'
import { FaUser } from "react-icons/fa";

const About = () => {
    const [typeEffect]=useTypewriter({
        words: ['MERN Stack', 'Front-End', 'React'],
        loop:{},
        typeSpeed: 100,
        delaySpeed: 1500
    })
    return (
  <div>
     <div className="hero min-h-screen my-10 mt-0">
        <div className="hero-content flex-col lg:flex-row flex-col-reverse mt-32 gap-20">
          <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
            <div className="lg:w-4/5 space-y-4">
            <div className="flex items-center gap-3 text-[#7EBC12]">
            <FaUser />
              <p className="text-base font-bold">About</p>
            </div>
              <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
              Increasing your need with my experience!
              </h5>
              <div>
                <p>I love doing web development. Because passionate about work combining technology, creativity and own way of thinking. It is my natural behavior to maintain a good relationship with the client's needs in mind.</p>
              </div>
           
              <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none uppercase font-Rajdhani ">
                Read More
              </button>
            </div>
          </div>
          <div className="relative ml-14">
         <div>
         <img
              data-aos="fade-right"
              src={about1}
              className="lg:w-full rounded shadow-2xl"
            />
         </div>
          <div>
          <iframe
              data-aos="fade-left"
              src="https://lottie.host/embed/5e4ef915-95eb-4f1e-9c0f-9777afe21525/XEzZ7j8i8f.json"
              className="w-4/5 h-4/6 rounded shadow-2xl absolute  lg:top-24 lg:-left-64 top-28 -left-12 bottom-0 glass"
            />
          </div>
        <div className="mt-3">
        <h2 className="text-3xl font-Rajdhani text-center"><span>{typeEffect} Developer</span></h2>
        </div>
          </div>
          
        </div>
      </div>
  </div>

    );
};

export default About;