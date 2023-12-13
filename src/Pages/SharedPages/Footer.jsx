import logo from '../../assets/images/webimran-logo.png'

const Footer = () => {
  return (
    <footer className="footer items-center p-8 bg-neutral text-neutral-content flex flex-col lg:flex-row justify-between -space-y-8">
      <aside className="items-center  lg:pl-32">
        <img className="w-60 lg:ml-8" src={logo} alt="" />
        
      </aside>
      <p className='text-center text-base font-Rajdhani lg:pt-8'>Copyright © 2023 - All right reserved by webimran</p>
      <form>
   
    <fieldset className="form-control w-80 lg:pt-8">
     
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn join-item rounded-r-lg hover:bg-transparent  text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-white hover:text-white text-lg font-semibold uppercase font-Rajdhani">Subscribe</button>
      </div>
    </fieldset>
  </form>
    </footer>
  );
};

export default Footer;
