import Instagram from "./parts/image/Instagram.svg";
import Whatsapp from "./parts/image/Whatsapp.svg";
import Youtube from "./parts/image/Youtube.svg";
import Telegram from "./parts/image/Telegram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      {/* Top Section */}
      <div className="flex h-20 bg-gradient-to-r from-blue-600 to-purple-700 justify-center items-center font-bold text-xl sm:text-2xl md:text-4xl text-white px-4 sm:px-6">
        Tentukan Penawaran Terbaik Untukmu Sekarang
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-br from-cyan-100 to-purple-200 px-4 sm:px-6 md:px-8 lg:px-24 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Brand and Description */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
              LIVECST
            </div>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
              In tristique sapien at risus venenatis, vel pellentesque magna
              vulputate. Nullam tristique tellus id mauris placerat pellentesque
              at eu dolor. Maecenas eu eros in odio rhoncus hendrerit.
              Suspendisse potenti. Curabitur at elit turpis. Integer bibendum
              feugiat eros ut consectetur. Vestibulum consequat id justo non
              fermentum. Nulla semper suscipit urna sit amet tincidunt.
            </p>
            <div className="flex flex-row mt-6">
              <Image src={Instagram} width={40} height={40} alt="Instagram" className="mr-4 sm:mr-6" />
              <Image src={Whatsapp} width={40} height={40} alt="Whatsapp" className="mr-4 sm:mr-6" />
              <Image src={Youtube} width={40} height={40} alt="Youtube" className="mr-4 sm:mr-6" />
              <Image src={Telegram} width={40} height={40} alt="Telegram" />
            </div>
          </div>

          {/* Company Links */}
          <div className="md:w-1/4">
            <div className="text-2xl sm:text-3xl font-bold mb-6">
              Company
            </div>
            <ul className="space-y-2 text-base sm:text-lg text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">About</li>
              <li className="hover:text-gray-800 cursor-pointer">How it Works</li>
              <li className="hover:text-gray-800 cursor-pointer">Features</li>
              <li className="hover:text-gray-800 cursor-pointer">Testimonial</li>
              <li className="hover:text-gray-800 cursor-pointer">Price</li>
              <li className="hover:text-gray-800 cursor-pointer">Career</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex h-16 bg-gradient-to-r from-blue-600 to-purple-700 justify-center items-center font-normal text-base sm:text-lg md:text-2xl text-gray-300">
        © Livecst, 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

