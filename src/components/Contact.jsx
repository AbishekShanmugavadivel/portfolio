import { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Check, Copy, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { API_PREFIX } from '../config/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // Hidden Honeypot Field for anti-spam
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [copiedField, setCopiedField] = useState(null);

  // Listen for custom "prefillContact" events (e.g. from "Hire Me" button)
  useEffect(() => {
    const handlePrefill = (e) => {
      if (e.detail && e.detail.subject) {
        setFormData((prev) => ({ ...prev, subject: e.detail.subject }));
      }
    };
    window.addEventListener('prefillContact', handlePrefill);
    return () => window.removeEventListener('prefillContact', handlePrefill);
  }, []);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "submitting") return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setSuccessMessage("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch(`${API_PREFIX}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      let data;

      try {
        data = await response.json();
      } catch {
        data = {
          success: false,
          message: "Server returned an unexpected response. Please try again.",
        };
      }

      if (response.ok && data.success) {
        setStatus("success");

        setSuccessMessage(
          "Message sent successfully! I'll get back to you soon."
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });

        setTimeout(() => {
          setStatus("idle");
          setSuccessMessage("");
        }, 7000);
      } else {
        setStatus("error");

        setErrorMessage(
          data.message ||
          "Unable to send your message right now. Please try again."
        );
      }
    } catch (err) {
      console.error("[Contact Form Connection Error]:", err);

      setStatus("error");

      if (err.name === 'AbortError') {
        setErrorMessage("The server took too long to respond. Please try again.");
      } else {
        setErrorMessage(
          "Unable to connect to the email server. Please try again."
        );
      }
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const contactCards = [
    { label: 'Email', value: personalInfo.email, action: () => handleCopy(personalInfo.email, 'email'), icon: Mail, field: 'email', link: `mailto:${personalInfo.email}` },
    { label: 'Location', value: personalInfo.location, action: null, icon: MapPin, field: 'location', link: null },
  ];

  const socialLinks = [
    { name: 'GitHub', href: personalInfo.github, icon: GithubIcon, color: 'hover:bg-slate-900 hover:text-white' },
    { name: 'LinkedIn', href: personalInfo.linkedin, icon: LinkedinIcon, color: 'hover:bg-blue-600 hover:text-white' },
    { name: 'Twitter / X', href: personalInfo.twitter, icon: TwitterIcon, color: 'hover:bg-cyan-500 hover:text-white' },
    { name: 'Email Direct', href: `mailto:${personalInfo.email}`, icon: Mail, color: 'hover:bg-emerald-600 hover:text-white' },
  ];

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full inline-block border border-blue-200/60">
            Let's Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal">
            Have a project in mind, a question, or a job opportunity? Send a message directly to my email inbox below.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mt-2"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left items-start">

          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs space-y-6">
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Contact Information
              </h3>
              <p className="text-slate-600 text-sm font-normal leading-relaxed">
                I am open to Full Stack Developer positions, AI web solution projects, and technical collaborations.
              </p>

              {/* Direct Info Blocks */}
              <div className="space-y-4">
                {contactCards.map((card, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <div className="p-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                        <card.icon className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                          {card.label}
                        </span>
                        {card.link ? (
                          <a href={card.link} className="text-slate-900 font-semibold text-sm sm:text-base hover:text-blue-600 truncate block">
                            {card.value}
                          </a>
                        ) : (
                          <span className="text-slate-900 font-semibold text-sm sm:text-base truncate block">
                            {card.value}
                          </span>
                        )}
                      </div>
                    </div>

                    {card.action && (
                      <button
                        onClick={card.action}
                        className="p-2 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
                        title={`Copy ${card.label}`}
                      >
                        {copiedField === card.field ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-3">
                  Find Me Online:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 text-slate-700 font-semibold text-xs shadow-xs transition-all ${s.color}`}
                    >
                      <s.icon className="w-4 h-4" />
                      <span>{s.name}</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Real Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-xs relative">

              {/* Success Alert Banner */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-600 text-white flex items-center gap-3 animate-fadeIn shadow-lg">
                  <Check className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Message Sent ✓</h4>
                    <p className="text-emerald-100 text-xs sm:text-sm">{successMessage}</p>
                  </div>
                </div>
              )}

              {/* Error Alert Banner */}
              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-600 text-white flex items-center gap-3 animate-fadeIn shadow-lg">
                  <AlertCircle className="w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Unable To Send Message</h4>
                    <p className="text-red-100 text-xs sm:text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Send A Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Hidden Honeypot Field for Anti-Spam Bot Protection */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                    Subject *
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    required
                    placeholder="e.g. Hiring Inquiry / Web Application Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold uppercase text-slate-500 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows="4"
                    placeholder="Hello Abishek S, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-900 text-base sm:text-sm font-normal focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-semibold text-base shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
