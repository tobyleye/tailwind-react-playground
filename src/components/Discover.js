import React from "react";

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

const Card = ({ title, location, imgSrc }) => (
  <div className="h-64 w-48 p-5 flex flex-shrink-0 text-gray-300  rounded-lg mr-5 flex-col justify-end bg-gray-800 text-white">
    <h3 className="mb-2 text-sm font-bold">{title}</h3>
    <div className="text-xs">
      <span className="mr-2">
        <i class="fas fa-map-marker-alt"></i>
      </span>
      <span className="">{location}</span>
    </div>
  </div>
);

const Discover = () => (
  <section className="w-2/5 bg-white px-12 py-10">
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
        className="block w-full outline-none"
      />
    </div>

    <section>
      <h1 className="text-gray-900 mb-3 text-3xl font-bold">Discover</h1>
      <nav className="mb-5">
        <ul className="flex items-center">
          <li className="mr-8 text-xl font-bold text-orange-600 cursor-pointer">
            Experiences
          </li>
          <li className="mr-8 text-xl  font-bold text-gray-400 cursor-pointer">
            Places
          </li>
          <li className="text-xl font-bold text-gray-400 cursor-pointer">
            Housings
          </li>
        </ul>
      </nav>

      <div className="flex flex-no-wrap overflow-x-auto">
        <Card title="Kayaking at the village Gudvangen" location="Norway" />
        <Card
          title="Breathtaking antelope Canyon Tour"
          location="Arizona, USA"
        />
        <Card title="Kayaking at the village Gudvangen" location="Norway" />
      </div>
    </section>

    <section className="mt-12">
      <header className="mb-5 flex justify-between">
        <h3 className="font-bold text-xl text-gray-800">Adventerous Mood?</h3>
        <span className="text-gray-400 text-xs font-semibold">Show all</span>
      </header>
      <div className="flex">
        {moods.map((mood, index) => (
          <div className="mr-4 font-semibold text-center">
            <span className="text-2xl text-orange-600">
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
