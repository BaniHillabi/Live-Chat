
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-3xl font-bold text-black">LIVE CST</div>
      <div className="flex space-x-4">
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
          Daftar Sekarang
        </button>
        <button className="border-2 border-purple-600 hover:bg-purple-100 text-purple-600 font-bold py-2 px-4 rounded-full">
          Masuk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
