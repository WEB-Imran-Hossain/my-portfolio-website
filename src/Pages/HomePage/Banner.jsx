import { FaCode } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#1D2833]">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
          {/* background animation */}
          <div>
            <iframe
              className="lg:w-[40rem] h-[40rem]"
              src="https://lottie.host/embed/c306ec8e-0747-4c4f-aff6-0a209c79bcea/6Vjko7kP83.json"
            ></iframe>
          </div>
          {/* text info */}
          <div className="text-white">
            <div className="flex items-center gap-3 text-[#7EBC12]">
              <FaCode />
              <p className="text-base font-bold">Introducing</p>
            </div>
            <h1 className="text-7xl font-bold font-Rajdhani">
              Hello
              <br /> I'm Imran<br/> Hossain!
            </h1>
            <p className="py-6 text-lg">
              Front-End developer. My favorite tracks are HTML5, CSS3, JavaScript,
              ES6, React.js and MongoDB. I base most of my work on them and enjoy
              using them. I'm MERN stack developer. I am very passionate about
              working with and using new web technologies.
            </p>
            {/* modal */}
            <button
              className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-transparent hover:border-white hover:text-white text-lg font-semibold rounded-none uppercase font-Rajdhani "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Contact me
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box rounded-none">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg">Welcome!</h3>
               {/* contact info */}
               <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
                      <div className="">
                          <form className="card-body md:w-[35rem] md:p-0 mb-10 space-y-5">
                              <h1 className="text-4xl font-semibold text-black font-Rajdhani">
                                  Send Your Messages
                              </h1>
                              <div className="md:flex mb-5 gap-2">
                                  <div className="form-control w-1/2">
                                      <label className="label">
                                          <span className="label-text">Name</span>
                                      </label>
                                      <input
                                          type="text"
                                          name="name"
                                          placeholder="Name"
                                          className="input input-bordered rounded-none"
                                          required
                                      />
                                  </div>
                                  <div className="form-control w-1/2">
                                      <label className="label">
                                          <span className="label-text">Email</span>
                                      </label>
                                      <input
                                          type="email"
                                          name="email"
                                          placeholder="Email"
                                          className="input input-bordered rounded-none"
                                          required
                                      />
                                  </div>
                              </div>
                              <div className="md:flex mb-5 gap-2">
                                  <div className="form-control w-1/2">
                                      <label className="label">
                                          <span className="label-text">Phone</span>
                                      </label>
                                      <input
                                          type="number"
                                          name="phone"
                                          placeholder="Phone"
                                          className="input input-bordered rounded-none"
                                          required
                                      />
                                  </div>
                                  <div className="form-control w-1/2">
                                      <label className="label">
                                          <span className="label-text">Address</span>
                                      </label>
                                      <input
                                          type="text"
                                          name="address"
                                          placeholder="Address"
                                          className="input input-bordered rounded-none"
                                          required
                                      />
                                  </div>
                              </div>
                              <div className="form-control col-span-2 h-32">
                                  <label className="label">
                                      <span className="label-text">Message</span>
                                  </label>
                                  <textarea
                                      type="textarea"
                                      name="textarea"
                                      placeholder="Message"
                                      className="input input-bordered p-3 h-32 rounded-none"
                                      required
                                  />
                              </div>
  
                              <div className="form-control mt-6">
                                  <button className="btn hover:bg-transparent text-white bg-[#7EBC12] border-[#7EBC12] hover:bg-[#1D2833] hover:border-[#1D2833] hover:text-black text-lg font-semibold rounded-none font-Rajdhani">
                                      <input type="submit" value="SUBMIT" />
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    );
};

export default Banner;