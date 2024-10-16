import Instagram from "./parts/image/Instagram.svg";
import Whatsapp from "./parts/image/Whatsapp.svg";
import Youtube from "./parts/image/Youtube.svg";
import telegram from "./parts/image/Telegram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className=" flex h-20 bg-gradient-to-r from-blue-600 to-purple-700 justify-center items-center font-bold text-4xl text-white">
        Tentukan Penawaran Terbaik Untuk mu Sekarang
      </div>
      <div className="bg-gradient-to-br from-cyan-100 to-purple-200 px-24 py-14">
        <div className="flex flex-row justify-start">
          <div className="mr-72">
            <div className="text-5xl font-extrabold text-black">LIVECST</div>
            <p className="text-wrap max-w-[30rem] my-5">
              In tristique sapien at risus venenatis, vel pellentesque magna
              vulputate. Nullam tristique tellus id mauris placerat pellentesque
              at eu dolor. Maecenas eu eros in odio rhoncus hendrerit.
              Suspendisse potenti. Curabitur at elit turpis. Integer bibendum
              feugiat eros ut consectetur. Vestibulum consequat id justo non
              fermentum. Nulla semper suscipit urna sit amet tincidunt.
            </p>
            <div className="flex flex-row">
              <Image src={Instagram} width={40} className="mr-5" />
              <Image src={Whatsapp} width={40} className="mr-5" />
              <Image src={Youtube} width={40} className="mr-5" />
              <Image src={telegram} width={40} className="mr-5" />
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-8">Company</div>
            <ul className="space-y-2">
              <li>About</li>
              <li>How it Work</li>
              <li>Features</li>
              <li>Testimonial</li>
              <li>Price</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex h-20 bg-gradient-to-r from-blue-600 to-purple-700 justify-center items-center font-normal text-2xl text-gray-400">
        © Livecst, 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
