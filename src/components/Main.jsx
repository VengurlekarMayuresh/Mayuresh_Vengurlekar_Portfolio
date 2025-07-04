import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import "animate.css";

export default function Main() {
  
  return (
    <div className="flex lg:flex-row h-[90vh] flex-col lg:items-start items-center justify-center gap-5 lg:gap-20 p-5 lg:pt-30 overflow-x-hidden relative">
      
      {/* LEFT CONTENT */}
      <motion.div
        className="topy flex flex-col gap-4 text-left"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="mini leading-tight animate__animated animate__fadeInUp animate__delay-1s">
          <span className="block">
            HI <span className="wave-hand inline-block">👋</span>, I'M
          </span>
          <span className="block pl-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3f5efb] via-[#7c5cff] to-[#fc466b] drop-shadow-lg tracking-wider leading-tight">
            <span>MAYURESH</span>{" "}
            <span className="pl-10 sm:pl-2">VENGURLEKAR</span>
          </span>
        </h1>

        {/* Typewriter Text */}
        <motion.h2
          className="typo mt-6 sm:mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#051937] via-[#004d7a] to-[#008793] transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Typewriter
            words={["WEB DESIGNER", "SOFTWARE DEVELOPER", "AI & ML ENTHUSIAST"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* <Downlaod /> */}
        </motion.div>
      </motion.div>

      {/* PROFILE IMAGE */}
      <motion.div
        className="w-60 h-70 md:w-72 md:h-72 relative z-10 shadow-xl rounded-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <img
          src="/photu.jpg"
          alt="Mayuresh Vengurlekar"
          className="w-full h-full object-cover rounded-full"
          style={{
            animation: "morphShape 8s ease-in-out infinite",
          }}
        />
      </motion.div>

      {/* WALKING LOTTIE BOTTOM */}
  <div className="walker-container">
  <div className="walker">
    <DotLottieReact
      src="https://lottie.host/b4ae4334-dd9d-4524-b54a-68361784fdc0/GGsAoHBF8P.lottie"
      loop
      autoplay
    />
  </div>
</div>

    </div>
  );
}
