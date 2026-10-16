
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

interface ContactFormValues {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    const field = name as keyof ContactFormValues

    setValues((previous) => ({ ...previous, [field]: value }))
    setErrors((previous) => ({ ...previous, [field]: undefined }))
    setSubmitted(false)
  }

  const validateForm = () => {
    const nextErrors: ContactFormErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'Veuillez saisir votre nom.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Veuillez saisir une adresse e-mail valide.'
    }

    if (!values.subject.trim()) {
      nextErrors.subject = 'Veuillez choisir un sujet.'
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = 'Votre message doit contenir au moins 10 caractères.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateForm()) {
      setSubmitted(false)
      return
    }

    const formData = {
      ...values,
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }

    // Mode démonstration : aucune donnée n'est envoyée au serveur.
    console.info('Données du formulaire de contact :', formData)

    setSubmitted(true)
    setValues(initialValues)
    setErrors({})
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-[#17211D]/10 bg-[#F6F2EA]/55 px-4 py-3.5 text-sm text-[#17211D] outline-none transition-colors duration-200 placeholder:text-[#59635A]/60 hover:border-[#294D3D]/30 focus:border-[#294D3D] focus:bg-white focus:ring-4 focus:ring-[#294D3D]/[0.08]'

  const labelClass =
    'text-xs font-semibold uppercase tracking-[0.14em] text-[#263D32]'

  const errorClass = 'mt-2 text-xs leading-5 text-red-700'

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      {submitted && (
        <ScrollReveal direction="up" duration={500}>
          <div
            role="status"
            aria-live="polite"
            className="mb-7 flex items-start gap-3 rounded-2xl border border-[#294D3D]/15 bg-[#294D3D]/[0.06] p-4 text-sm leading-6 text-[#263D32]"
          >
            <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
            <p>
              Les champs ont été validés. Votre message n’a pas encore été
              envoyé : le service d’envoi sera activé après la connexion
              du backend.
            </p>
          </div>
        </ScrollReveal>
      )}

      {/* Première ligne : gauche puis droite */}
      <div className="grid gap-6 sm:grid-cols-2">
        <ScrollReveal direction="left" duration={800}>
          <div>
            <label htmlFor="contact-name" className={labelClass}>
              Nom complet *
            </label>
            <input
              id="contact-name"
              name="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Votre nom"
              className={fieldClass}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              required
            />
            {errors.name && (
              <p id="contact-name-error" className={errorClass}>
                {errors.name}
              </p>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100} duration={800}>
          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Adresse e-mail *
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="email"
              placeholder="vous@exemple.com"
              className={fieldClass}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              required
            />
            {errors.email && (
              <p id="contact-email-error" className={errorClass}>
                {errors.email}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Deuxième ligne : gauche puis droite */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <ScrollReveal direction="left" duration={800}>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Téléphone (facultatif)
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="Votre numéro"
              className={fieldClass}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100} duration={800}>
          <div>
            <label htmlFor="contact-subject" className={labelClass}>
              Sujet *
            </label>
            <select
              id="contact-subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              className={fieldClass}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? 'contact-subject-error' : undefined
              }
              required
            >
              <option value="">Choisir un sujet</option>
              <option value="Nouveau projet">Nouveau projet</option>
              <option value="Architecture intérieure">
                Architecture intérieure
              </option>
              <option value="Demande d'information">
                Demande d'information
              </option>
              <option value="Autre">Autre demande</option>
            </select>
            {errors.subject && (
              <p id="contact-subject-error" className={errorClass}>
                {errors.subject}
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>

      {/* Message : apparition depuis la gauche */}
      <ScrollReveal direction="left" duration={850}>
        <div className="mt-6">
          <label htmlFor="contact-message" className={labelClass}>
            Votre message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            placeholder="Parlez-nous de votre projet..."
            className={`${fieldClass} min-h-36 resize-y leading-7`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? 'contact-message-error' : undefined
            }
            required
          />
          {errors.message && (
            <p id="contact-message-error" className={errorClass}>
              {errors.message}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Pied du formulaire et bouton */}
      <div className="mt-8 flex flex-col items-start gap-4 border-t border-[#17211D]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-5 text-[#59635A]">
          Les champs marqués d’un astérisque sont obligatoires.
        </p>

        <ScrollReveal direction="up" delay={100} duration={700}>
          <button
            type="submit"
            className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-[#294D3D] px-7 py-4 text-sm font-semibold text-[#F5F1E8] shadow-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#17251F] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#294D3D] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto"
          >
            <span className="text-[#F5F1E8]">Envoyer ma demande</span>
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[#F5F1E8] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </button>
        </ScrollReveal>
      </div>
    </form>
  )
}
