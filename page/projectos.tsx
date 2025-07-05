import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { Vidiocomopnet } from "../src/components/VidioComponent";

export const Projecto = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Vídeo de fundo */}
      <Vidiocomopnet />

      {/* Overlay escuro */}
      <div className="fixed inset-0 bg-black opacity-60 z-10" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-20">
        <Header />

        <main className="px-6 py-16 md:px-10 md:py-24 max-w-6xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
            Meus Projetos
          </h2>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Projeto 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Tiyane Doações</h3>
              <p className="text-gray-200 mb-2">
                Plataforma para gerenciamento de doações e entregas com dashboard e controle de agentes.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                 Backend: Next.js • Prisma • PostgreSQL • Express • MongoDB ... <br/>
                Frontend: React •  Vite • TypeScript • TailwindCSS • Axios
              </p>
              <a
                href="https://github.com/maudlyn01/Tiyane-Doacoes"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>

            {/* Projeto 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">spotidados-project-g1</h3>
              <p className="text-gray-200 mb-2">
              Projeto colaborativo de app mobile criado pelo Grupo 1 da 2ª turma do Bytes4Future Moz (2025), com o objetivo de visualizar dados históricos de usuários do Spotify.
              </p>
              <p className="text-sm text-gray-400 mb-4">
               React Native • TypeScript • Figma (prototipagem e design system)
              </p>
              <a
                href="https://github.com/afonsorelane/spotidados-project-g1"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>

            {/* Projeto 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">mini-plataforma-filmes-b4f</h3>
              <p className="text-gray-200 mb-2">
               Projeto colaborativo dos alunos do Bytes 4 Future para praticar JavaScript, com uma aplicação que cadastra, edita, remove, lista e exibe detalhes de filmes, usando um array de objetos como base de dados.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                JavaScript • Css • HTML
              </p>
              <a
                href="https://github.com/Jay-Ubisse/mini-plataforma-filmes-b4f"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>

              {/* Projeto 4 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">projecto-ecommerce-b4f</h3>
              <p className="text-gray-200 mb-2">
              Projeto do Bytes4Future para praticar e-commerce, com uma aplicação que simula uma loja online com visualização de produtos, carrinho e finalização de compras.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                JavaScript • Css • HTML
              </p>
              <a
                href="https://github.com/Jay-Ubisse/projecto-ecommerce-b4f"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>

              {/* Projeto 5 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-cyan-500 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Aniversario</h3>
              <p className="text-gray-200 mb-2">
              Um site feito para transformar felicitações em memórias digitais. <br/>
              Homenageie quem você ama com uma mensagem única de aniversário.
              </p>
              <p className="text-sm text-gray-400 mb-4">
                JavaScript • Css • HTML
              </p>
              <a
                href="https://github.com/Moises2304/aniversario"
                className="text-cyan-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto →
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
