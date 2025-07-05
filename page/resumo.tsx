import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { Vidiocomopnet } from "../src/components/VidioComponent";
import mycv from "../src/assets/VC.pdf"
import myigcv from "../src/assets/(Inglês).pdf"

export const Resumo = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Vídeo de fundo */}
      <Vidiocomopnet />

      {/* Overlay escuro */}
      <div className="fixed inset-0 bg-black opacity-60 z-10" />

      {/* Conteúdo principal */}
      <div className="relative z-20">
        <Header />

        <main className="px-6 py-16 md:px-10 md:py-24 max-w-6xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center">
            Resumo Profissional
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sobre Mim */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500 col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Sobre Mim</h3>
              <p className="text-gray-200">
                Sou apaixonado por tecnologia, atento aos detalhes e curioso por novas soluções.
                Busco desenvolver minhas habilidades técnicas participando de projetos práticos que me ajudem a evoluir como programador.
                Meu objetivo é me tornar um desenvolvedor Full Stack e contribuir com soluções úteis para o mundo.
              </p>
            </div>

            {/* Talentos e Objetivos */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Talentos e Objetivos</h3>
              <ul className="list-disc list-inside text-gray-200 space-y-1">
                <li>Atenção a detalhes no código</li>
                <li>Facilidade de aprendizagem</li>
                <li>Proatividade e colaboração</li>
                <li>Foco no crescimento pessoal e técnico</li>
              </ul>
            </div>

            {/* Sonho */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Sonho</h3>
              <p className="text-gray-200">
                Tornar-me um desenvolvedor completo (Full Stack) e usar a tecnologia para resolver problemas reais e ajudar pessoas.
              </p>
            </div>

            {/* Contato */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Dados de Contato</h3>
             <ul className="text-gray-200 space-y-1">
        <li>📞 +258 87 660 7576</li>
        <li>📧 ngovenemoises2@gmail.com</li>
        <li>🌍 Maputo, Laulane</li>
        <li>💼 <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-100">LinkedIn</a></li>
        <li>💻 <a href="https://github.com/Moises2304" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline hover:text-cyan-100">GitHub</a></li>
        <li><a href="https://wa.me/258876607576" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                   Fale comigo no WhatsApp</a></li>
        </ul>
            </div>

            {/* Formação */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Cursos Adicionais</h3>
              <p className="text-gray-200">
                <strong>Bytes4Future</strong> (2024 - Presente): Formação em programação voltada à inclusão digital e capacitação de jovens para o mercado de tecnologia.
              </p>
            </div>

            {/* Experiência */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Experiência</h3>
              <p className="text-gray-200">
                <strong>Mecânico Auto</strong> (2023 - 2024): Trabalhei no Instituto Técnico Médio e Profissional de Moçambique. Desenvolvi habilidades práticas, raciocínio lógico e trabalho em equipe.
              </p>
            </div>

            {/* Voluntariado */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-cyan-500 col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Trabalho Voluntário</h3>
              <p className="text-gray-200">
              <a href={mycv} download className="btn-download">Baixar CV (Portuges)</a>  <br/>
              <a href={myigcv} download className="btn-download">Baixar CV (Inglês)</a>  <br/>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};
