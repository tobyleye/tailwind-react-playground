import React from "react";

const Card = ({ title, location, imgSrc }) => {
  const backgroundImage = `linear-gradient(
                                to bottom, 
                                transparent 0 40%, 
                                rgba(0,0,0,.2) 55%, 
                                rgba(0,0,0,.9)),
                            url("${imgSrc}")`;
  return (
    <div
      style={{ backgroundImage }}
      className="h-64 w-48 p-5 flex flex-shrink-0 text-gray-300 bg-cover bg-center rounded-lg mr-5 flex-col justify-end bg-gray-800 text-white"
    >
      <h3 className="mb-2 text-sm font-bold leading-tight">{title}</h3>
      <div className="text-xs">
        <span className="mr-2">
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <span className="">{location}</span>
      </div>
    </div>
  );
};

export default Card;
