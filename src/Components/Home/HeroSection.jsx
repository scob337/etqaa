import React from "react";
import BG from '../../assets/HeroBanner.webp'
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
      <div
  className="h-full bg-cover bg-center bg-no-repeat bg-fixed flex items-center text-white lg:pl-[137px] relative"
  style={{ backgroundImage: `url(${BG})` }}
>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div className="flex flex-col gap-5 max-md:p-1 relative z-10">
          <div
            className="inline-flex
              w-[350px] lg:w-[362px] h-[43px]
            items-center rounded-[50px] border border-transparent justify-around pl-[10px] pr-[10px] relative overflow-hidden"
            style={{
              width: "362px",
              height: "43px",
              background: "linear-gradient(90deg, rgba(53, 109, 247, 0.3) 0%, rgba(27, 20, 100, 0.3) 99.93%)"
            }}
          >
            <button className="flex justify-center items-center rounded-[36.667px]"
              style={{
                width: "66px",
                height: "25.667px",
                padding: "14.667px 22px",
                background: "linear-gradient(90deg, #356DF7 0%, #1B1464 99.93%)"
              }}>Best</button>
            <p className="text-[17px] text-center">Cyber Security Company</p>
          </div>
          {/* استبدل h1 بـ motion.h1 وأضف الأنيميشن */}
          <motion.h1
            className="lg:text-[48px] max-md:text-[36px] font-bold lg:w-[480px] text-[#f7f7fa]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Top Cyber Security Company in Saudi Arabia
          </motion.h1>
          <p className=" lg:w-[500px] text-[#bababa] max-md:text-[16px] lg:text-[17px]"> ETQAA is one of the most well-known
            <span className="font-bold"> Cyber Security Companies in KSA</span>, and it aims to help organizations survive in today’s challenging cybersecurity landscape. We have a vision to help companies overcome security challenges and tackle threats in the current digital era. We offer complete cybersecurity solutions so companies can make the most out of our services.
          </p>
          <div className="flex gap-[16px]">
            <a
              href="https://youtu.be/9tdewlwamFw?si=hSfImLajCynDL-2r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <a href="#" className="rounded-[10px] text-[20px] font-semibold p-[12px]   text-white" style={{ background: "linear-gradient(90deg, #356DF7 0%, #1B1464 99.93%)" }}>
                Our Services
              </a>
            </a>
          </div>
        </div>

        <div className="mt-4">
          <script
            type="text/javascript"
            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
            data-name="bmc-button"
            data-slug="amine_gha10"
            data-color="#FFDD00"
            data-emoji=""
            data-font="Bree"
            data-text="Buy me a coffee"
            data-outline-color="#000000"
            data-font-color="#000000"
            data-coffee-color="#ffffff"
          ></script>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
