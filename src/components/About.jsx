import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCode,
  faBrain,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-full h-auto px-6 py-20 bg-gradient-to-b from-[#0a1f3c] via-[#0c2c4d] to-[#121212] text-white font-poppins">
      
      {/* Section Heading */}
      <motion.div
        className="w-full flex justify-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5  }}
      >
        <h2 className="text-4xl font-bold mb-6 border-b-2 border-blue-400 pb-2">
          About Me
        </h2>
      </motion.div>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10">
        
        {/* Lottie Animation */}
        <motion.div
          className="flex md:w-[50%] w-full h-auto justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5  }}
        >
          <DotLottieReact
            src="https://lottie.host/895faffb-0114-4091-b7a1-8954edd997fe/F7mNX2ifZV.lottie"
            loop
            autoplay
          />
        </motion.div>

        {/* Text & Cards */}
        <motion.div
          className="w-full lg:w-[50vw] p-5"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-lg leading-relaxed font-semibold">
            Hi, I'm{" "}
            <span className="text-blue-400 font-semibold">
              Mayuresh Vengurlekar
            </span>
            , a passionate Web Developer and AI/ML enthusiast. I love building
            modern, responsive websites and experimenting with cutting-edge
            technologies. With experience in React, Tailwind CSS, FastAPI, and
            more — I’m constantly learning and improving. Whether it’s designing
            clean UIs or writing backend logic, I enjoy solving real-world
            problems through code.
          </p>

          {/* Skill Cards */}
          <motion.div
            className="grid md:grid-cols-2 grid-cols-1 place-items-center mt-5 gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5  }}
          >
            <Card
              icon={<FontAwesomeIcon icon={faLaptopCode} />}
              head="Interactive Web"
              des="Modern, animated, responsive UIs"
            />
            <Card
              icon={<FontAwesomeIcon icon={faCode} />}
              head="Creative Code"
              des="Clean code meets bold design"
            />
            <Card
              icon={<FontAwesomeIcon icon={faBrain} />}
              head="AI & ML Integration"
              des="Smart apps with real-world ML"
            />
            <Card
              icon={<FontAwesomeIcon icon={faServer} />}
              head="End-to-End Development"
              des="From wireframes to launch"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
