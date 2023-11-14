const NavBar = ({ title, setRoute }) => {
  return (
    <nav className="flex flex-wrap items-center justify-between bg-gray-800 p-6">
      <div className="mr-6 flex flex-shrink-0 items-center text-white">
        <span className="text-xl font-semibold tracking-tight">{title}</span>
      </div>
      <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
        <div className="text-sm lg:flex-grow">
          <button
            onClick={() => setRoute("home")}
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Home
          </button>
          <button
            onClick={() => setRoute("about")}
            className="mr-4 mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            About
          </button>
          <button
            onClick={() => setRoute("contact")}
            className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
