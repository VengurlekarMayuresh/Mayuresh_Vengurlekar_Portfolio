export default function ContactCard({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4 bg-white/5 border border-cyan-400/20 backdrop-blur-md p-4 rounded-xl hover:border-cyan-400 hover:shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
      {/* Icon Box */}
      <div className="text-cyan-400 text-xl p-3 bg-[#0D1117] border border-cyan-500/30 rounded-full">
        {icon}
      </div>

      {/* Title & Desc */}
      <div className="flex flex-col justify-center">
        <h3 className="text-white text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-gray-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}
