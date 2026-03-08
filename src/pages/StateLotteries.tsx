import { ArrowRight, TrendingUp, Scale, BarChart3, FileText, Monitor, ShieldCheck, Check } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export function StateLotteries() {
  return (
    <div className="flex flex-col min-h-screen bg-background-dark text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background-dark py-20 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase">
              Consultoria Especializada
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
              A Solução Completa para <span className="text-primary">Gestão de Loterias Estaduais</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
              Aumente a arrecadação do seu estado sem subir impostos. Implementamos loterias estaduais com segurança jurídica, transparência e alta tecnologia, revertendo recursos diretamente para políticas públicas e investimentos sociais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5"
              >
                Leve para o seu estado
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#legal"
                className="inline-flex justify-center items-center px-8 py-4 border border-white/20 text-base font-medium rounded-lg text-slate-300 bg-surface-dark hover:bg-surface-darker transition-all"
              >
                Entenda a Lei
              </a>
            </div>
          </div>

          <div className="relative lg:h-full flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface-dark">
              <img
                alt="Modern city architecture representing growth and structure"
                className="w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105 transform"
                src="/images/consultoria.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="bg-primary/90 p-3 rounded-lg backdrop-blur-sm">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300 uppercase tracking-wider font-display">Potencial de Receita</p>
                    <p className="text-xl font-bold font-display">Investimento Social Direto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Section */}
      <section id="legal" className="py-16 bg-surface-dark border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Scale className="mx-auto h-12 w-12 text-primary mb-4" />
          <h2 className="text-3xl font-bold text-white mb-6 font-display">Segurança Jurídica Garantida pelo STF</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            O Supremo Tribunal Federal (STF) decidiu que a exploração de loterias não é exclusividade da União. Isso significa que{' '}
            <span className="text-primary font-semibold">os Estados têm competência para criar e explorar suas próprias loterias</span>,
            estruturando projetos estaduais com base legal sólida, transparência e controle rigoroso.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase font-display">Nossos Serviços</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-display">
              Expertise de Ponta a Ponta
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
              Oferecemos todo o suporte necessário para a implementação bem-sucedida da sua loteria estadual.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scale, title: "Consultoria Jurídica", desc: "Análise completa da legislação estadual e adequação às normas federais para garantir total segurança jurídica ao projeto." },
              { icon: BarChart3, title: "Diagnóstico de Potencial", desc: "Estudos de viabilidade econômica e projeção de arrecadação com base no perfil demográfico e econômico do estado." },
              { icon: FileText, title: "Modelagem de Edital", desc: "Elaboração técnica de leis, regulamentos e editais de licitação para contratação de operadores ou sistemas." },
              { icon: Monitor, title: "Plataforma Tecnológica", desc: "Soluções de software para gestão, venda e controle de jogos em escala estadual, com certificações de segurança internacionais." },
              { icon: ShieldCheck, title: "Gestão e Compliance", desc: "Monitoramento contínuo das operações, garantindo transparência, jogo responsável e conformidade legal." }
            ].map((service, i) => (
              <div key={i} className={`bg-surface-dark rounded-xl p-8 border border-white/5 hover:border-primary/50 transition-colors shadow-sm hover:shadow-lg group ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{service.title}</h3>
                <p className="text-slate-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-surface-dark relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6 font-display">
                Por que investir em uma <span className="text-primary">Loteria Estadual?</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8">
                Além de ser uma fonte de receita limpa, a loteria estadual amplia a capacidade de investimento do governo,
                financiando programas estruturantes em saúde, educação, segurança pública, esporte e cultura sem aumentar impostos.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Aumento de Arrecadação", desc: "Receita nova e recorrente para o orçamento estadual." },
                  { title: "Fortalecimento da Economia", desc: "Rede de pontos de venda movimenta o comércio em todo o estado." },
                  { title: "Investimento Social Direcionado", desc: "Recursos carimbados para políticas públicas prioritárias." },
                  { title: "Geração de Empregos", desc: "Criação de postos de trabalho diretos e indiretos em toda a cadeia lotérica." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0">
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary">
                        <Check className="h-4 w-4 font-bold" />
                      </span>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-white font-display">{item.title}</h4>
                      <p className="mt-1 text-slate-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                alt="Executive team discussing strategy"
                className="rounded-2xl shadow-2xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-500"
                src="/images/loteria.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-20 bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-display">Nossa Metodologia</h2>
            <p className="mt-4 text-slate-400">Passo a passo para a implantação</p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: 1, title: "Diagnóstico", desc: "Análise de potencial e viabilidade do projeto estadual." },
                { step: 2, title: "Estruturação Legal", desc: "Criação da lei, regulamentação e modelo de governança." },
                { step: 3, title: "Aprovação", desc: "Trâmite legislativo, controle de órgãos de fiscalização e sanção." },
                { step: 4, title: "Licitação", desc: "Processo de escolha do operador ou parceiro tecnológico." },
                { step: 5, title: "Operação", desc: "Lançamento e gestão contínua com monitoramento de resultados." }
              ].map((item, i) => (
                <div key={i} className="bg-surface-dark p-6 rounded-xl border border-white/5 shadow-sm flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mb-4 shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-white font-display">{item.title}</h3>
                  <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
}

