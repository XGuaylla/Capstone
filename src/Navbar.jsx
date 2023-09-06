import CartIcon from "./components/icons/CartIcon";
import HeartIcon from "./components/icons/HeartIcon";

export default function Navbar() {
  return (
    <header className="bg-[#27374D]">
      <nav className="nav  flex justify-between items-center w-[95%] mx-auto">
        <div>
          <a href="/" className="">
            <img className="w-32" src="src/assets/playpalace_logo.png" />
          </a>
        </div>
        <div>
          <ul className="flex item-center gap-[4vw]">
            <li>
              <a
                className="font-bold hover:text-gray-500 text-[#DDE6ED] text-3xl text-bold"
                href="/videogame"
              >
                Video Games
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:text-gray-500 text-[#DDE6ED] text-3xl text-bold"
                href="/boardgames"
              >
                Board Games
              </a>
            </li>
            <li>
              <a
                className="font-bold hover:text-gray-500 text-[#DDE6ED] text-3xl text-bold"
                href="/cardgames"
              >
                Card Games
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <HeartIcon />
          <CartIcon />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
}
