import { useState } from "react";
import { Header } from "../src/components/header";
import { Vidiocomopnet } from "../src/components/VidioComponent";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <div className="relative w-full h-full overflow-hidden font-mono">
      {/* Vídeo de fundo */}
      <Vidiocomopnet />

      {/* Overlay escuro */}
      <div className="fixed inset-0 bg-black opacity-60 z-10" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-20">
        <Header />

        <main className="px-6 py-16 md:px-10 md:py-24 max-w-2xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 text-center">
            {`<ContacteMe />`}
          </h2>
          <p className="text-center text-sm text-gray-400 mb-10">{`// Envie uma mensagem direto para meu console pessoal`}</p>

          {/* Formulário de contacto */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 border border-cyan-700 p-6 rounded-xl bg-white/5 shadow-xl"
          >
            <div>
              <label htmlFor="nome" className="block mb-2 text-sm font-medium text-cyan-300">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                placeholder="ex: Moises andré"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-cyan-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                placeholder="seu@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block mb-2 text-sm font-medium text-cyan-300">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={5}
                value={formData.mensagem}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-white/10 text-white placeholder-gray-400 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 font-mono"
                placeholder="Digite sua ideia genial ou dúvida aqui..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 transition-colors text-white font-semibold py-3 px-6 rounded-md shadow-lg"
            >
              Enviar Mensagem
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            ou envie diretamente para{" "}
            <a
              href="mailto:ngovenemoises2@gmail.com"
              className="underline text-cyan-300 hover:text-cyan-100"
            >
              ngovenemoises2@gmail.com
            </a>
          </p>

          <p className="text-center text-xs mt-10 text-gray-500 italic">
            Desenvolvido com 💙 usando React + TailwindCSS
          </p>
        </main>
      </div>
    </div>
  );
};
