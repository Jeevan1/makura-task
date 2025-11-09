import { Link } from "react-router";
import { Button } from "../ui/Button";

type MenuItem = {
  title: string;
  url: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  {
    title: "Why Finconex",
    url: "#why-finconex",
    icon: "/assets/images/menu/menu-1.svg",
  },
  {
    title: "Features",
    url: "#features",
    icon: "/assets/images/menu/menu-2.svg",
  },
  {
    title: "Pricing",
    url: "#pricing",
    icon: "/assets/images/menu/menu-3.svg",
  },
  {
    title: "Contact",
    url: "#contact",
    icon: "/assets/images/menu/menu-4.svg",
  },
];

const Header = () => {
  return (
    <header className="text-white py-5 flex items-center border-b-2 border-gray-600 bg-dark h-20 lg:sticky top-0 z-99">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 relative z-10">
            <Link className="md:hidden" to="/">
              <img src="/logo.png" alt="logo" className="w-40 h-9 " />
            </Link>
            <Link className="max-w-40 w-full" to="/">
              <img src="/logo.png" alt="logo" className="w-40 h-9 " />
            </Link>
          </div>
          <ul className="px-4 pt-20 lg:px-0 lg:pt-0 lg:flex lg:gap-8 ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.url}
                  className=" flex items-center gap-1 py-3 px-2 rounded-sm lg:py-0 lg:px-0 transition duration-200 hover:text-primary"
                >
                  <img alt={item.title} src={item.icon} className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="#contact-us" className="button-primary">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
