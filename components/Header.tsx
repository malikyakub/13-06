import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 border-b border-gray-700">
      <div className="text-white text-lg font-semibold">michael-weaver</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#"
              className="text-gray-300 hover:text-teal-500 border-b-2 border-orange-500"
            >
              _hello
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-teal-500">
              _about-me
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-teal-500">
              _projects
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-300 hover:text-teal-500">
              _contact-me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
