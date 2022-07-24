import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavbarItem from "./NavbarItem";
export function Navbar() {
  const [navbarVisible, setShowNavbar] = useState<boolean>(false);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Todo app logo
          </span>
        </a>
        <button
          onClick={() => {
            setShowNavbar(!navbarVisible);
          }}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`${
            navbarVisible ? "" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavbarItem to="/">Home</NavbarItem>
            </li>
            <li>
              <NavbarItem to="/todo">Todo</NavbarItem>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
