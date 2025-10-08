import { FaWhatsapp } from 'react-icons/fa';
import { TitlePage } from './(components)/TitlePage';

import AndersonImg from '../../public/anderson3.jpg';
import FabioImg from '../../public/fabio3.jpg';
import HenriqueImg from '../../public/henrique2.jpg';
import { Card } from './(components)/Card';

export default function Home() {
  return (
    <>
      <header
        className="w-full h-full max-h-[100vh] object-contain scroll-m-40"
        id="home"
      >
        <section className="p-10 scroll-m-40" id="contact">
          <TitlePage title="Advogados em Pirassununga" className="my-12" />

          <div className="flex flex-col justify-center items-center text-slate-700 my-6">
            <h1 className="text-center text-xl">
              Especialidades: Divórcio, Empresarial, Civil, Imobiliário,
              Agronegócio, Ambiental, Minerário, etc.
            </h1>
            <div className="flex justify-center items-center my-12">
              <a
                href="https://wa.me/5519971413322"
                target="_blank"
                className="w-72 h-14 bg-green-700 text-white 
    flex justify-center items-center gap-3 rounded-xl text-xl"
              >
                <FaWhatsapp /> Fale conosco
              </a>
            </div>
          </div>
        </section>
      </header>
      <div className="bg-gradient-to-b from-[#eaf4f4] to-white">
        <section
          className="2xl:w-4/5 xl:w-4/5 2xl:px-0 xl:px-0 w-full px-4 m-auto py-10 scroll-m-40"
          id="team"
        >
          <TitlePage title="Os Advogados" />

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <Card
              image={HenriqueImg}
              title="Henrique Rosolem"
              subtitle="Especialidade | OAB/SP nº 127.681/SP"
              description="Graduado pela PUC de Campinas, Especialista em Processo Civil pela faculdade Anhanguera, advogado há mais de 31 anos."
            />

            <Card
              image={FabioImg}
              title="Fábio Cabianca Rigat,"
              subtitle="Especialidade | OAB/SP nº 228.593/SP"
              description="Graduado pela Faculdade Anhanguera, Especialista em Processo Civil pela PUC de São Paulo, advogado há mais de 21 anos."
            />

            <Card
              image={AndersonImg}
              title="Anderson Bonelli de Souza"
              subtitle="Especialidade | OAB/SP nº 272.591/SP"
              description="Graduado pela UNIFEOB, Especialista em Processo Civil pela Faculdade Anhanguera, advogado há mais de 17 anos."
            />
          </div>
        </section>
        <div className="flex justify-center items-center my-12">
          <a
            href="https://wa.me/5519971413322"
            target="_blank"
            className="w-72 h-14 bg-green-700 text-white 
    flex justify-center items-center gap-3 rounded-xl text-xl"
          >
            <FaWhatsapp /> Fale conosco
          </a>
        </div>
      </div>

      <hr />

      <hr />

      <section className="bg-white py-20 scroll-m-40" id="company">
        <div className="w-4/5 mx-auto text-center">
          <TitlePage title="Áreas de Atuação" />

          <p className="text-slate-700 mb-12 text-lg">
            Atuamos de forma estratégica e personalizada em diversas áreas do
            Direito, com excelência e foco no resultados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito Civil
              </h3>
              <ul className="text-slate-700 text-left list-disc list-inside">
                <li>Contratos</li>
                <li>Responsabilidade Civil</li>
                <li>Divórcios</li>
                <li>Inventários</li>
              </ul>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito do Consumidor
              </h3>
              <p className="text-slate-700 text-left">
                Defesa dos direitos do consumidor em relações comerciais e
                contratuais.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito Imobiliário
              </h3>
              <p className="text-slate-700 text-left">
                Regularização, litígios, contratos de compra, venda e locação.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito Empresarial
              </h3>
              <p className="text-slate-700 text-left">
                Consultoria, litígios e estruturação jurídica de empresas.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Contratos e Negociações Complexas
              </h3>
              <p className="text-slate-700 text-left">
                Redação, revisão e análise estratégica de contratos nacionais e
                internacionais.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold text-slate-800">
                Atuação Extrajudicial
              </h3>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito do Agronegócio
              </h3>
              <p className="text-slate-700 text-left">
                Soluções jurídicas para produtores rurais e empresas do setor.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito Ambiental
              </h3>
              <p className="text-slate-700 text-left">
                Assessoria em licenciamento, compliance e ações judiciais
                ambientais.
              </p>
            </div>

            <div className="p-6 bg-[#eaf4f4] rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Direito Minerário
              </h3>
              <p className="text-slate-700 text-left">
                Assessoria jurídica em exploração mineral e regularizações junto
                à ANM.
              </p>
            </div>
          </div>

          {/* Frase final */}
          <p className="mt-16 text-slate-700 text-lg max-w-3xl mx-auto">
            O escritório também conta com parcerias multidisciplinares para
            oferecer aos seus clientes atendimento de excelência nas demais
            áreas do direito.
          </p>
        </div>
      </section>

      <section className="bg-slate-600 p-10 scroll-m-40" id="contact">
        <TitlePage title="Contato" className="text-white" />

        <div className="flex flex-col justify-center items-center text-white">
          <p className="2xl:text-lg xl:text-lg font-bold">
            Horário de atendimento:
          </p>
          <p className="2xl:text-lg xl:text-lg text-center">
            Atendimento somente com hora marcada.
          </p>

          <div className="py-10">
            <p className="2xl:text-xl xl:text-xl font-bold text-center">
              Entre em contato com a nossa equipe e saiba como podemos ajudar.
            </p>
          </div>

          <a
            href="https://wa.me/5519971413322"
            target="_blank"
            className="w-72 h-14 bg-green-700 text-white 
    flex justify-center items-center gap-3 rounded-xl text-xl my-12"
          >
            <FaWhatsapp /> Fale conosco
          </a>
        </div>
      </section>
      <section className="w-full overflow-hidden px-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.420524087275!2d-47.42856522388311!3d-21.99519250593051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c800c1a340234f%3A0xbd96e803efc4344b!2sR.%20Pereira%20Bueno%2C%20325%20-%20Centro%2C%20Pirassununga%20-%20SP%2C%2013630-030!5e0!3m2!1spt-BR!2sbr!4v1719530609858!5m2!1spt-BR!2sbr"
          width="100%"
          height="600"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <a
        href="https://wa.me/5519971413322"
        target="_blank"
        className="fixed bottom-5 right-5 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </>
  );
}
