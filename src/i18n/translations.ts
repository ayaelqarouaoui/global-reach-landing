export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: { services: "Services", about: "About", contact: "Contact" },
    hero: {
      eyebrow: "Premium Digital Marketing Agency",
      title: "Elevate Your Brand to Its True Caliber",
      intro:
        "Hi there 👋. I'm the founder of ADSDO Agency, a Meta and Google-certified Marketing analyst with nine years of experience in Digital Marketing. I think the caliber of your business should be reflected in the quality of your website, content, and AD campaigns.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "Explore Services",
      badge1: "Meta Certified",
      badge2: "Google Certified",
      badge3: "9+ Years Experience",
    },
    services: {
      title: "Services Crafted for Growth",
      subtitle: "End-to-end digital expertise designed to deliver measurable results.",
      items: [
        { title: "Web Development", desc: "Bespoke, fast and conversion-focused websites built to scale." },
        { title: "Digital Marketing", desc: "Data-driven strategies that turn audiences into customers." },
        { title: "Advertising", desc: "High-ROI Meta & Google Ads campaigns managed by certified experts." },
        { title: "Content Strategy", desc: "Editorial frameworks that build authority and engagement." },
        { title: "SEO", desc: "Technical and on-page SEO that earns lasting organic visibility." },
        { title: "Lead Generation", desc: "Funnels and automations that fill your pipeline with qualified leads." },
      ],
    },
    contact: {
      title: "Let's Build Something Remarkable",
      subtitle: "Tell us about your project. We respond within 24 hours.",
      name: "Full Name",
      email: "Email Address",
      service: "Service of Interest",
      selectService: "Select a service",
      message: "Your Message",
      submit: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please try again.",
    },
    footer: { rights: "All rights reserved." },
  },
  fr: {
    nav: { services: "Services", about: "À propos", contact: "Contact" },
    hero: {
      eyebrow: "Agence de Marketing Digital Premium",
      title: "Élevez votre marque à la hauteur de son excellence",
      intro:
        "Bonjour 👋. Je suis la fondatrice d'ADSDO Agency, analyste marketing certifiée Meta et Google avec neuf ans d'expérience en marketing digital. Je crois que l'excellence de votre entreprise doit se refléter dans la qualité de votre site web, de votre contenu et de vos campagnes publicitaires.",
      ctaPrimary: "Démarrer votre projet",
      ctaSecondary: "Découvrir les services",
      badge1: "Certifiée Meta",
      badge2: "Certifiée Google",
      badge3: "9+ ans d'expérience",
    },
    services: {
      title: "Des services conçus pour votre croissance",
      subtitle: "Une expertise digitale complète, pensée pour des résultats mesurables.",
      items: [
        { title: "Développement Web", desc: "Sites sur-mesure, performants et orientés conversion." },
        { title: "Marketing Digital", desc: "Stratégies data-driven qui transforment vos audiences en clients." },
        { title: "Publicité", desc: "Campagnes Meta & Google Ads à fort ROI, pilotées par des experts certifiés." },
        { title: "Stratégie de Contenu", desc: "Lignes éditoriales qui construisent autorité et engagement." },
        { title: "Optimisation SEO", desc: "SEO technique et on-page pour une visibilité organique durable." },
        { title: "Génération de Leads", desc: "Tunnels et automatisations qui remplissent votre pipeline." },
      ],
    },
    contact: {
      title: "Construisons quelque chose de remarquable",
      subtitle: "Parlez-nous de votre projet. Réponse sous 24 heures.",
      name: "Nom complet",
      email: "Adresse e-mail",
      service: "Service souhaité",
      selectService: "Choisissez un service",
      message: "Votre message",
      submit: "Envoyer le message",
      sending: "Envoi...",
      success: "Merci ! Votre message a bien été envoyé.",
      error: "Une erreur est survenue. Veuillez réessayer.",
    },
    footer: { rights: "Tous droits réservés." },
  },
} as const;
