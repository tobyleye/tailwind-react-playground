import React from "react";
import Card from "./Card";

const moods = [
  {
    iconClass: "fas fa-ship",
    title: "Kayaking",
  },
  {
    title: "Balooning",
    iconClass: "fas fa-fighter-jet",
  },
  {
    title: "hiking",
    iconClass: "fas fa-mountain",
  },
  {
    title: "snorkeling",
    iconClass: "fas fa-snowplow",
  },
  {
    title: "safari",
    iconClass: "fas fa-truck-pickup",
  },
];

const experiences = [
  {
    title: "Kayaking at the village Gudvangen",
    imgSrc:
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    location: "Norway",
  },
  {
    title: "Breathtaking antelope Canyon Tour",
    imgSrc:
      "https://images.unsplash.com/photo-1569200759280-137a1a1695fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    location: "Arizona, USA",
  },
  {
    title: "Breathtaking antelope Canyon Tour",
    imgSrc:
      "https://images.unsplash.com/photo-1575552286163-7ca796f555a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    location: "Norway",
  },
];

const Discover = () => (
  <section className="w-2/5 bg-white px-12 py-10 overflow-y-auto">
    <nav className="flex items-center mb-16">
      <div className="w-10 flex flex-col p-1 cursor-pointer">
        <span className="w-full border-gray-800 border mb-2" />
        <span className="w-2/3 border border-gray-800" />
      </div>
      <ul className="ml-auto flex items-center text-base font-semibold">
        <li className="mr-10 text-sm cursor-pointer">Discover</li>
        <li className="mr-10 text-sm cursor-pointer">Blog</li>
        <li>
          <div className="user w-8 h-8 bg-gray-600 rounded-lg relative cursor-pointer">
            <span
              style={{ borderWidth: "3px", transform: "translate(50%, -50%)" }}
              className="border-white border-8 bg-red-500 inline-block rounded-full p-1 absolute right-0 top-0"
            ></span>
          </div>
        </li>
      </ul>
    </nav>

    <div className="border-b border-gray-400 flex items-center mb-12 pb-3">
      <span className="mr-3 font-semibold text-gray-700 text-xl">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        placeholder="Search"
        className="block w-full outline-none font-sans"
      />
    </div>

    <section>
      <h1 className="text-gray-900 mb-3 text-3xl font-bold">Discover</h1>
      <nav className="mb-5">
        <ul className="flex items-center">
          <li className="mr-8 text-base font-semibold text-orange-600 cursor-pointer">
            Experiences
          </li>
          <li className="mr-8 text-base  font-semibold text-gray-400 cursor-pointer">
            Places
          </li>
          <li className="text-base font-semibold text-gray-400 cursor-pointer">
            Housings
          </li>
        </ul>
      </nav>

      <div className="flex flex-no-wrap overflow-x-auto">
        {experiences.map((exp, index) => (
          <Card key={index} {...exp} />
        ))}
      </div>
    </section>

    <section className="mt-12">
      <header className="mb-5 flex items-center justify-between">
        <h3 className="font-bold text-xl text-gray-800">Adventerous Mood?</h3>
        <span className="text-gray-500 text-xs font-semibold cursor-pointer">
          Show all
        </span>
      </header>
      <div className="flex overflow-x-auto flex-no-wrap">
        {moods.map((mood, index) => (
          <div
            key={index}
            className="mr-8 font-semibold flex flex-col text-center"
          >
            <span className="text-2xl text-orange-600 mb-1">
              <i className={mood.iconClass}></i>
            </span>
            <span className="text-gray-400 text-xs uppercase">
              {mood.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  </section>
);
export default Discover;
