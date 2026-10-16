
import { useState, type FormEvent } from 'react'
import { FiArrowRight, FiMail, FiStar } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext'
import './ContactSection.css'

const translations = {
  pt: {
    eyebrow: 'ML+ ORIGINAL · ÚLTIMA CENA',
    heading1: 'O próximo capítulo',
    heading2: 'começa',
    headingHighlight: 'aqui.',
    introduction:
      'Toda boa história começa com uma conexão. Tem uma oportunidade, um projeto ou uma ideia? Garanta seu ingresso para uma nova conversa.',
    presents: 'APRESENTA',
    ticketSubtitle: 'INGRESSO PARA UMA NOVA CONEXÃO',
    nameLabel: 'NOME DO CONVIDADO',
    namePlaceholder: 'Seu nome',
    emailLabel: 'E-MAIL',
    emailPlaceholder: 'seu@email.com',
    subjectLabel: 'TÍTULO DA HISTÓRIA',
    subjectPlaceholder: 'Qual é o assunto?',
    messageLabel: 'ESCREVA O PRÓXIMO CAPÍTULO',
    messagePlaceholder: 'Sua mensagem começa aqui...',
    submit: 'ENVIAR MENSAGEM',
    notice:
      'Seu aplicativo de e-mail foi solicitado. Confirme o envio da mensagem por lá.',
    emailName: 'Nome',
  },
  en: {
    eyebrow: 'ML+ ORIGINAL · FINAL SCENE',
    heading1: 'The next chapter',
    heading2: 'starts',
    headingHighlight: 'here.',
    introduction:
      'Every great story begins with a connection. Have an opportunity, a project, or an idea? Get your ticket to a new conversation.',
    presents: 'PRESENTS',
    ticketSubtitle: 'YOUR TICKET TO A NEW CONNECTION',
    nameLabel: 'GUEST NAME',
    namePlaceholder: 'Your name',
    emailLabel: 'EMAIL',
    emailPlaceholder: 'you@example.com',
    subjectLabel: 'STORY TITLE',
    subjectPlaceholder: 'What is this about?',
    messageLabel: 'WRITE THE NEXT CHAPTER',
    messagePlaceholder: 'Your message starts here...',
    submit: 'SEND MESSAGE',
    notice:
      'Your email application has been requested. Please confirm and send the message there.',
    emailName: 'Name',
  },
}

export default function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [aviso, setAviso] = useState(false)

  function enviarMensagem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const destinatario = 'luizamayra2006@gmail.com'

    const corpo = [
      `${t.emailName}: ${nome}`,
      `E-mail: ${email}`,
      '',
      mensagem,
    ].join('\n')

    const link = `mailto:${destinatario}?subject=${encodeURIComponent(
      assunto
    )}&body=${encodeURIComponent(corpo)}`

    window.location.href = link
    setAviso(true)
  }

  return (
    <section className="contact-section" id="contato">
      <div className="contact-intro">
        <span className="contact-eyebrow">
          {t.eyebrow}
        </span>

        <h2>
          {t.heading1}
          <br />
          {t.heading2} <span>{t.headingHighlight}</span>
        </h2>

        <p>{t.introduction}</p>
      </div>

      <div className="vintage-ticket">
        <div className="vintage-ticket-inner">
          <div className="ticket-content">
            <div className="ticket-decoration">
              <span>★</span>
              <span>ML+ ORIGINAL</span>
              <span>★</span>
            </div>

            <div className="ticket-title">
              <span className="ticket-edition">
                {t.presents}
              </span>

              <h3>
                NEXT
                <br />
                CHAPTER
              </h3>

              <div className="ticket-stars">
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p>{t.ticketSubtitle}</p>
            </div>

            <div className="ticket-divider" />

            <form
              className="vintage-ticket-form"
              onSubmit={enviarMensagem}
            >
              <div className="vintage-form-row">
                <div className="vintage-field">
                  <label htmlFor="contact-name">
                    {t.nameLabel}
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={nome}
                    onChange={(event) =>
                      setNome(event.target.value)
                    }
                    required
                  />
                </div>

                <div className="vintage-field">
                  <label htmlFor="contact-email">
                    {t.emailLabel}
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    required
                  />
                </div>
              </div>

              <div className="vintage-field">
                <label htmlFor="contact-subject">
                  {t.subjectLabel}
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder={t.subjectPlaceholder}
                  value={assunto}
                  onChange={(event) =>
                    setAssunto(event.target.value)
                  }
                  required
                />
              </div>

              <div className="vintage-field">
                <label htmlFor="contact-message">
                  {t.messageLabel}
                </label>

                <textarea
                  id="contact-message"
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  value={mensagem}
                  onChange={(event) =>
                    setMensagem(event.target.value)
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="vintage-submit"
              >
                <FiMail />
                {t.submit}
                <FiArrowRight />
              </button>

              {aviso && (
                <p className="ticket-notice" role="status">
                  {t.notice}
                </p>
              )}
            </form>
          </div>

          <aside className="ticket-stub-vintage">
            <div className="stub-heading">
              <span>ADMIT</span>
              <strong>ONE</strong>
            </div>

            <div
              className="stub-stars"
              aria-hidden="true"
            >
              ★
              <br />
              ★
              <br />
              ★
            </div>

            <div className="stub-bottom">
              <span>ML+</span>
              <span>2026</span>

              <div
                className="vintage-barcode"
                aria-hidden="true"
              />

              <small>NO. 000001</small>
            </div>
          </aside>
        </div>
      </div>

      
    </section>
  )
}
