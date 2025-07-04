import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function FollowMeCard() {
  return (
    <div className="bg-white/5 border border-cyan-400/20 backdrop-blur-md p-6 rounded-xl hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300 w-full">
      <h3 className="text-white text-xl font-semibold mb-4">Follow Me</h3>

      <div className="flex gap-6 text-2xl text-cyan-400">
        <a
          href="https://github.com/VengurlekarMayuresh"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/the_mayuuuuuu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/mayuresh-vengurlekar-33a64b32a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition duration-300"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}
