import React from "react";

const SliderMarquee = () => {
  const images = [
   '/partners/al-jammaz.jpg',
'/partners/cyber-shield.png',
'/partners/DSTC.png',
  '/partners/ras.png',
  '/partners/star-link.png',
  '/partners/tenable.png'
  ];

  // Duplicate images for seamless infinite scroll
  const repeatedImages = [...images, ...images];

  return (
    <div className="flex overflow-hidden w-[90%] md:w-[80%] lg:w-[80%] py-4 ">
      <div className="relative w-full bg-white">
        <div
          className="flex animate-marquee "
          style={{
            animation: "marquee 20s linear infinite",
          }}
        >
          {repeatedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className={`
                rounded object-cover
                w-[90px] h-[45px]
                sm:w-[140px] sm:h-[70px]
                md:w-[160px] md:h-[80px]
                lg:w-[180px] lg:h-[90px]
                xl:w-[200px] xl:h-[100px]
                mx-2
              `}
            />
          ))}
        </div>
      </div>
      {/* Keyframes animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default SliderMarquee;
