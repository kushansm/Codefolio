import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 
import letterk from "../assets/letter-k.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contacts', label: 'Contacts' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={letterk} className="w-10 h-10 object-contain" alt="K" />
          <span className="text-lg font-bold">
            Kushan | <span className="text-cyan-400">Software Engineer</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 transition duration-300 font-semibold rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2 transition duration-300 font-semibold rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
