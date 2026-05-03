import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const Header = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-navy-deep/70 border-b border-white/10">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-tight text-primary-foreground">
            ADS<span className="text-gold">DO</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-primary-foreground/80">
          <a href="#services" className="hover:text-gold transition-colors">{t.nav.services}</a>
          <a href="#contact" className="hover:text-gold transition-colors">{t.nav.contact}</a>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-white/15 p-1">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
              lang === "en" ? "bg-gold text-navy" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            onClick={() => setLang("fr")}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
              lang === "fr" ? "bg-gold text-navy" : "text-primary-foreground/70 hover:text-primary-foreground"
            }`}
            aria-label="Passer en français"
          >
            FR
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
