import React, { useState } from 'react';
import { ProfileData, ContactFormData } from '../../types';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Copy,
  Check,
  ChevronDown
} from 'lucide-react';

interface ContactPageProps {
  data: ProfileData;
  onNotify: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ data, onNotify }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: 'Penawaran Projek',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onNotify(`${label} berhasil disalin!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onNotify('Mohon lengkapi nama, email, dan isi pesan Anda.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onNotify('Pesan Anda berhasil dikirim!');
    }, 600);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name || !formData.message) {
      onNotify('Mohon isi nama dan pesan Anda terlebih dahulu.');
      return;
    }
    const text = encodeURIComponent(
      `Halo ${data.name},\nNama: *${formData.name}*\nEmail: ${formData.email}\nKeperluan: *${formData.category}*\n\nPesan:\n${formData.message}`
    );
    window.open(`https://wa.me/${data.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div id="contact-page-container" className="space-y-12 py-2">
      {/* Header */}
      <section className="pb-4 border-b border-slate-200">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Kontak & Kolaborasi
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Kirim pesan langsung atau hubungi melalui saluran komunikasi di bawah.
        </p>
      </section>

      {/* Main Grid: Form on Left, Channels on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left: Minimalist Form */}
        <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 p-6 space-y-4">
          <h2 className="text-base font-bold text-slate-900">
            Formulir Pesan
          </h2>

          {isSubmitted ? (
            <div
              id="contact-form-success-alert"
              className="p-6 bg-slate-50 border border-slate-200 rounded-lg text-center space-y-2"
            >
              <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Pesan Terkirim
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Terima kasih, {formData.name}. Saya akan membalas ke email <strong>{formData.email}</strong> secepatnya.
              </p>
              <button
                id="reset-form-btn"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    category: 'Penawaran Projek',
                    message: '',
                  });
                }}
                className="mt-2 text-xs text-slate-900 font-medium underline cursor-pointer"
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-slate-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-category" className="block text-xs font-medium text-slate-700 mb-1">
                    Keperluan
                  </label>
                  <select
                    id="contact-category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-slate-400 text-slate-800"
                  >
                    <option value="Penawaran Projek">Penawaran Projek Web</option>
                    <option value="Peluang Kerja / Rekrutmen">Peluang Kerja / Rekrutmen</option>
                    <option value="Konsultasi Teknis">Konsultasi Teknis</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-slate-700 mb-1">
                    Nomor WhatsApp (Opsional)
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="0812-xxxx-xxxx"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:outline-none focus:border-slate-400 text-slate-800 resize-y"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-2">
                <button
                  id="submit-contact-form-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}</span>
                </button>

                <button
                  id="submit-whatsapp-direct-btn"
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition-colors cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Direct Information */}
        <div className="md:col-span-5 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <h2 className="text-base font-bold text-slate-900">
              Saluran Langsung
            </h2>

            <div className="space-y-3 text-xs">
              {/* Email */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>{data.email}</span>
                </div>
                <button
                  id="copy-email-btn"
                  onClick={() => copyToClipboard(data.email, 'Email')}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer"
                  title="Salin email"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-slate-600">
                  <Phone className="w-4 h-4 text-slate-400" />
                  <span>{data.phone}</span>
                </div>
                <button
                  id="copy-phone-btn"
                  onClick={() => copyToClipboard(data.phone, 'Nomor')}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer"
                  title="Salin nomor"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-slate-600 pb-2.5 border-b border-slate-100">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{data.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-1 flex items-center gap-2">
              <a
                id="contact-linkedin-link"
                href="https://linkedin.com/in/wardanitikna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-medium transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                <span>LinkedIn</span>
              </a>
              <a
                id="contact-github-link"
                href="https://github.com/wardanitikna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-lg border border-slate-200 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-800" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist FAQ Accordion */}
      <section id="contact-faq-section" className="space-y-4 pt-4 border-t border-slate-200">
        <h2 className="text-base font-bold text-slate-900">
          Pertanyaan Umum (FAQ)
        </h2>

        <div className="space-y-2">
          {data.faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  id={`faq-toggle-${index}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
