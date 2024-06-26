import React, { useState } from "react";

import e1 from "./events/6.jpeg";
import e2 from "./events/3.jpg";
import e3 from "./events/photo-101.jpeg";
import e4 from "./events/4.jpg";

const EventSlider = () => {
  const Events = [
    { src: e1, text: "Ganesh Jayanti Celebration" },
    { src: e2, text: "Street Play" },
    { src: e3, text: "Shiv Jayanti Celebration" },
    { src: e4, text: "Parent Teacher Meet Up's" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="py-4 bg-gray-300 bg-opacity-50 font-sans" id="events">
      <div
        className="text-4xl md:text-5xl lg:text-6xl text-center font-bold transition-all duration-300 max-md:text-xl text-blue-900"
        style={
          {
            WebkitTextStroke : "1px black",
          }
        }
      >
        Events
      </div>

      {Events.length > 0 && (
        <div className="slider flex justify-center items-center overflow-x-auto flex-wrap max-sm:h-60 mt-8 max-sm:mt-4 mb-10">
          {Events.map((event, index) => (
            <div
              key={index}
              className="relative overflow-hidden mx-4 rounded-sm shadow-lg md:w-72 sm:w-60 h-60 max-sm:w-full"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={event.src}
                alt={`Event ${index + 1}`}
                className={`block w-full h-full absolute top-0 left-0 transition-all duration-300 transform ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center shadow- shadow-cyan-200">
                  {event.text}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventSlider;
