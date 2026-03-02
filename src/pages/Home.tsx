import { Link } from 'react-router-dom';
import { Crown, Gamepad2, Ticket, Scale, ShieldCheck, Terminal, GraduationCap, Users } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] w-full items-center justify-center overflow-hidden bg-background-dark pt-10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="High tech abstract digital network background"
            className="h-full w-full object-cover object-center"
            src="/images/hero-banner.jpg"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col items-center gap-6">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-2">
              Inovação em iGaming e Loterias
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl font-display">
              Inteligência Estratégica para o Mercado de Jogos e Loterias
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-300 md:text-xl font-light">
              Consultoria 360º para iGaming, regulação e desenvolvimento de projetos lotéricos com segurança jurídica e tecnologia de ponta.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                to="/loterias-municipais"
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:-translate-y-0.5"
              >
                Conheça Nossas Soluções
              </Link>
              <Link
                to="/loterias-municipais"
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
              >
                Área Pública / Loterias
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-surface-darker py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-display">Soluções Especializadas</h2>
            <p className="mt-4 text-lg text-slate-400">Atuamos em todas as frentes do mercado regulado.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Gamepad2 className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-display">Consultoria em iGaming</h3>
              <p className="text-slate-400 leading-relaxed">
                Estratégias completas para operadores de apostas esportivas e cassinos online entrarem no mercado regulado com eficiência.
              </p>
            </div>
            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Ticket className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-display">Desenvolvimento de Loterias</h3>
              <p className="text-slate-400 leading-relaxed">
                Planejamento, modelagem e execução técnica de projetos de loterias municipais e estaduais com foco em arrecadação.
              </p>
            </div>
            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface-dark p-8 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white font-display">Assessoria Jurídica</h3>
              <p className="text-slate-400 leading-relaxed">
                Expertise completa em Direito Regulatório, Compliance e adequação às normas vigentes para o setor de jogos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="relative border-y border-white/5 bg-background-dark py-24 overflow-hidden">
        {/* Abstract gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-surface-darker to-background-dark opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-display">
            Especialistas em Loterias Municipais
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 font-light">
            Transformamos a arrecadação pública em benefícios sociais através de projetos lotéricos seguros, transparentes e auditáveis.
          </p>
          <div className="mt-10">
            <Link
              to="/loterias-municipais"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:-translate-y-1"
            >
              <Crown className="mr-2 h-5 w-5" />
              Saiba mais sobre Projetos Públicos
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials / Stats */}
      <section className="bg-surface-darker py-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Diff 1 */}
            <div className="flex flex-col items-center text-center gap-3">
              <ShieldCheck className="h-10 w-10 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">Compliance Total</h3>
              <p className="text-xs text-slate-500">Aderência às normas legais</p>
            </div>
            {/* Diff 2 */}
            <div className="flex flex-col items-center text-center gap-3">
              <Terminal className="h-10 w-10 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">Tecnologia Auditável</h3>
              <p className="text-xs text-slate-500">Sistemas transparentes</p>
            </div>
            {/* Diff 3 */}
            <div className="flex flex-col items-center text-center gap-3">
              <GraduationCap className="h-10 w-10 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">Expertise Regulatória</h3>
              <p className="text-xs text-slate-500">Anos de experiência</p>
            </div>
            {/* Diff 4 */}
            <div className="flex flex-col items-center text-center gap-3">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-display">Foco Social</h3>
              <p className="text-xs text-slate-500">Resultados para a comunidade</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
