import React from "react";
import waveGraphic from "../assets/wave.png";
import waveGraphicBlue from "../assets/wave.svg";
// import F from "../assets/F.png";
// import F2 from "../assets/F2.png";
import About1 from "../assets/About1.png";
import About2 from "../assets/About2.png";
import About3 from "../assets/About3.png";
import Benefit1 from "../assets/Benefit1.png";
import Benefit2 from "../assets/Benefit2.png";
import Benefit3 from "../assets/Benefit3.png";
import Benefit4 from "../assets/Benefit4.png";
import Benefit5 from "../assets/Benefit5.png";
import cover1 from "../assets/cover1.png";

export default function About() {
  return (
    <>
     <main className="flex flex-col w-full gap-4">
  {/* Hero Section */}
  <section className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 lg:p-16 xl:px-24 bg-white gap-4 font-[Akshar]">
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-4xl md:text-5xl lg:text-[64px] font-medium font-[Akshar] text-[#0C33F2]">About VOLTRA</h2>
      <p className="font-gilroy text-[16px] text-justify">
        Voltra BESS is a global leader in the design and production of Battery 
        Energy Storage Systems (BESS) that enable the transition to a clean,
        sustainable energy era. With a strong team of industry experts and a clear 
        vision for the future, we are focused on delivering efficient, reliable, and 
        scalable energy storage solutions to meet the growing demands of the
        modern energy landscape. Learn more about our mission, values, team, and
        the innovation driving our efforts to create a sustainable energy future.
      </p>
      
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
        <a href="/contact">
          <span className="font-[Akshar] text-[16px]">
            ORDER NOW
          </span>
        </a>
      </button>
    </div>

    <div className="flex justify-center items-center mt-8 md:mt-0 w-full md:w-1/2">
      <div className="w-full max-w-[584px] rounded-lg flex items-center justify-center">
        <img src={cover1} alt="About Voltra" className="w-full h-auto" />
      </div>
    </div>
  </section>

  {/* Mission Section with Wave Graphics */}
  <section className="w-full py-8 bg-white font-[Akshar]">
    <div className="relative container mx-auto px-4 w-full">
      <img
        src={waveGraphicBlue}
        alt="Wave Graphic"
        className="absolute top-0 right-0 w-32 md:w-64 hidden sm:block"
      />
      <img
        src={waveGraphicBlue}
        alt="Wave Graphic"
        className="absolute top-0 left-0 w-32 md:w-64 [transform:scale(-1,-1)] hidden sm:block"
      />
      
      <div className="flex justify-center items-center mx-auto max-w-3xl px-4 py-8 md:py-12">
        <h3 className="text-center text-sm md:text-base font-gilroy leading-relaxed">
          We specialize in creating high-performance, scalable energy storage solutions for a wide range of applications, 
          including renewable energy integration, grid stabilization, and backup power.
          <br /><br />
          Our mission is to empower businesses and communities by providing sustainable, efficient, and reliable energy 
          storage solutions that support the global transition to a clean energy future.
        </h3>
      </div>
    </div>
  </section>

  {/* Vision Section */}
  <section
    className="w-full py-12 md:py-16 font-[Akshar] mb-8 md:mb-16"
    style={{ backgroundColor: "#FAFAFA" }}
  >
    <h2 className="text-3xl md:text-[40px] font-medium text-[#0C33F2] text-center mb-6 md:mb-10">
      Our Vision
    </h2>

    {/* Vision Statement */}
    <div className="max-w-4xl mx-auto mb-8 md:mb-16 text-center px-4 font-gilroy">
      <p className="text-[16px] mb-2">
        Our vision at Voltra is to be a world leader in energy storage
        solutions, driving the global transition to a sustainable and
        carbon-neutral future.
        By revolutionizing the energy sector with reliable and
        innovative battery storage technology, we aim to make clean
        energy more accessible, affordable, and efficient for all.
      </p>
    </div>

    {/* Three Feature Boxes */}
    <div className="flex flex-wrap justify-center gap-8 lg:gap-16 px-4">
      {/* Global Presence */}
      <div className="w-full sm:w-[280px] md:w-64 flex flex-col items-center text-center font-gilroy">
        <img
          src={About1}
          alt="Global Presence"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-[18px] font-bold mb-2">Global Presence</h3>
        <p className="text-[14px]">
          India's BESS Ensuring Uninterrupted Power Supply During Grid
          Failures
        </p>
      </div>

      {/* Technology Leader */}
      <div className="w-full sm:w-[280px] md:w-64 flex flex-col items-center text-center font-gilroy">
        <img
          src={About2}
          alt="Technology Leader"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-[18px] font-bold mb-2">
          Technology Leader
        </h3>
        <p className="text-[14px]">
          Back-up power for outages and disasters.
        </p>
      </div>

      {/* Eco-Friendly */}
      <div className="w-full sm:w-[280px] md:w-64 flex flex-col items-center text-center">
        <img
          src={About3}
          alt="Eco-Friendly"
          className="w-16 h-16 mb-4"
        />
        <h3 className="text-[18px] font-bold mb-2">Eco-Friendly</h3>
        <p className="text-[14px] font-gilroy">
          Optimal power quality and reduced voltage/frequency
          deviations.
        </p>
      </div>
    </div>
  </section>

  {/* Values Section with Image-Text Alternating Pattern */}
  <section className="flex flex-col w-full h-full px-4 gap-12 md:gap-16">
    {/* Innovation */}
    <div className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-4">
      <div className="w-full md:w-1/2">
        <img src={Benefit1} alt="Innovation" className="w-full h-auto max-w-[499px] mx-auto" />
      </div>
      <div className="w-full md:w-1/2 flex justify-start">
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-[40px] text-[#0C33F2] font-medium font-[Akshar]">Innovation</h2>
          <p className="font-gilroy mt-2">
            We are committed to fostering an environment of continuous
            innovation, with a focus on improving energy storage solutions
            and reducing their environmental impact.
          </p>
        </div>
      </div>
    </div>

    {/* Sustainability */}
    <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-6 md:gap-4">
      <div className="w-full md:w-1/2">
        <img src={Benefit2} alt="Sustainability" className="w-full h-auto max-w-[499px] mx-auto" />
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-[40px] text-[#0C33F2] font-medium font-[Akshar]">Sustainability</h2>
          <p className="text-[16px] font-gilroy mt-2">
            We prioritize the long-term health of the planet by employing environmentally-friendly technologies and promoting renewable energy solutions.
          </p>
        </div>
      </div>
    </div>

    {/* Integrity */}
    <div className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-4">
      <div className="w-full md:w-1/2">
        <img src={Benefit3} alt="Integrity" className="w-full h-auto max-w-[499px] mx-auto" />
      </div>
      <div className="w-full md:w-1/2 flex justify-start">
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-[40px] text-[#0C33F2] font-medium font-[Akshar]">Integrity</h2>
          <p className="text-[16px] font-gilroy mt-2">
            Every product we create is a testament to our commitment to excellence, from design to production to customer service.
          </p>
        </div>
      </div>
    </div>

    {/* Social Impact */}
    <div className="flex flex-col md:flex-row-reverse justify-start items-center gap-6 md:gap-4">
      <div className="w-full md:w-1/2">
        <img src={Benefit4} alt="Social Impact" className="w-full h-auto max-w-[499px] mx-auto" />
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-[40px] text-[#0C33F2] font-medium font-[Akshar]">Social Impact</h2>
          <p className="text-[16px] font-gilroy mt-2">
            We are dedicated to making a meaningful difference by expanding access to clean energy, supporting development, and empowering communities with innovative solutions.
          </p>
        </div>
      </div>
    </div>

    {/* Security */}
    <div className="flex flex-col md:flex-row justify-start items-center gap-6 md:gap-4">
      <div className="w-full md:w-1/2">
        <img src={Benefit5} alt="Security" className="w-full h-auto max-w-[499px] mx-auto" />
      </div>
      <div className="w-full md:w-1/2 flex justify-start">
        <div className="w-full md:w-4/5">
          <h2 className="text-3xl md:text-[40px] text-[#0C33F2] font-medium font-[Akshar]">Security</h2>
          <p className="text-[16px] font-gilroy mt-2">
            We prioritize the safety and resilience of our energy solutions by implementing advanced protective technologies, rigorous testing, and industry-leading standards.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* Contact Section */}
  <section className="flex flex-col justify-center items-center w-full p-4 md:p-8 relative overflow-hidden my-8">
    <div className="relative bg-[#0C33F2] rounded-lg p-6 md:p-8 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between md:px-12 lg:px-24 w-full md:w-3/4">
      <div className="md:w-2/3 space-y-4 z-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          We offer tailored customization to meet your needs.
        </h2>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Share your requirements with us.
        </h2>
        <br />
        <a href="/contact">
          <button className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow-md hover:bg-gray-100 transition">
            GET IN TOUCH
          </button>
        </a>
      </div>
      <div className="absolute bottom-[-100px] right-[-40px] w-64 hidden md:block">
        <img
          src={waveGraphic}
          alt="Wave Graphic"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
</main>
    </>
  );
}
