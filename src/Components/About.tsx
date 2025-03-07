import React from "react";
import waveGraphic from "../assets/wave.png";
import waveGraphicBlue from "../assets/wave.svg";
import F from "../assets/F.png";
import F2 from "../assets/F2.png";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import Benefit1 from "../assets/Benefit1.png";
import Benefit2 from "../assets/Benefit2.png";
import Benefit3 from "../assets/Benefit3.png";
import Benefit4 from "../assets/Benefit4.png";
import Benefit5 from "../assets/Benefit5.png";

export default function About() {
  return (
    <>
      <main className="flex flex-col w-full gap-4">
        <section className="flex flex-col md:flex-row items-center justify-between  p-16 px-24 bg-white gap-4 font-[Akshar]">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-blue-600">About VOLTRA</h2>
            <p className="text-gray-700">
              Voltra BESS is a global leader in the design and production of
              Battery Energy Storage Systems (BESS) that enable the transition
              to a clean, sustainable energy era. With a strong team of industry
              experts and a clear vision for the future, we are focused on
              delivering efficient, reliable, and scalable energy storage
              solutions to meet the growing demands of the modern energy
              landscape. Learn more about our mission, values, team, and the
              innovation driving our efforts to create a sustainable energy
              future.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              ORDER NOW
            </button>
          </div>

          <div className="flex justify-center items-center mt-8 md:mt-0">
            <div className="w-[584px] h-[411.2px] rounded-lg flex items-center justify-center shadow-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/wP8twoG_GNo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="w-full py-16 bg-white font-[Akshar]">
          <div className="relative container mx-auto px-4 w-full">
            <img
              src={waveGraphicBlue}
              alt="Wave Graphic"
              className="absolute top-0 right-0 w-64"
            />
            <img
              src={waveGraphicBlue}
              alt="Wave Graphic"
              className="absolute top-0 left-0 w-64 [transform:scale(-1,-1)] "
            />

            <h2 className="text-[40px] font-medium text-[#0C33F2] text-center mb-10">
              Our Vision
            </h2>

            {/* Vision Statement */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <p className="text-[14px] mb-2">
                Our vision at Voltra is to be a world leader in energy storage
                solutions, driving the global transition to a sustainable and
                carbon-neutral future.
              </p>
              <p className="text-[14px]">
                By revolutionizing the energy sector with reliable and
                innovative battery storage technology, we aim to make clean
                energy more accessible, affordable, and efficient for all.
              </p>
            </div>

            {/* Three Feature Boxes */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {/* Global Presence */}
              <div className="w-full md:w-64 flex flex-col items-center text-center">
                <img
                  src={About1}
                  alt="Global Presence"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-[18px] font-bold mb-2">Global Presence</h3>
                <p className="text-[12px]">
                  India's BESS Ensuring Uninterrupted Power Supply During Grid
                  Failures
                </p>
              </div>

              {/* Technology Leader */}
              <div className="w-full md:w-64 flex flex-col items-center text-center">
                <img
                  src={About2}
                  alt="Technology Leader"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-[18px] font-bold mb-2">
                  Technology Leader
                </h3>
                <p className="text-[12px]">
                  Back-up power for outages and disasters.
                </p>
              </div>

              {/* Eco-Friendly */}
              <div className="w-full md:w-64 flex flex-col items-center text-center">
                <img
                  src={About3}
                  alt="Eco-Friendly"
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-[18px] font-bold mb-2">Eco-Friendly</h3>
                <p className="text-[12px]">
                  Optimal power quality and reduced voltage/frequency
                  deviations.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col w-full h-full">
          <div className="flex flex-row justify-start items-center gap-4">
            <img src={Benefit1} width={499} height={379} />

            <div className="flex flex-row justify-start">
              <div className="w-1/2">
                <h2 className="text-[40px] text-[#0C33F2]">Innovation</h2>
                <p className="text-[12px]">
                  We are committed to fostering an environment of continuous
                  innovation, with a focus on improving energy storage solutions
                  and reducing their environmental impact.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-4">
            <div className="flex flex-row justify-end">
              <div className="w-1/2">
                <h2 className="text-[40px] text-[#0C33F2]">Innovation</h2>
                <p className="text-[12px]">
                  We are committed to fostering an environment of continuous
                  innovation, with a focus on improving energy storage solutions
                  and reducing their environmental impact.
                </p>
              </div>
            </div>
            <img src={Benefit2} width={499} height={379} />
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <img src={Benefit3} width={499} height={379} />
            <div className="flex flex-row justify-start">
              <div className="w-1/2">
                <h2 className="text-[40px] text-[#0C33F2]">Innovation</h2>
                <p className="text-[12px]">
                  We are committed to fostering an environment of continuous
                  innovation, with a focus on improving energy storage solutions
                  and reducing their environmental impact.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end items-center gap-4">
            <div className="flex flex-row justify-end">
              <div className="w-1/2">
                <h2 className="text-[40px] text-[#0C33F2]">Innovation</h2>
                <p className="text-[12px]">
                  We are committed to fostering an environment of continuous
                  innovation, with a focus on improving energy storage solutions
                  and reducing their environmental impact.
                </p>
              </div>
            </div>
            <img src={Benefit4} width={499} height={379} />
          </div>
          <div className="flex flex-row justify-start items-center gap-4">
            <img src={Benefit5} width={499} height={379} />
            <div className="flex flex-row justify-start">
              <div className="w-1/2">
                <h2 className="text-[40px] text-[#0C33F2]">Innovation</h2>
                <p className="text-[12px]">
                  We are committed to fostering an environment of continuous
                  innovation, with a focus on improving energy storage solutions
                  and reducing their environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Founders
          </h2>

          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-gray-700">
              Our vision at Voltra is to be a world leader in energy storage
              solutions, driving the global transition to a sustainable and
              carbon-neutral future. By revolutionizing the energy sector with
              reliable and innovative battery storage technology, we aim to make
              clean energy more accessible, affordable, and efficient for all.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16">
            <div className="flex flex-col items-center">
              <div className="mb-4 w-48 h-48 overflow-hidden">
                <img
                  src={F}
                  alt="Rachit Garg - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Rachit Garg</h3>
              <a
                href="https://linkedin.com/in/rachit-garg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 w-48 h-48 overflow-hidden">
                <img
                  src={F2}
                  alt="Anuj Jain - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-medium">Anuj Jain</h3>
              <a
                href="https://linkedin.com/in/anuj-jain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 mt-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center w-full h-full p-4 relative overflow-hidden">
          <div className="relative bg-[#0C33F2] rounded-lg p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-24 w-3/4 h-full">
            <div className="md:w-2/3 space-y-4 z-10">
              <h2 className="text-2xl md:text-3xl font-semibold">
                We offer tailored customization to meet your needs.
                <br />
                Share your requirements with us.
              </h2>

              <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="md:flex relative w-3/4 h-full">
            <img
              src={waveGraphic}
              alt="Wave Graphic"
              className="absolute bottom-[-100px] right-[-40px] w-64"
            />
          </div>
        </section>
      </main>
    </>
  );
}
