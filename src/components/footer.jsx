export default function Footer() {
  return (
    <footer className=" text-white py-10 px-6 mt-12 border-3 rounded-2xl m-4  border-cyan-400/20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-6">

        {/* Left: Name & About */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold text-cyan-400">
            Mayuresh Vengurlekar
          </h3>
          <p className="mt-2 text-gray-400 text-sm leading-relaxed">
            I'm a software developer passionate about building modern, user-friendly web applications.
            <br />
            I specialize in full-stack development, UI design, and integrating AI into real-world projects.
          </p>
        </div>

        {/* Right: Footer Links (optional) */}
        <div className="lg:w-1/2 flex flex-col lg:items-end text-sm text-gray-400">
          <div className="flex gap-6 mb-2">
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
          </div>
          <p className="mt-2">&copy; {new Date().getFullYear()} Mayuresh Vengurlekar. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
