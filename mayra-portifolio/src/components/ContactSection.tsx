
import { useState, type FormEvent } from 'react'
import { FiArrowRight, FiMail, FiStar } from 'react-icons/fi'
import './ContactSection.css'

export default function ContactSection() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [aviso, setAviso] = useState(false)

  function enviarMensagem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const destinatario = 'luizamayra2006@gmail.com'

    const corpo = [
      `Nome: ${nome}`,
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
          ML+ ORIGINAL · ÚLTIMA CENA
        </span>

        <h2>
          O próximo capítulo
          <br />
          começa <span>aqui.</span>
        </h2>

        <p>
          Toda boa história começa com uma conexão.
          Tem uma oportunidade, um projeto ou uma ideia?
          Garanta seu ingresso para uma nova conversa.
        </p>
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
                APRESENTA
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

              <p>
                INGRESSO PARA UMA NOVA CONEXÃO
              </p>
            </div>

            <div className="ticket-divider" />

            <form
              className="vintage-ticket-form"
              onSubmit={enviarMensagem}
            >
              <div className="vintage-form-row">
                <div className="vintage-field">
                  <label htmlFor="contact-name">
                    NOME DO CONVIDADO
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Seu nome"
                    value={nome}
                    onChange={(event) =>
                      setNome(event.target.value)
                    }
                    required
                  />
                </div>

                <div className="vintage-field">
                  <label htmlFor="contact-email">
                    E-MAIL
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    placeholder="seu@email.com"
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
                  TÍTULO DA HISTÓRIA
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Qual é o assunto?"
                  value={assunto}
                  onChange={(event) =>
                    setAssunto(event.target.value)
                  }
                  required
                />
              </div>

              <div className="vintage-field">
                <label htmlFor="contact-message">
                  ESCREVA O PRÓXIMO CAPÍTULO
                </label>

                <textarea
                  id="contact-message"
                  placeholder="Sua mensagem começa aqui..."
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
                ENVIAR MENSAGEM
                <FiArrowRight />
              </button>

              {aviso && (
                <p className="ticket-notice" role="status">
                  Seu aplicativo de e-mail foi solicitado.
                  Confirme o envio da mensagem por lá.
                </p>
              )}
            </form>
          </div>

          <aside className="ticket-stub-vintage">
            <div className="stub-heading">
              <span>ADMIT</span>
              <strong>ONE</strong>
            </div>

            <div className="stub-stars" aria-hidden="true">
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

      
<div className="classic-ending">
  <div className="ending-rings" aria-hidden="true" />

  <div className="classic-ending-content">
    <h2 className="classic-ending-title">
      The End
    </h2>
  </div>
</div>

    </section>
  )
}
