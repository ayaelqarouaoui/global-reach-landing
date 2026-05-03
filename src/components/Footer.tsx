import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
        <span className="font-serif text-lg text-primary-foreground">
          ADS<span className="text-gold">DO</span>
        </span>
        <span>© {new Date().getFullYear()} ADSDO Agency. {t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
