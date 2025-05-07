import React, { FormEvent, useState } from "react";
import logo from "../assets/logo.png";

interface ContactFormData {
  name: string;
  contact: string;
  email: string;
  query: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    contact: "",
    email: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <footer className="bg-[#070a17] text-white font-gilroy">
      <div className="container mx-auto p-4 sm:p-6 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-3">
            <img src={logo} alt="Voltra Logo" className="w-32 h-auto mb-3" />
            <div className="text-sm text-gray-400 mb-5">
              Voltra Technologies Pvt. Ltd.
            </div>

            <div className="flex flex-col space-y-3 mt-5">
              <div className="flex items-start text-sm text-gray-400">
                <svg
                  className="w-5 h-5 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>
                  3rd Floor, Orchid Center
                  <br />
                  Golf Course Road
                  <br />
                  Sector-53
                  <br />
                  Gurugram - 122002, Haryana
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+91 99929 27033</span>
              </div>

              <div className="flex items-center text-sm text-gray-400">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>info@voltra.in</span>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-4 mt-2">
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/company/voltra-energy1/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                
                {/* Facebook */}
                <a 
                  href="https://facebook.com/voltraenergy1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/voltra_energy/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* Google Maps */}
                <a 
                  href="https://g.page/r/CSBgnRhxGC2_EBM" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Navigation Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {/* Home Links */}
              <div>
                <h3 className="text-white text-base font-bold mb-4 uppercase">
                  Home
                </h3>
                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/about"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      About Voltra
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/products"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Our Products
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      The Voltra Edge
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="#"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Common Queries
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Products Links */}
              <div>
                <h3 className="text-white text-base font-bold mb-4 uppercase">
                  Products
                </h3>
                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/products?category=residential"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Residential ESS
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/products?category=utility"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Utilities
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/products?category=ci"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      {" "}
                      C&I
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Solutions Links */}
              <div>
                <h3 className="text-white text-base font-bold mb-4 uppercase">
                  Solutions
                </h3>
                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/solutions/island-mode"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Island
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/solutions/hybrid-mode"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Hybrid
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-3">
                    <a
                      href="/solutions/microgrid-mode"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Microgrid
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Technology Links */}
              <div>
                <h3 className="text-white text-base font-bold mb-4 uppercase">
                  Technology
                </h3>
                <ul className="list-none">
                  <li className="mb-3">
                    <a
                      href="/technology"
                      className="text-gray-400 text-sm hover:text-white transition-colors relative group inline-block"
                    >
                      Technology
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border-none bg-[#1a1f2e] text-white placeholder-gray-400"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border-none bg-[#1a1f2e] text-white placeholder-gray-400"
                  placeholder="Contact"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border-none bg-[#1a1f2e] text-white placeholder-gray-400"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md border-none bg-[#1a1f2e] text-white placeholder-gray-400 h-24 resize-y"
                  placeholder="Query"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white border-none py-2 px-6 rounded-md cursor-pointer font-bold tracking-wide hover:bg-blue-700 transition-colors"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright section - optional addition */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Voltra Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;