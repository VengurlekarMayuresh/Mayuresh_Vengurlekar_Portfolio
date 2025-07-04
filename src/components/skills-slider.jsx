// SkillsSlider.jsx

import ContactForm from "./contact";
import Footer from "./footer";
import Project from "./projects";

const skills = [
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", logo: "./tailwindphtou.png" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

export default function SkillsSlider() {
  // Repeat the skills at least twice to avoid gaps and ensure continuity
  const repeatedSkills = [...skills, ...skills];

  return (
    <div className="bg-gradient-to-br from-[#0a1f3c] via-[#0c2c4d] to-[#121212] h-auto py-10 overflow-hidden">
      <h2 className="text-center text-white text-4xl font-bold mb-6">
        My Skills
      </h2>

      <div className="relative overflow-hidden w-full p-10">
        <div className="skills-marquee">
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[140px] mx-4"
            >
              <div className="w-40 h-40 mx-10 rounded-full bg-[#161B22] border-4 border-cyan-400 shadow-[0_0_20px_#00FFFF] flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-20 h-20"
                />
              </div>
              <p className="text-white mt-3 text-lg font-semibold">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
     <section id="projects" className="scroll-mt-20">
        <Project />
      </section>
      <section id="contact">
        <ContactForm/>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
