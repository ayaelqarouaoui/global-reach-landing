import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-transparent to-navy-deep" />

      <div className="container mx-auto relative pt-32 pb-20">
        <div className="max-w-3xl">
          <p className="inline-block text-xs uppercase tracking-[0.3em] text-gold mb-6 border border-gold/40 rounded-full px-4 py-2">
            {t.hero.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-8">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-10 max-w-2xl">
            {t.hero.intro}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-gold text-navy hover:bg-gold/90 shadow-gold font-semibold">
              <a href="#contact">{t.hero.ctaPrimary}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-primary-foreground bg-transparent hover:bg-white/10 hover:text-primary-foreground">
              <a href="#services">{t.hero.ctaSecondary}</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 text-xs text-primary-foreground/70">
            {[t.hero.badge1, t.hero.badge2, t.hero.badge3].map((b) => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                ✦ {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
