import { FaCss3Alt, FaGitSquare, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const MySkill = () => {
    return (
        <div className="flex justify-center items-center min-h-screen text-white">
        <div className="hero h-[40rem]">
        <iframe className="w-full h-full" src="https://lottie.host/embed/3d8064ac-b57c-4286-9121-20f7a477e28a/cIKnXos8cp.json"></iframe>
            <div className="hero-overlay bg-opacity-70 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">

<div className="my-10">
        <div className=" flex flex-col lg:flex-row flex-col-reverse justify-between items-center">
          <div>
        <div>
        <h5 className=" text-4xl md:text-5xl font-bold text-white font-Rajdhani">
                My Skill
              </h5>
        </div>
        <div className="flex flex-wrap text-8xl gap-5 mt-5">
        <FaHtml5  className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm"/>
        <FaCss3Alt className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <SiTailwindcss className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <TbBrandJavascript className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <FaReact className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <FaNodeJs className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <SiExpress  className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm"/>
        <SiMongodb className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm"/>
        <SiFirebase className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        <FaGitSquare className="text-[#7EBC12] hover:text-[#1D2833] hover:blur-sm" />
        </div>
          </div>
        </div>
      </div>


            </div>
        </div>
    </div>
    );
};

export default MySkill;