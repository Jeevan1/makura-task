import { Link } from "react-router";
import { Button } from "../ui/Button";
import { useState } from "react";

type MenuItem = {
  title: string;
  url: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Why Finconex",
    url: "/#why-finconex",
    icon: "/assets/images/menu/menu-1.svg",
  },
  {
    title: "Compliance",
    url: "#compliance",
    icon: "/assets/images/menu/menu-2.svg",
  },
  {
    title: "Vison",
    url: "#vision",
    icon: "/assets/images/menu/menu-3.svg",
  },
  {
    title: "Team",
    url: "#teams",
    icon: "/assets/images/menu/menu-4.svg",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="relative text-white py-5 flex items-center border-b-2 border-gray-600 bg-dark md:h-20 lg:sticky top-0 z-99">
      <div className="container">
        <div
          className={`flex justify-between md:items-center flex-col md:flex-row`}
        >
          <div className="flex items-center gap-2 relative z-10">
            <Link className="max-w-40 w-full" to="/">
              <img src="/logo.png" alt="logo" className="w-40 h-9 " />
            </Link>
          </div>
          <ul className="hidden md:flex px-4 pt-20 lg:px-0 lg:pt-0 lg:flex lg:gap-8 ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className=" flex items-center gap-1 py-3 px-2 rounded-sm lg:py-0 lg:px-0 transition duration-200 hover:text-primary"
                >
                  <img alt={item.title} src={item.icon} className="h-5 w-5" />
                  <span className="font-proxima italic font-extrabold">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <Link to="#contact-us" className="hidden md:inline-block ">
            <Button variant="primary">Contact Us</Button>
          </Link>
        </div>
        <div
          className="md:hidden absolute top-5 right-5 cursor-pointer z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {!isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          )}
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out border-t border-gray-600 mt-6 ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 py-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 font-semibold relative">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.url}
                  className="flex items-center gap-1 py-3 px-2 rounded-sm lg:py-0 lg:px-0 transition duration-200 hover:text-primary"
                >
                  <img alt={item.title} src={item.icon} className="h-5 w-5" />
                  <span className="font-proxima italic font-extrabold">
                    {item.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
