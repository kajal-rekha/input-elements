import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", link: "/home" },
    { name: "Details", link: "/details" },
  ];
  return (
    <header className="h-20 fixed top-0 left-0 right-0 z-[1000] flex items-center bg-gray-900">
      <nav className="wrapper flex justify-between items-center text-gray-200">
        <div className="logo">
          <Link className="text-xl">Logo</Link>
        </div>
        <div className="menu-items">
          <ul className="flex gap-5 justify-between text-md">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink to={link.link} className="text-lg">
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
