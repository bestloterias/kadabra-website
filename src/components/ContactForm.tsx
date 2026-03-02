export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-surface-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white font-display">Vamos Conversar?</h2>
          <p className="mt-4 text-xl text-slate-400">
            Entre em contato para agendar uma reunião de apresentação sem compromisso.
          </p>
        </div>
        <div className="bg-surface-darker rounded-2xl p-8 border border-primary/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-primary"></div>
          <form
            className="space-y-6"
            action="https://formsubmit.co/kadabracomercial@gmail.com"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300" htmlFor="name">Nome</label>
                <input
                  className="mt-1 block w-full rounded-md border-white/10 bg-surface-dark text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4"
                  id="name"
                  name="name"
                  placeholder="Seu nome completo"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300" htmlFor="city">Município/Órgão</label>
                <input
                  className="mt-1 block w-full rounded-md border-white/10 bg-surface-dark text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4"
                  id="city"
                  name="city"
                  placeholder="Cidade ou Prefeitura"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300" htmlFor="email">Email Corporativo</label>
                <input
                  className="mt-1 block w-full rounded-md border-white/10 bg-surface-dark text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4"
                  id="email"
                  name="email"
                  placeholder="seu@email.com.br"
                  type="email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300" htmlFor="phone">Telefone</label>
                <input
                  className="mt-1 block w-full rounded-md border-white/10 bg-surface-dark text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm h-12 px-4"
                  id="phone"
                  name="phone"
                  placeholder="(00) 00000-0000"
                  type="tel"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300" htmlFor="message">Mensagem</label>
              <textarea
                className="mt-1 block w-full rounded-md border-white/10 bg-surface-dark text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-4"
                id="message"
                name="message"
                placeholder="Como podemos ajudar sua cidade?"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-[1.01]" type="submit">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
