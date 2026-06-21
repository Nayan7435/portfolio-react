import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-xl font-bold">Nayan Gohel</h1>

      {/* Desktop links - hidden on mobile */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-blue-400">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger button - visible only on mobile */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu - shows only when isOpen is true */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
