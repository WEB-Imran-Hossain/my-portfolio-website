

const MyExperience = () => {
    return (
        <div className="hero my-10 mt-0 gap-20">
        <div className="hero-content flex-col lg:flex-row flex-col-reverse">
          
          <div className="relative ml-14">
          <iframe className="lg:w-[50rem] lg:h-[50rem] h-80" src="https://lottie.host/embed/639d2b5c-1a57-4072-a3f4-909e08205ae8/1xBsranbjy.json"></iframe>
          </div>

          <div className="lg:w-1/2 lg:mt-0 lg:text-left w-10/12">
            <div className=" space-y-4">
              <h5 className=" text-4xl md:text-5xl font-bold text-[#1D2833] font-Rajdhani">
                My Experience!
              </h5>
              <div>
                <div className="mt-5">
                  <div className="space-y-4 mb-5">
                    <h4 className="font-bold">HTML:</h4>
                      <p className="text-justify">The first language used to create a website is Hyper Markup Language or HTML. HTML helps maintain the functionality of the language by controlling all other languages</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="space-y-4 mb-5">
                    <h4 className="font-bold">CSS:</h4>
                      <p className="text-justify">The second language used to create a website is Cascading Style Sheets or CSS. CSS refers to the presentation of a well-designed decorated of the desired design.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="space-y-4 mb-5">
                    <h4 className="font-bold">JAVASCRIPT:</h4>
                      <p className="text-justify">JavaScript is a web page based programming language. Its role in speeding up web pages is much greater.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="space-y-4 mb-5">
                    <h4 className="font-bold">REACT:</h4>
                      <p className="text-justify">React also embraces a declarative programming style, making it easier to understand and debug code. JSX, a syntax extension for JavaScript, enables developers to write UI components in a format resembling HTML, enhancing readability and maintainability.</p>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyExperience;