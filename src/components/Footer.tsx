import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background-dark pt-16 pb-8 border-t border-white/5 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group w-fit">
              <img src="/images/logokadabra.png" alt="Kadabra Logo" className="h-8 w-auto" />
            </Link>
            <p className="mb-6 max-w-md text-sm text-slate-400">
              Inteligência estratégica para transformar o mercado de jogos e loterias no Brasil. Segurança, inovação e responsabilidade social.
            </p>
          </div>

          {/* Column 2 */}
          {/* 
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>
          */}

          {/* Column 3 */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#contact" className="hover:text-primary transition-colors">Privacidade</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">Termos de Uso</a></li> */}
              <li><a href="#contact" className="hover:text-primary transition-colors">Compliance</a></li>
              {/* <li><a href="#" className="hover:text-primary transition-colors">Jogo Responsável</a></li> */}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center md:flex md:items-center md:justify-between md:text-left gap-4">
          <div>
            <p className="text-xs text-slate-500">© 2024 Kadabra Consultoria. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-500 mt-2 md:mt-1">São Paulo - Brasil</p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3">
            <span className="text-xs text-slate-500">Siga a Kadabra</span>
            <a
              href="https://www.instagram.com/kadabr.a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition-all hover:border-primary hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark"
              aria-label="Instagram da Kadabra (@kadabr.a)"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
