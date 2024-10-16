import Navbar from "./parts/Navbar";
import Image from "next/image";
import heroimage from "./parts/image/Image.svg";

const Hero = () => {
  return (
    <section className="px-[7rem] bg-gradient-to-br from-cyan-100 to-purple-200 pb-14">
      <Navbar />
      <div className="min-h-[40rem] flex flex-row items-center justify-between">
        <div>
          <div>
            <h1 className="text-7xl font-bold text-gray-900 mb-7">
              Nikmati Live Chat
            </h1>
            <h1 className="text-7xl font-bold text-gray-900 mb-7">
              dengan banyak
            </h1>
            <h1 className="text-7xl font-bold text-gray-900 mb-7">
              fitur menarik
            </h1>
          </div>
          <div className="flex flex-row mt-14">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-purple-700 text-white font-bold py-2 rounded-full mr-14 w-44">
              Daftar Sekarang
            </button>
            <button className="border-2 border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-2 rounded-full w-44">
              Masuk
            </button>
          </div>
        </div>
        <div>
          <Image src={heroimage} width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
