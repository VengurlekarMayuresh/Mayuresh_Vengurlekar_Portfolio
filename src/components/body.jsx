import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Body({ open }) {
  return (
    <div
      className={`md:hidden fixed   inset-0 bg-[#0a0a0a]/80 backdrop-blur-md z-40 ${
        open ? "block" : "hidden"
      } transition-all duration-500 ease-in-out font-poppins`}
    >
      <ul className="flex flex-col min-h-[100vh] justify-center items-center gap-6  text-white text-2xl font-semibold">
        <li className={` effect`}>
          <a href="#">Home</a>
        </li>
        <li className={`${open ? "animate-slide-down delay-[300ms]" : ""} effect`}>
          <a href="#">About Me</a>
        </li>
        <li className={`${open ? "animate-slide-down delay-[500ms]" : ""} effect`}>
          <a href="#">Project</a>
        </li>
        <li className={`${open ? "animate-slide-down delay-[700ms]" : ""} effect`}>
          <a href="#">Contact</a>
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
