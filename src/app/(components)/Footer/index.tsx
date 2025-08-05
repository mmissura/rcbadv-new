export function Footer() {
  const getYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-slate-600">
      <div className="text-white w-full px-6 lg:px-12 py-12 flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Contatos - alinhado à esquerda sempre */}
        <div className="w-full lg:w-auto flex-1">
          <p className="text-xl font-bold mb-2">Contato</p>
          <div className="space-y-1 text-sm">
            <p>
              Fixo: <strong>(19) 3561-9398</strong>
            </p>
            <p>
              Henrique:
              <a
                href="https://wa.me/551997622842"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <strong>(19) 9 9762-2842</strong>
              </a>
            </p>
            <p>
              Fábio:
              <a
                href="https://wa.me/5519971413322"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <strong>(19) 9 7141-3322</strong>
              </a>
            </p>
            <p>
              Anderson:
              <a
                href="https://wa.me/551997400215"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <strong>(19) 9 9740-0215</strong>
              </a>
            </p>
          </div>
        </div>

        {/* Endereço - alinhado à esquerda no mobile, com título centralizado no desktop */}
        <div className="w-full lg:w-auto flex-1 text-left lg:text-right">
          <p className="text-xl font-bold mb-2 text-left lg:text-right">
            Endereço
          </p>
          <p className="text-sm">
            Rua Pereira Bueno, 325 - Centro - Pirassununga/SP
          </p>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-white w-full px-6 lg:px-12">
        <p className="text-center text-xs">
          Copyright © {getYear} Rosolem, Cabianca & Bonelli Sociedade de
          Advogados. CNPJ 26.205.471/0001-20.
        </p>
        <p className="text-center text-[0.6rem] pt-3 pb-8">
          Desenvolvido por
          <a
            href="https://missura.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <strong>Missura Networks.</strong>
          </a>
        </p>
      </div>
    </footer>
  );
}
