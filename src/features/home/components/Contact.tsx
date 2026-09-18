import React, { useId, useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../../../components/layout/Section';
import { Button } from '../../../components/ui/Button';
import { cn } from '../../../lib/utils';
import { toast } from 'sonner';
import { buildContactDraft } from '../../../helpers/contactDraft';
import { EmailDraftDialog } from './EmailDraftDialog';

export const Contact = () => {
  const fieldId = useId();
  const [draftLinks, setDraftLinks] = useState<ReturnType<typeof buildContactDraft> | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const sectors = ['Industrial', 'Residential', 'Commercial', 'Medical', 'Agricultural', 'Infrastructure & Construction', 'Education', 'Hospitality & Tourism', 'Retail & Pop-up Stores', 'Defence & Government', 'Logistics & Warehousing'];

  const validateForm = () => {
    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim() || !selectedSector) {
      toast.error(' Please fill in all fields including the Project Sector.');
      return false;
    }

    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      toast.error(' Please enter a valid email address.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm() || !selectedSector) return;
    setIsDropdownOpen(false);
    setDraftLinks(buildContactDraft({ ...formData, sector: selectedSector }));
  };

  return (
    <Section id="contact" className="bg-[#1C2E57] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Build the Future Together</h2>
          <p className="text-white/60 mb-12 max-w-md">
            Ready to start your next global landmark? Contact our team for a consultation on modular solutions.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold rounded-xl">
                <Mail />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email Us</h4>
                <a href="mailto:info@theglobalinfra.co" className="text-white/60 hover:text-gold transition-colors">info@theglobalinfra.co</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold rounded-xl">
                <Phone />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <a href="tel:+918525999229" className="text-white/60 hover:text-gold transition-colors">+91 85259 99229</a><br />
                <a href="tel:+919042703777" className="text-white/60 hover:text-gold transition-colors">+91 90427 03777</a>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold rounded-xl">
                <MapPin />
              </div>
              <div>
                <h4 className="font-bold mb-1">Visit Us</h4>
                <a
                  href="https://maps.app.goo.gl/P4hhdNBaZvKYmYbu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold transition-colors"
                >
                  3/610, Nadhegoundanpudhur Road,<br />
                  Manickampalayam, Kunnathur Pudhur (PO),<br />
                  Kovilpalayam, Coimbatore – 641107
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-12 border border-white/10 rounded-3xl backdrop-blur-sm max-w-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor={`${fieldId}-name`} className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                <input
                  id={`${fieldId}-name`}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl text-white placeholder:text-white/20"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor={`${fieldId}-email`} className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                <input
                  id={`${fieldId}-email`}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl text-white placeholder:text-white/20"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 relative">
              <label htmlFor={`${fieldId}-sector`} className="text-xs font-bold uppercase tracking-widest text-white/40">Project Sector</label>
              <button
                id={`${fieldId}-sector`}
                aria-expanded={isDropdownOpen}
                aria-controls={`${fieldId}-sectors`}
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-all rounded-xl text-white flex justify-between items-center group"
              >
                {selectedSector ? (
                  <span className="text-white">{selectedSector}</span>
                ) : (
                  <span className="text-white/40">Select a sector</span>
                )}
                <ChevronDown className={`w-4 h-4 text-white/40 group-hover:text-[#ef7e39] transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    id={`${fieldId}-sectors`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-[#1C2E57] border border-white/20 shadow-2xl rounded-xl overflow-y-auto max-h-[180px] backdrop-blur-xl"
                  >
                    {sectors.map((sector) => (
                      <button
                        key={sector}
                        type="button"
                        onClick={() => {
                          setSelectedSector(sector);
                          setIsDropdownOpen(false);
                        }}
                        className={cn(
                          "w-full text-left px-4 py-3 transition-all text-xs font-bold uppercase tracking-widest border-b border-white/10 last:border-0",
                          selectedSector === sector ? "bg-white/20 text-gold" : "text-white/70 hover:text-gold hover:bg-white/5"
                        )}
                      >
                        {sector}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor={`${fieldId}-message`} className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
              <textarea
                id={`${fieldId}-message`}
                rows={3}
                className="w-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none rounded-xl text-white placeholder:text-white/20"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <Button
              type="submit"
              variant="gold"
              className="w-full py-3 rounded-xl flex items-center justify-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ef7e39]"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      {draftLinks && <EmailDraftDialog links={draftLinks} onClose={() => setDraftLinks(null)} />}
    </Section>
  );
};
