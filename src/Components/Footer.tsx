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
    <footer className="flex flex-wrap p-10 bg-[#070a17] text-white">
      {/* Company Info */}
      <div className="flex-1 min-w-64 mb-5">
        <img src={logo} alt="Voltra Logo" className="w-32 h-auto mb-3" />
        <div className="text-sm text-gray-400 mb-5">
          Voltra Technologies Pvt. Ltd.
        </div>

        <div className="flex flex-col space-y-3 mt-5">
          <div className="flex items-start text-sm text-gray-400">
            <svg
              className="w-5 h-5 mr-3 mt-1"
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
              3rd Floor, Hudel Center
              <br />
              Golf Course Road
              <br />
              Sector-53
              <br />
              Gurugram, India
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-400">
            <svg
              className="w-5 h-5 mr-3"
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
              className="w-5 h-5 mr-3"
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
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap flex-2 gap-8 md:gap-12">
        <div className="min-w-32 mb-5">
          <h3 className="text-white text-base font-bold mb-5 uppercase">
            Home
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="/about"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                About Voltra
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/products"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Our Products
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                The Voltra Edge
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Common Queries
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-32 mb-5">
          <h3 className="text-white text-base font-bold mb-5 uppercase">
            Products
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="/products?category=residential"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Residential ESS
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/products?category=utility"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Utilities
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/products?category=ci"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                {" "}
                C&I
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-32 mb-5">
          <h3 className="text-white text-base font-bold mb-5 uppercase">
            Solutions
          </h3>
          <ul className="list-none">
            <li className="mb-3">
              <a
                href="/solutions/island-mode"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Island
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/solutions/hybrid-mode"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Hybrid
              </a>
            </li>
            <li className="mb-3">
              <a
                href="/solutions/microgrid-mode"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Microgrid
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-32 mb-5">
          <h3 className="text-white text-base font-bold mb-5 uppercase">
            Technology
          </h3>
          <ul className="list-none">
            <li classname="mb-3">
              <a
                href="/technology"
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1 min-w-64">
        <form onSubmit={handleSubmit}>
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
    </footer>
  );
};

export default Footer;
