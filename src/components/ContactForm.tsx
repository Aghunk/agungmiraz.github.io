import React, { useState, useEffect } from "react";
import { Mail, Phone, Globe, Send, Trash2, CheckCircle, AlertTriangle, MessageSquare, ArrowRight, User, FileText } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ContactMessage } from "../types";

interface ContactFormProps {
  t: {
    badge: string;
    title: string;
    description: string;
    formTitle: string;
    errorFields: string;
    successTitle: string;
    successBody: string;
    labelName: string;
    labelNamePlaceholder: string;
    labelEmail: string;
    labelSubject: string;
    labelSubjectPlaceholder: string;
    labelMessage: string;
    labelMessagePlaceholder: string;
    submitVal: string;
    submittingVal: string;
    pulseBadge: string;
    emailLabel: string;
    phoneLabel: string;
    linkLabel: string;
    inboxBadge: string;
    inboxTitle: string;
    inboxReset: string;
    inboxDesc: string;
    inboxNoneTitle: string;
    inboxNoneDesc: string;
  };
}

export default function ContactForm({ t }: ContactFormProps) {
  // Inbox Stored local state
  const [inboxMessages, setInboxMessages] = useState<ContactMessage[]>([]);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Action Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Load local inbox messages on mount
  useEffect(() => {
    const saved = localStorage.getItem("agung_portfolio_messages");
    if (saved) {
      try {
        setInboxMessages(JSON.parse(saved));
      } catch (e) {
        setInboxMessages([]);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError(t.errorFields);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Simulate Server Post request (500-1000ms SLA delay)
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: "msg_" + Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "General Inquiry",
        message: formData.message,
        timestamp: new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }) + ", " + new Date().toLocaleDateString(),
      };

      const updatedInbox = [newMessage, ...inboxMessages];
      localStorage.setItem("agung_portfolio_messages", JSON.stringify(updatedInbox));
      setInboxMessages(updatedInbox);

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Clean successful notification alert after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 900);
  };

  const clearInbox = () => {
    localStorage.removeItem("agung_portfolio_messages");
    setInboxMessages([]);
  };

  return (
    <section id="kontak" className="py-24 bg-[#FAF9F6] text-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-xl mb-16">
          <span className="font-mono text-xs font-semibold text-[#2D4263] tracking-widest uppercase block mb-2">
            {t.badge}
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-neutral-900 tracking-tight">
            {t.title}
          </h2>
          <p className="font-sans text-neutral-500 text-sm mt-3">
            {t.description}
          </p>
        </div>

        {/* Outer Layout containing form on left, sandbox inbox and metadata on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Card Column */}
          <div className="lg:col-span-7 bg-white border border-neutral-250 p-6 sm:p-8 rounded-sm hover:shadow-lg transition-shadow">
            <span className="font-mono text-[9px] text-[#2D4263] tracking-widest uppercase font-bold block mb-4">
              {t.formTitle}
            </span>

            {/* Error notifications bubble */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-500 rounded-r-xs flex items-start gap-2.5 text-xs text-red-700 font-sans">
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            {/* Success notification banner */}
            {submitSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border-l-2 border-emerald-500 rounded-r-xs flex items-start gap-2.5 text-xs text-emerald-800 font-sans animate-fade-in">
                <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <span className="font-bold block">{t.successTitle}</span>
                  <span className="block mt-0.5 text-neutral-600">{t.successBody}</span>
                </div>
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-sans text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t.labelName} <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder={t.labelNamePlaceholder}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-neutral-200 rounded-xs text-xs font-sans text-neutral-800 focus:outline-none focus:border-neutral-900 focus:bg-white disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-sans text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{t.labelEmail} <span className="text-red-500">*</span></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="budis@perusahaan.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-neutral-200 rounded-xs text-xs font-sans text-neutral-800 focus:outline-none focus:border-neutral-900 focus:bg-white disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-sans text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{t.labelSubject}</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder={t.labelSubjectPlaceholder}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-neutral-200 rounded-xs text-xs font-sans text-neutral-800 focus:outline-none focus:border-neutral-900 focus:bg-white disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-sans text-xs font-bold text-neutral-800 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{t.labelMessage} <span className="text-red-500">*</span></span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  placeholder={t.labelMessagePlaceholder}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-neutral-200 rounded-xs text-xs font-sans text-neutral-800 focus:outline-none focus:border-neutral-900 focus:bg-white disabled:opacity-50 resize-y"
                />
              </div>

              {/* Button Submit inside container */}
              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-5 py-3 rounded-xs font-sans text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2 transition-all ${
                    isSubmitting
                      ? "bg-neutral-300 text-neutral-500 cursor-not-allowed"
                      : "bg-neutral-900 text-[#FAF9F6] hover:bg-neutral-800"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <span>{t.submittingVal}</span>
                      <div className="w-3.5 h-3.5 border-2 border-neutral-500 border-t-white rounded-full animate-rotate" />
                    </>
                  ) : (
                    <>
                      <span>{t.submitVal}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>

          {/* Sidebar Contacts & Sandbox Messages Viewer Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8 h-full">
            
            {/* Contact Details cards */}
            <div className="bg-[#F4F3EF] border border-neutral-250 p-6 rounded-sm space-y-5">
              <span className="font-mono text-[9px] text-neutral-400 tracking-wider block">
                {t.pulseBadge}
              </span>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xs bg-white border border-neutral-200">
                    <Mail className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-400 block uppercase">
                      {t.emailLabel}
                    </span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-sans font-bold text-neutral-900 hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xs bg-white border border-neutral-200">
                    <Phone className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-400 block uppercase">
                      {t.phoneLabel}
                    </span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`} className="font-sans font-bold text-neutral-900 hover:underline">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xs bg-white border border-neutral-200">
                    <Globe className="w-4 h-4 text-neutral-700" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-400 block uppercase">
                      {t.linkLabel}
                    </span>
                    <a
                      href="http://linkedin.com/in/agungmiraz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans font-bold text-neutral-900 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{PERSONAL_INFO.linkedin}</span>
                      <ArrowRight className="w-3 h-3 text-neutral-400" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Live Sandbox Inbox Console (Extremely High Quality Feature!) */}
            <div className="bg-white border border-neutral-250 p-6 rounded-sm space-y-4">
              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] text-[#A1B57D] font-bold tracking-widest uppercase block">
                    {t.inboxBadge}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-neutral-900">
                    {t.inboxTitle}
                  </h4>
                </div>
                
                {inboxMessages.length > 0 && (
                  <button
                    onClick={clearInbox}
                    title="Hapus Kotak Masuk Simulator"
                    className="p-1 px-2 rounded-xs border border-neutral-200 text-neutral-500 hover:text-red-600 hover:border-red-200 transition-colors cursor-pointer flex items-center gap-1 text-[9px] font-mono"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>{t.inboxReset}</span>
                  </button>
                )}
              </div>

              {/* Explanation note */}
              <p className="font-sans text-[11px] text-neutral-500 leading-relaxed">
                {t.inboxDesc}
              </p>

              {/* Mailbox List */}
              <div className="space-y-3.5 max-h-[190px] overflow-y-auto pr-1">
                {inboxMessages.length > 0 ? (
                  inboxMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className="border border-neutral-200 p-3 bg-[#FAF9F6] rounded-xs space-y-2 animate-fade-in"
                    >
                      <div className="flex justify-between items-start text-[10px] text-neutral-500 font-mono">
                        <span className="font-bold text-neutral-800">{msg.name} ({msg.email})</span>
                        <span className="text-[9px] text-neutral-400">{msg.timestamp}</span>
                      </div>
                      <div className="space-y-1">
                        <span className="font-sans text-xs font-semibold text-neutral-900 block truncate">
                          RE: {msg.subject}
                        </span>
                        <p className="font-sans text-xs text-neutral-600 leading-normal break-words">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6 border border-dashed border-neutral-200 rounded-sm bg-[#FAF9F6]">
                    <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider block">
                      {t.inboxNoneTitle}
                    </span>
                    <span className="font-sans text-[10px] text-neutral-500 block mt-1">
                      {t.inboxNoneDesc}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
