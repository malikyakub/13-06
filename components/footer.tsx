import React from "react";

const Footer = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/malikyakub",
      icon: "ri-github-fill",
    },
    {
      name: "linkedIn",
      url: "https://www.linkedin.com/in/malik-yakub-90a752346",
      icon: "ri-linkedin-fill",
    },
    {
      name: "frontend-mentor",
      url: "https://www.frontendmentor.io/profile/malikyakub",
      icon: "ri-code-box-fill",
    },
  ];

  return (
    <footer className="relative flex justify-between items-center h-12 px-4 md:px-8 border-t border-gray-700">
      <div className="flex items-center h-full justify-between w-full">
        <div className="text-white text-lg font-bold border-r border-gray-700 h-full flex items-center pr-4 md:pr-8">
          find-me-in:
        </div>
        <nav className="flex h-full items-center">
          <ul className="flex h-full">
            {links.map((link, index) => (
              <li
                key={link.name}
                className={`h-full flex items-center border-r border-gray-700 px-4 md:px-8 ${
                  index === 0 ? "border-l border-gray-700" : ""
                } ${index === links.length - 1 ? "border-r-0" : ""}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-teal-500 flex items-center justify-between w-full gap-4"
                  aria-label={link.name}
                >
                  <span className="hidden md:inline">@{link.name}</span>
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
