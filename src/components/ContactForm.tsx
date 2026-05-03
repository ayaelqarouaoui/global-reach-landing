import { useState } from "react";
import { z } from "zod";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { sendToN8n } from "@/lib/n8n";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  service: z.string().trim().min(1).max(100),
  message: z.string().trim().min(1).max(2000),
});

const ContactForm = () => {
  const { t, lang } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? t.contact.error);
      return;
    }
    setLoading(true);
    try {
      await sendToN8n({ ...parsed.data, language: lang, submittedAt: new Date().toISOString() });
      toast.success(t.contact.success);
      setForm({ name: "", email: "", service: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container mx-auto relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— {t.nav.contact}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t.contact.title}</h2>
          <p className="text-lg text-primary-foreground/70">{t.contact.subtitle}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-primary-foreground/80">{t.contact.name}</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                maxLength={100}
                className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-foreground/80">{t.contact.email}</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                maxLength={255}
                className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/40"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-primary-foreground/80">{t.contact.service}</Label>
            <select
              id="service"
              value={form.service}
              onChange={(e) => setForm({ ...form, service: e.target.value })}
              required
              className="flex h-10 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <option value="" className="bg-navy">{t.contact.selectService}</option>
              {t.services.items.map((s) => (
                <option key={s.title} value={s.title} className="bg-navy">{s.title}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-primary-foreground/80">{t.contact.message}</Label>
            <Textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              maxLength={2000}
              rows={5}
              className="bg-white/5 border-white/15 text-primary-foreground placeholder:text-primary-foreground/40"
            />
          </div>
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full bg-gold text-navy hover:bg-gold/90 font-semibold shadow-gold"
          >
            {loading ? t.contact.sending : t.contact.submit}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
