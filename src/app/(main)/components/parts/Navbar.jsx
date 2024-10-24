import { Title } from "@/components/ui/text";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-7 px-4">
      <Title color="gradient_a" className="text-5xl font-extrabold">LIVECST</Title>
      <div className="hidden md:flex space-x-4">
        <button className="bg-gradient-to-r from-blue-600 to-purple-700 hover:bg-purple-700 text-white font-bold py-2 rounded-full w-52">
          Daftar Sekarang
        </button>
        <button className="border-2 border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-2 rounded-full w-52">
          Masuk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
