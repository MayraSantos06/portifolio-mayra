
import { useState, type FormEvent, type ChangeEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  FaStar,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import "../css/ContactSection.css";

type Props = {
  language?: "pt" | "en";
};

type FormValues = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
  website: "",
};

const copy = {
  pt: {
    eyebrow: "CONTATO • ML+",
    heading: "Sua próxima história começa aqui.",
    description:
      "Toda grande produção começa com uma conversa. Tem uma oportunidade, ideia ou projeto? Envie sua mensagem.",
    edition: "EDIÇÃO ESPECIAL • 2026",
    title: "CONTATO",
    subtitle: "UM CONVITE PARA CRIAR ALGO NOVO",
    name: "SEU NOME",
    email: "SEU E-MAIL",
    message: "SUA MENSAGEM",
    namePlaceholder: "Como posso te chamar?",
    emailPlaceholder: "seu@email.com",
    messagePlaceholder: "Conte sua ideia...",
    send: "ENVIAR INGRESSO",
    sending: "ENVIANDO...",
    success: "Mensagem enviada com sucesso!",
    error: "Não foi possível enviar sua mensagem.",
    config: "Configure as variáveis do EmailJS.",
    notice: "Sua mensagem será enviada diretamente para meu e-mail.",
    social: "ENCONTRE-ME TAMBÉM",
    admission: "ADMIT ONE",
    ticket: "ML+",
    stub: "SEU CONVITE",
    footer: "THE NEXT CHAPTER STARTS HERE",
  },
  en: {
    eyebrow: "CONTACT • ML+",
    heading: "Your next story starts here.",
    description:
      "Every great production starts with a conversation. Have an opportunity, idea or project? Send your message.",
    edition: "SPECIAL EDITION • 2026",
    title: "CONTACT",
    subtitle: "AN INVITATION TO CREATE SOMETHING NEW",
    name: "YOUR NAME",
    email: "YOUR EMAIL",
    message: "YOUR MESSAGE",
    namePlaceholder: "What should I call you?",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell me about your idea...",
    send: "SEND TICKET",
    sending: "SENDING...",
    success: "Message sent successfully!",
    error: "Your message could not be sent.",
    config: "Configure the EmailJS environment variables.",
    notice: "Your message will be sent directly to my email.",
    social: "FIND ME ALSO",
    admission: "ADMIT ONE",
    ticket: "ML+",
    stub: "YOUR INVITATION",
    footer: "THE NEXT CHAPTER STARTS HERE",
  },
};

export default function ContactSection({ language = "pt" }: Props) {
  const t = copy[language];

  const [values, setValues] = useState<FormValues>(initialValues);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "config" | "">("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setStatus("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (sending || values.website.trim()) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("config");
      return;
    }

    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: values.name.trim(),
          email: values.email.trim(),
          message: values.message.trim(),
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          title: `Nova mensagem ML+ - ${values.name.trim()}`,
          time: new Date().toLocaleString("pt-BR"),
        },
        { publicKey, blockHeadless: true }
      );

      setStatus("success");
      setValues(initialValues);
    } catch (error) {
      console.error("Erro no EmailJS:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section" id="contato">
      <div className="contact-intro">
        <span className="contact-eyebrow">{t.eyebrow}</span>
        <h2>
          {t.heading.split(" ").slice(0, -2).join(" ")}{" "}
          <span>{t.heading.split(" ").slice(-2).join(" ")}</span>
        </h2>
        <p>{t.description}</p>
      </div>

      <div className="vintage-ticket">
        <div className="vintage-ticket-inner">
          <div className="ticket-content">
            <div className="ticket-decoration">
              <span>✦</span>
              <span>ML+ ORIGINAL PRODUCTION</span>
              <span>✦</span>
            </div>

            <div className="ticket-title">
              <span className="ticket-edition">{t.edition}</span>
              <h3>{t.title}</h3>
              <div className="ticket-stars" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((n) => (
                  <FaStar key={n} />
                ))}
              </div>
              <p>{t.subtitle}</p>
            </div>

            <div className="ticket-divider" />

            <form className="vintage-ticket-form" onSubmit={handleSubmit}>
              <div className="vintage-form-row">
                <div className="vintage-field">
                  <label htmlFor="ticket-name">{t.name}</label>
                  <input
                    id="ticket-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={100}
                    placeholder={t.namePlaceholder}
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="vintage-field">
                  <label htmlFor="ticket-email">{t.email}</label>
                  <input
                    id="ticket-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    placeholder={t.emailPlaceholder}
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="vintage-field">
                <label htmlFor="ticket-message">{t.message}</label>
                <textarea
                  id="ticket-message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  placeholder={t.messagePlaceholder}
                  value={values.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="ticket-website">Website</label>
                <input
                  id="ticket-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.website}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="vintage-submit"
                disabled={sending}
              >
                <FaPaperPlane aria-hidden="true" />
                {sending ? t.sending : t.send}
              </button>

              {status && (
                <p
                  className={`ticket-feedback ticket-feedback--${status}`}
                  role="status"
                  aria-live="polite"
                >
                  {status === "success" ? (
                    <FaCheckCircle aria-hidden="true" />
                  ) : (
                    <FaExclamationCircle aria-hidden="true" />
                  )}
                  {status === "success"
                    ? t.success
                    : status === "config"
                    ? t.config
                    : t.error}
                </p>
              )}

              <p className="ticket-notice">{t.notice}</p>
            </form>
          </div>

          <aside className="ticket-stub-vintage">
            <div className="stub-heading">
              <span>{t.admission}</span>
              <strong>{t.ticket}</strong>
            </div>

            <span className="stub-stars" aria-hidden="true">✦</span>

            <div className="stub-bottom">
              <span>★</span>
              <span>{t.stub}</span>
              <div className="vintage-barcode" aria-hidden="true" />
              <small>ML+ • 2026</small>
            </div>
          </aside>
        </div>
      </div>

      <div className="contact-social">
        <span>{t.social}</span>
        <div className="contact-social-links">
          <a
            href="https://github.com/MayraSantos06"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:luizamayra2006@gmail.com"
            aria-label="E-mail"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="contact-footer">
        <span>✦</span>
        <strong>{t.footer}</strong>
        <span>✦</span>
      </div>
    </section>
  );
}
