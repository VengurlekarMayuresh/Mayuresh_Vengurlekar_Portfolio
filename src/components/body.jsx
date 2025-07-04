import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Body({ open }) {
  return (
    <div
      className={`md:hidden fixed overflow-x-hidden  inset-0 bg-[#0a0a0a]/80 backdrop-blur-md z-40 ${
        open ? "block" : "hidden"
      } transition-all duration-500 ease-in-out font-poppins`}
    >
      <ul className=" flex flex-col h-[90vh] w-auto justify-center items-center gap-6   text-white text-2xl font-semibold">
        <li className={` effect`}>
          <a href="#home">Home</a>
        </li>
        <li className={`effect`}>
          <a href="#about">About Me</a>
        </li>
        <li className={`effect`}>
          <a href="#projects">Project</a>
        </li>
        <li className={` effect`}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Left-Aligned Social Icons */}
      <div className="absolute w-full flex justify-center bottom-8  items-center gap-6  px-6 text-white text-2xl">
        <a
          href="https://github.com/VengurlekarMayuresh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mayuresh-vengurlekar-33a64b32a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://www.instagram.com/the_mayuuuuuu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
}
