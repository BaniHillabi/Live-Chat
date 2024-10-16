import Navbar from "./parts/Navbar";
import Image from "next/image";
import heroimage from "./parts/image/Image.svg";
import { Title } from "@/components/ui/text";

const Hero = () => {
  return (
    <section className="px-4 md:px-16 lg:px-[7rem] bg-gradient-to-br from-cyan-100 to-purple-200 pb-0 md:pb-14">
      <Navbar />
      <div className="min-h-[40rem] flex flex-col md:flex-row items-center justify-between">
        <div className="text-left">
          <div className="space-y-4">
            <Title size="black" weight="bold" color="gradient_b">Nikmati Live Chat <br/>Dengan Banyak<br/> Fitur Menarik</Title>
            {/* <Title size="black" weight="bold" color="gradient_b">Dengan Banyak</Title>
            <Title size="black" weight="bold" color="gradient_b">Fitur Menarik</Title> */}
          </div>
          <div className="flex flex-col md:flex-row mt-14 items-center md:items-start space-y-4 md:space-y-0 md:space-x-14">
            <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-purple-700 text-white font-bold py-2 rounded-full w-full md:w-44">
              Daftar Sekarang
            </button>
            <button className="border-2 border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-2 rounded-full w-full md:w-44">
              Masuk
            </button>
          </div>
        </div>
        <div className="hidden md:block mt-10 md:mt-0">
          <Image src={heroimage} width={500} height={500} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
