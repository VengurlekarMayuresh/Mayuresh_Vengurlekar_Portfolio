export default function Card({ head, des, icon }) {
  return (
    <div className="group flex gap-4 justify-center items-center bg-[#0D1117] text-white border border-cyan-400 p-4 rounded-3xl shadow-md hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
      
      {/* Icon Container with color transition on hover */}
      <div className="text-4xl p-3 rounded-xl border border-cyan-500 text-cyan-300 shadow-inner transition-colors duration-300 group-hover:bg-gradient-to-br group- hover:from-cyan-400 group-hover:to-fuchsia-500 group-hover:text-white">
        {icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col ">
        <h2 className="text-lg sm:text-xl font-bold text-cyan-200 mb-1">{head}</h2>
        <p className="text-sm sm:text-base text-gray-300">{des}</p>
      </div>

    </div>
  );
}
