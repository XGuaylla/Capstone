import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-[#27374D]">
      <div className="nav  flex justify-between items-center w-[95%] mx-auto">
        <div>
          <a href="/" className="">
            <img
              className="w-40"
              src="src/assets/Multimart-logos_transparent.png"
            />
          </a>
        </div>
        <div className="">
          <ul className="flex item-center gap-[4vw]">
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold">
              Home
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold">
                Clothing
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold"> 
              Jewelry
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold">
                Electronics
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <HeartIcon />
          <CartIcon />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
