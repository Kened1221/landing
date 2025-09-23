export default function InitImg() {
  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center perspective-[1600px] py-10 gap-8">
      <div
        className="relative w-full aspect-video rounded-lg border-3 border-gray-700 overflow-hidden transition-transform duration-500 hover:scale-[1.04] hover:shadow-3xl"
        style={{
          transform: "rotateY(-25deg) rotateX(1deg)",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.6), -20px 0 40px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="/images/img1.png"
          alt="Vista principal"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-5 bg-gray-800/90 backdrop-blur rounded-b-lg"></div>
      </div>

      <div
        className="relative w-[180px] h-[320px] md:w-[270px] md:h-[480px] rounded-2xl bg-black border-l-3 border-b-5 border-2 border-gray-700 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 md:absolute md:bottom-0 md:right-[-135px] origin-bottom-left"
        style={{
          transform: "rotateX(10deg)",
          transformStyle: "preserve-3d",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.6), -20px 0 40px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src="/images/img2.png"
          alt="Vista secundaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-800 rounded-lg"></div>
      </div>

      <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] group md:absolute md:bottom-[-60px] md:left-[60px]">
        <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl -z-10 group-hover:blur-[40px] transition-all duration-700"></div>

        <div className="absolute inset-0 rounded-full p-[3px] animate-spin-slow bg-gradient-to-r from-primary via-purple-500 to-primary">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>

        <img
          src="/images/img3.jpg"
          alt="Entidad"
          className="absolute inset-0 w-full h-full object-cover rounded-full border-[6px] border-white shadow-xl group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
        />
      </div>
    </div>
  );
}
