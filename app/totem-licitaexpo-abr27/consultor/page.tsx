import { consultor as content, type Plano } from "../content";

/* Menu do consultor: ementa, programação e planos com 50% ("de R$ X por R$ Y").
   Sem formulário e sem links — nem para o quiosque, nem do quiosque para cá.
   noindex herdado do layout do totem. Regras de texto (briefing 16/11): sem a
   palavra "online", sem "últimas vagas". */

const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function Preco({ plano }: { plano: Plano }) {
  if (plano.de == null || plano.por == null) {
    return <p className="consultor__price-por">PENDENTE: preço</p>;
  }
  return (
    <p className="consultor__price">
      <span className="consultor__price-de">
        de <s>{BRL.format(plano.de)}</s>
      </span>
      <span className="consultor__price-por">por {BRL.format(plano.por)}</span>
    </p>
  );
}

export default function ConsultorPage() {
  return (
    <div className="lp3-root totem-root">
      <main id="conteudo-principal" className="consultor">
        <header className="consultor__head">
          <span className="lp3-eyebrow">{content.eyebrow}</span>
          <h1 className="totem__title">{content.title}</h1>
          <p className="totem__meta">{content.meta}</p>
        </header>

        <section className="consultor__section" aria-labelledby="c-ementa">
          <h2 id="c-ementa" className="consultor__h2">
            {content.ementa.title}
          </h2>
          <ul className="consultor__list">
            {content.ementa.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="consultor__section" aria-labelledby="c-programacao">
          <h2 id="c-programacao" className="consultor__h2">
            {content.programacao.title}
          </h2>
          {content.programacao.dias.map((d) => (
            <div key={d.dia} className="consultor__day">
              <h3 className="consultor__day-title">{d.dia}</h3>
              <ul className="consultor__list">
                {d.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="consultor__section" aria-labelledby="c-planos">
          <h2 id="c-planos" className="consultor__h2">
            {content.planos.title}
          </h2>
          <div className="consultor__plans">
            {content.planos.lista.map((p) => (
              <article key={p.nome} className="consultor__plan">
                <h3 className="consultor__plan-name">{p.nome}</h3>
                <Preco plano={p} />
                <ul className="consultor__list">
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="consultor__cert">{content.certificado}</p>
        </section>
      </main>
    </div>
  );
}
