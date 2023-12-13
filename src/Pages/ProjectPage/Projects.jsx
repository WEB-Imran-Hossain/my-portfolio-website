import { Link } from 'react-router-dom';
import project1 from '../../assets/images/Project_01.jpg'
import project2 from '../../assets/images/Project_02.jpg'
import project3 from '../../assets/images/Project_03.jpg'

const Projects = () => {
    return (
        <div className="card mt-32 ">
            <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani text-center">
                Projects!
              </h5>
       <div className='grid lg:grid-cols-2 gap-5 max-w-[80vw] mx-auto mt-10'>
       <div>
       <Link to="https://jade-khapse-103c61.netlify.app" target="_blank"><img className='border-8' src={project1} alt="Album"/></Link>
       </div>
       <div>
       <Link to="https://green-villa.netlify.app" target="_blank"><img className='border-8' src={project2} alt="Album"/></Link>
       </div>
       <div>
       <Link to="https://web-tech-project.netlify.app" target="_blank"><img className='border-8' src={project3} alt="Album"/></Link>
       </div>
       </div>
      </div>
    );
};

export default Projects;