import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center md:mt-10 md:mb-10'>
           <div>
           <form className="card-body md:w-[35rem] md:p-0 mb-10 flex justify-between">
                            <h1 className="text-4xl font-semibold text-black font-Rajdhani">
                                Get in Touch!
                            </h1>
                            <div className="md:flex mb-5 gap-2">
                                <div className="form-control md:w-1/2">
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
                                <div className="form-control md:w-1/2">
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
                                <div className="form-control md:w-1/2">
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
                                <div className="form-control md:w-1/2">
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
    );
};

export default Contact;