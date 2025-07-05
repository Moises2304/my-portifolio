import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { Vidiocomopnet } from "../src/components/VidioComponent";
import cv from "../src/assets/(Inglês).pdf"
export const Home = () => {
    return(
    <div className="relative w-full h-screen overflow-hidden">
      {/* Vídeo como background */}
      <Vidiocomopnet />

      {/* Overlay escuro por cima do vídeo */}
      <div className="fixed inset-0 bg-black opacity-60 z-10" />

      {/* Conteúdo sobreposto */}
      <div className="relative z-20">
        <Header />

       <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 md:px-10 text-center font-mono">
  <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
    {`<MoisesNgovene />`}
  </h2>
  <small className="text-gray-300 text-base mb-4">// Desenvolvedor Fullstack</small>

  <div className="flex flex-wrap justify-center gap-3 text-sm text-white">
    <span className="bg-cyan-600 px-3 py-1 rounded-full">React</span>
    <span className="bg-cyan-600 px-3 py-1 rounded-full">Node.js</span>
    <span className="bg-cyan-600 px-3 py-1 rounded-full">MongoDB</span>
    <span className="bg-cyan-600 px-3 py-1 rounded-full">TailwindCSS</span>
    <span className="bg-cyan-600 px-3 py-1 rounded-full">TypeScript</span>
  </div>

  <p className="mt-4 text-gray-300 text-sm">// Escrevendo código limpo, funcional e com propósito.</p>

  <div className="mt-8 flex justify-center gap-4">
    <a href="/project" className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md text-white font-semibold">Ver Projetos</a>
    <a href={cv} download className="border border-cyan-400 px-4 py-2 rounded-md text-cyan-300 hover:bg-cyan-900">Baixar CV</a>
   
  </div>
</main>


        <Footer />
      </div>
    </div>
    )
}