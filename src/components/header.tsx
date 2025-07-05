import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Ícones para o menu

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkStyles = "hover:text-cyan-300 transition-colors duration-200 block py-2";

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-900 px-4 md:px-20 py-6 text-white">
      <div className="flex justify-between items-center">
        <a href="/">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Moisés André Ngovene{" "}
            <span className="block md:inline text-sm font-medium text-cyan-200">
              | Desenvolvedor Fullstack
            </span>
          </h1>
        </a>

        {/* Botão de Menu Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Sobre
          </NavLink>
          <NavLink
            to="/resumo"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Resumo
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Projectos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </NavLink>
          <NavLink
            to="/resumo"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Resumo
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Projectos
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </NavLink>
        </div>
      )}
    </header>
  );
};
