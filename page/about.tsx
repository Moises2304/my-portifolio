import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { Vidiocomopnet } from "../src/components/VidioComponent";

export const About = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Vídeo como background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Vidiocomopnet />
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Conteúdo sobreposto ao vídeo */}
      <div className="relative z-10">
        <Header />
        <section className="px-6 py-12 md:px-10 md:py-20 max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
            Sobre Mim
          </h2>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src="/src/assets/moises.enc"
              alt="Foto de Moisés André Ngovene"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-cyan-500"
            />

            <div>
              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4">
                Olá! Eu sou <strong>Moisés André Ngovene</strong>, um
                desenvolvedor Fullstack apaixonado por transformar ideias em
                soluções digitais práticas e impactantes. Tenho experiência com
                tecnologias modernas como{" "}
                <span className="text-cyan-300">React</span>,{" "}
                <span className="text-cyan-300">Node.js</span>,{" "}
                <span className="text-cyan-300">TypeScript</span>,{" "}
                <span className="text-cyan-300">MongoDB</span>, entre outras.
              </p>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-4">
                Ao longo da minha jornada, participei de diversos projetos
                sociais e educacionais, com foco em acessibilidade, inovação e
                impacto comunitário. Meu objetivo é sempre aprender, crescer e
                contribuir com soluções eficientes e bem projetadas.
              </p>

              <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                Quando não estou programando, gosto de compartilhar
                conhecimento, explorar novas tecnologias e colaborar em
                iniciativas que fazem a diferença.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};
