"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "text-teal-500"
      : "text-gray-300 hover:text-teal-500";
  };

  const getMobileLinkClass = (path: string) => {
    return pathname === path
      ? "px-4 py-5 text-teal-500 border-b border-gray-700"
      : "px-4 py-5 text-gray-300 hover:text-teal-500 border-b border-gray-700";
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-16 md:h-12 px-4 md:px-8 border-b border-gray-700">
        <div className="flex items-center h-full gap-4 md:gap-8">
          <Link
            href="/"
            className="text-white text-lg font-bold border-r border-gray-700 h-full flex items-center pr-4 md:pr-8"
          >
            malik-yakub
          </Link>
          <nav className="hidden md:flex h-full items-center">
            <ul className="flex h-full gap-8">
              <li className="border-r border-gray-700 h-full flex items-center pr-8">
                <Link href="/" className={getLinkClass("/")}>
                  _hello
                </Link>
              </li>
              <li className="border-r border-gray-700 h-full flex items-center pr-8">
                <Link href="/about-me" className={getLinkClass("/about-me")}>
                  _about-me
                </Link>
              </li>
              <li className="border-r border-gray-700 h-full flex items-center pr-8">
                <Link href="/projects" className={getLinkClass("/projects")}>
                  _projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex border-l border-gray-700 h-full items-center pl-8">
          <Link href="/contact-me" className={getLinkClass("/contact-me")}>
            _contact-me
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-300 hover:text-teal-500"
          aria-label="Toggle menu"
        >
          <i className={`ri-${isMenuOpen ? "close" : "menu"}-line text-xl`}></i>
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-12 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-gray-900/30 backdrop-blur-md"
            onClick={toggleMenu}
          ></div>
          <div className="relative h-full">
            <div className="px-4 py-5 text-gray-400 border-b border-gray-700 font-bold">
              # navigate:
            </div>
            <nav className="flex flex-col">
              <Link
                href="/"
                className={getMobileLinkClass("/")}
                onClick={toggleMenu}
              >
                _hello
              </Link>
              <Link
                href="/about-me"
                className={getMobileLinkClass("/about-me")}
                onClick={toggleMenu}
              >
                _about-me
              </Link>
              <Link
                href="/projects"
                className={getMobileLinkClass("/projects")}
                onClick={toggleMenu}
              >
                _projects
              </Link>
              <Link
                href="/contact-me"
                className={getMobileLinkClass("/contact-me")}
                onClick={toggleMenu}
              >
                _contact-me
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
