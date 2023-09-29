import CartIcon from "./icons/CartIcon";
import HeartIcon from "./icons/HeartIcon";
import { Link } from "react-router-dom";

export default function Navbar(token, setToken) {
  function logout() {
    setToken(null)
    localStorage.removeItem('token')
  }
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
             <Link to='/'>Home</Link>
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold">
                <Link to='/clothing'>Clothing</Link>
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold"> 
              <Link to='/jewelry'>Jewelry</Link>
            </li>
            <li className="font-bold hover:text-gray-500 text-[#DDE6ED] text-2xl text-bold">
              <Link to='/electronic'>Electronics</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <HeartIcon />
          <CartIcon />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           <Link to="/login">Login</Link>
          </button>
          {/* { token && <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
           Logout
          </button>} */}
        </div>
      </div>
    </header>
  );
}
