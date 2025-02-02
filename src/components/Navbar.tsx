import { FC, useState } from "react";
import { NavLink } from "react-router-dom";

const CustomLink: FC<{ name: string; path: string }> = ({ name, path }) => (
  <NavLink
    className={({ isActive }) =>
      isActive
        ? "md:border-b-2 border-white md:py-7 flex border-r-2 md:border-r-0 "
        : " flex "
    }
    to={path}
  >
    {name}
  </NavLink>
);

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function showSideBar(): void {
    setIsSidebarOpen(true);
  }

  function hideSideBar(): void {
    setIsSidebarOpen(false);
  }

  return (
    <>
      <nav className="font-mono flex justify-between z-10 h-16 fixed w-full">
        <div className="mt-6 ml-6 flex items-center gap-16 lg:pl-16">
          <img
            className="w-10 h-10 lg:h-12 lg:w-12"
            src="/shared/logo.svg"
            alt="space logo"
          />
          <p className="lg:w-[40vw] lg:border-[1px] lg:border-solid lg:border-white"></p>
        </div>

        {/* Mobile Menu Icon */}
        <li className="md:hidden" onClick={showSideBar}>
          <a href="#">
            <svg
              className="ml-auto mr-5"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#e8eaed"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>

        {/* Desktop Navigation */}
        <ul className="md:backdrop-blur-sm md:text-sm md:bg-white/5 md:text-white md:pl-16 md:w-[90vw] md:h-20 md:gap-4 md:flex md:items-center md:justify-around hidden">
          <li>
            <CustomLink name="00 Home" path="/" />
          </li>
          <li>
            <CustomLink path="/destination" name="01 Destination" />
          </li>
          <li>
            <CustomLink path="/crew" name="02 Crew" />
          </li>
          <li>
            <CustomLink path="/technology" name="04 Technology" />
          </li>
        </ul>

        {/* Sidebar with Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50" // Overlay
            onClick={hideSideBar} // Click anywhere outside sidebar to close
          >
            <ul
              id="sidebar"
              className="gap-5 flex pl-5 text-lg fixed top-0 right-0 h-screen w-3/4 text-white backdrop-blur-sm bg-white/5 flex-col justify-start z-50 shadow-slate-900/45"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside sidebar
            >
              <li onClick={hideSideBar}>
                <a href="#">
                  <svg
                    className="ml-auto mt-5 mr-5"
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#e8eaed"
                  >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                  </svg>
                </a>
              </li>
              <li>
                <CustomLink name="00 Home" path="/" />
              </li>
              <li>
                <CustomLink path="/destination" name="01 Destination" />
              </li>
              <li>
                <CustomLink path="/crew" name="02 Crew" />
              </li>
              <li>
                <CustomLink path="/technology" name="04 Technology" />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
