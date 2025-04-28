import React from 'react';
import SectionTitle from "../../../Components/SectionTitle";

const WhyChooseUs = () => {
  const cards = [
    {
      id: 1,
      title: "Card One",
      desc: "This is the first card.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Card Two",
      desc: "This is the second card.",
      img: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Card Three",
      desc: "This is the third card.",
      img: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-800 py-16 px-6">
      <SectionTitle
        heading="Why Choose Us"
        subHeading="Thousands trust us to find their perfect match"
      />

      <div className="flex flex-wrap justify-center gap-6 p-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-80 h-48 overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Glass effect content appears on hover */}
            <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md text-white p-4 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 rounded-b-xl">
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
