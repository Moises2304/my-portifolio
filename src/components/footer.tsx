export const Footer = () => {
  return (
    <footer className="text-white py-6 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Portfólio de Moisés André Ngovene. Todos os direitos reservados.
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/Moises2304"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/Moises Ngovene"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="ngovenemoises2@email.com"
            className="hover:text-cyan-700 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
