import logo from "../assets/react.svg"; // Usa el logo real

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center h-14">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Dragon Ball API" className="h-10 w-auto" />
        </a>

        {/* Navegación */}
        <nav className="flex items-center gap-6 text-gray-700 font-semibold">
          <a
            href="https://web.dragonball-api.com/documentation"
            className="hover:text-yellow-500 transition"
          >
            Docs
          </a>
          <a
            href="https://web.dragonball-api.com/about"
            className="hover:text-yellow-500 transition"
          >
            About
          </a>
          <a
            href="https://web.dragonball-api.com/support"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-4 py-1 rounded-md transition"
          >
            SUPPORT US
          </a>
        </nav>
      </div>
    </header>
  );
};
