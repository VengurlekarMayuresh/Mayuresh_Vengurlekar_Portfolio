import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Font } from "three/examples/jsm/Addons.js";

export default function ProjectCard({ photo, title, desc, link }) {
  return (
    <div className="group h-[430px] transition-all duration-300 hover:scale-[1.02] w-[22rem] mx-8 my-20 rounded-2xl overflow-hidden border-2 border-cyan-400 shadow-lg">
      {/* Image Section */}
      <div className="relative overflow-hidden ">
        <img
          src={photo}
          className="project-img w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
          alt={title}
        />
        {/* GitHub Icon */}
            <a href={link} target="_blank">       <FontAwesomeIcon icon={faGithub}   className="ico" /></a>
      </div>

      {/* Info Section */}
      <div className="p-5 bg-slate-100/40 backdrop-blur-2xl rounded-b-2xl text-black h-full">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}
