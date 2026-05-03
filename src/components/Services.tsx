import { useLanguage } from "@/i18n/LanguageContext";
import { Code2, TrendingUp, Megaphone, FileText, Search, Target } from "lucide-react";

const icons = [Code2, TrendingUp, Megaphone, FileText, Search, Target];

const Services = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">— {t.nav.services}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <article
                key={s.title}
                className="group relative p-8 rounded-2xl border border-border bg-card hover:border-gold/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury"
              >
                <div className="absolute top-0 left-0 w-full h-1 gradient-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
