import './ContactSection.css'

export default function ContactSection() {
  return (
    <section className="section contact-section" id="contato">
      <div className="section-heading">
        <p className="eyebrow">VAMOS CONVERSAR?</p>
        <h2>Próxima história: a sua<span>.</span></h2>
        <p>Tem uma ideia, oportunidade ou projeto? Entre em contato.</p>
      </div>
      <a className="contact-link" href="mailto:seuemail@exemplo.com">seuemail@exemplo.com ↗</a>
      <p className="contact-note">Substitua o e-mail de exemplo pelo seu endereço de contato.</p>
    </section>
  )
}