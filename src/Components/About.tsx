import React from "react";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  p-16 px-24 bg-white gap-4 font-[Akshar]">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-600">About VOLTRA</h2>
        <p className="text-gray-700">
          Voltra BESS is a global leader in the design and production of Battery
          Energy Storage Systems (BESS) that enable the transition to a clean,
          sustainable energy era. With a strong team of industry experts and a
          clear vision for the future, we are focused on delivering efficient,
          reliable, and scalable energy storage solutions to meet the growing
          demands of the modern energy landscape. Learn more about our mission,
          values, team, and the innovation driving our efforts to create a
          sustainable energy future.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          ORDER NOW
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <div className="bg-black w-full h-64 rounded-lg flex items-center justify-center shadow-md">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-16 h-16 text-red-600"
          >
            <path d="M21.8 8.001A2.749 2.749 0 0019.44 5.85C17.8 5.5 12 5.5 12 5.5s-5.8 0-7.44.35a2.75 2.75 0 00-2.36 2.151C2 9.8 2 12 2 12s0 2.2.2 3.999A2.749 2.749 0 004.56 18.15c1.64.35 7.44.35 7.44.35s5.8 0 7.44-.35a2.75 2.75 0 002.36-2.151C22 14.2 22 12 22 12s0-2.2-.2-3.999zM9.6 15.2V8.8l6.4 3.2-6.4 3.2z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
