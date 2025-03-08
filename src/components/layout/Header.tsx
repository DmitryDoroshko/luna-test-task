import { Link } from "react-router";
import logo from "../../assets/logos/LunaEdgeLogo.svg";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center w-full fixed top-0 left-0 z-10">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10" />
      </div>
      <h1 className="text-xl font-bold">Pokémon Battle Tower</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/pokemon" className="hover:underline">Battle Form</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;