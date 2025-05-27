import { useState } from "react";
import { NavLink } from "react-router-dom";

const linkStyles = "hover:text-cyan-300";

export const Header = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return (
    <header className="bg-gradient-to-r from-cyan-500 to-cyan-900 px-20 py-10 text-white flex justify-between">
      <h1 className="text-extraGG font-bold text-cinha-200">
        B4F TechZone{" "}
        <span className="text-2xl font-medium">
          {isUserAuthenticated ? "| Coronel Ubisse" : ""}
        </span>
      </h1>
      <div className="flex items-center gap-16">
        <nav className="space-x-8 text-lg">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            About
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
            to="/projecto"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Projecto
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `${linkStyles} ${isActive ? "text-cyan-300" : ""}`
            }
          >
            Contacto
          </NavLink>
        </nav>
        <button
          className="bg-white rounded-md text-cyan-600 px-4 py-2 font-medium"
          onClick={() => setIsUserAuthenticated(!isUserAuthenticated)}
        >
          {isUserAuthenticated ? "Terminar Sessão" : "Iniciar Sessão"}
        </button>
      </div>
    </header>
  );
};
