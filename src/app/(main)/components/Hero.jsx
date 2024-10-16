import Navbar from "./parts/Navbar";
import Image from "next/image";
import heroimage from "./parts/image/Image.svg";

const Hero = () => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-br from-cyan-100 to-purple-200 pb-14">
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-between">
        {/* Konten Teks */}
        <div className="flex-1">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
              Nikmati Live Chat
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
              dengan banyak
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8">
              fitur menarik
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row mt-8 sm:mt-10">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-purple-700 text-white font-bold py-2 rounded-full mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto">
              Daftar Sekarang
            </button>
            <button className="border-2 border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-2 rounded-full w-full sm:w-auto">
              Masuk
            </button>
          </div>
        </div>
        {/* Gambar */}
        <div className="flex-1 mt-8 md:mt-0">
          <Image 
            src={heroimage} 
            alt="Hero Image" 
            className="w-full max-w-md mx-auto" 
            width={500} 
            height={500} 
            priority 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

