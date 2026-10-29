/*
  MS DIGITAL portfolio
*/
const CONTACT_EMAIL = "timichelsouza@gmail.com"; // Add your real email address between the quotes.
const WHATSAPP_NUMBER = "5511984466986"; // Optional: country code + area code + number, digits only.

const translations = {
  en: {
    navHome:"Home",navAbout:"About",navServices:"Services",navWork:"Portfolio",navContact:"Contact",
    heroEyebrow:"WEB DESIGN & DIGITAL CREATIVE",heroTitle:'A stronger digital presence <span>starts here.</span>',
    heroText:"Modern websites and thoughtful digital design to help small businesses look professional and grow online.",
    heroButton:'Explore my work <span aria-hidden="true">↗</span>',heroSecondary:'Let\'s talk <span aria-hidden="true">→</span>',
    heroNote:"Available for freelance projects",heroBottom:"DESIGNED WITH PURPOSE · BUILT FOR PEOPLE",
    aboutLabel:"01 — ABOUT",aboutTitle:'Digital ideas, made <span>clear and useful.</span>',
    aboutText:"MS DIGITAL is an independent digital creative brand focused on building clean, responsive websites and visual content for businesses. My goal is simple: turn your ideas into a professional online experience.",
    aboutNote:"Every project in this portfolio is a self-initiated concept created to demonstrate design and development skills.",
    servicesLabel:"02 — SERVICES",servicesTitle:'How I can <span>help you.</span>',servicesIntro:"Practical digital solutions designed to make your business stand out.",
    service1Title:"Website Design",service1Text:"Responsive websites that introduce your business and build trust with customers.",
    service2Title:"Landing Pages",service2Text:"Focused pages created to present an offer, service or campaign clearly.",
    service3Title:"Social Media Design",service3Text:"Consistent social graphics that help your brand communicate with confidence.",
    service4Title:"Canva Creative",service4Text:"Digital materials, promotional graphics and simple visual identities.",
    workLabel:"03 — SELECTED CONCEPTS",workTitle:'A few things I\'ve <span>been creating.</span>',workIntro:"Concept projects created to showcase layout, responsive design and visual direction.",
    project1Type:"WEBSITE DESIGN · HTML/CSS",project1Text:"A clean, friendly website concept for a US residential cleaning business.",
    project2Type:"WEBSITE DESIGN · HTML/CSS",project2Text:"An elegant restaurant landing page concept with a warm editorial feel.",
    project3Type:"SOCIAL MEDIA · CANVA",project3Text:"A coordinated set of social media graphics exploring a bold, modern brand style.",
    portfolioDisclaimer:"These are concept projects, not commissioned client work.",
    processLabel:"04 — PROCESS",processTitle:'Simple process.<br><span>Thoughtful results.</span>',processIntro:"Clear communication and a focused approach from the first message to delivery.",
    process1Title:"Discover",process1Text:"Understand your business, goals and project needs.",process2Title:"Design",process2Text:"Plan the structure and create a visual direction.",
    process3Title:"Build",process3Text:"Develop and refine a responsive experience.",process4Title:"Deliver",process4Text:"Review the result and prepare it for launch.",
    contactLabel:"05 — CONTACT",contactTitle:'Have a project<br>in <span>mind?</span>',contactText:"Tell me a little about what you're building. Let's explore how I can help.",
    emailLabel:"Send an email",whatsappLabel:"Message on WhatsApp",formName:"Your name",formEmail:"Your email",formService:"What do you need?",
    formMessage:"Tell me about your project",formButton:"Send project details",formHint:"Your message will open in your email app or WhatsApp. No data is stored on this website.",
    footerText:"Creative websites. Professional design."
  },
  pt: {
    navHome:"Início",navAbout:"Sobre",navServices:"Serviços",navWork:"Portfólio",navContact:"Contato",
    heroEyebrow:"WEB DESIGN & CRIAÇÃO DIGITAL",heroTitle:'Uma presença digital mais forte <span>começa aqui.</span>',
    heroText:"Sites modernos e design digital pensado para ajudar pequenos negócios a transmitir profissionalismo e crescer na internet.",
    heroButton:'Ver meus projetos <span aria-hidden="true">↗</span>',heroSecondary:'Vamos conversar <span aria-hidden="true">→</span>',
    heroNote:"Disponível para projetos freelance",heroBottom:"DESIGN COM PROPÓSITO · FEITO PARA PESSOAS",
    aboutLabel:"01 — SOBRE",aboutTitle:'Ideias digitais de forma <span>clara e útil.</span>',
    aboutText:"A MS DIGITAL é uma marca independente de criação digital, focada em desenvolver sites responsivos e conteúdos visuais para empresas. Meu objetivo é simples: transformar suas ideias em uma experiência profissional na internet.",
    aboutNote:"Todos os projetos deste portfólio são conceitos autorais criados para demonstrar habilidades de design e desenvolvimento.",
    servicesLabel:"02 — SERVIÇOS",servicesTitle:'Como posso <span>ajudar você.</span>',servicesIntro:"Soluções digitais práticas para destacar o seu negócio.",
    service1Title:"Criação de Sites",service1Text:"Sites responsivos que apresentam sua empresa e transmitem confiança aos clientes.",
    service2Title:"Landing Pages",service2Text:"Páginas objetivas para apresentar ofertas, serviços ou campanhas.",
    service3Title:"Design para Redes Sociais",service3Text:"Artes consistentes para sua marca se comunicar com profissionalismo.",
    service4Title:"Criação no Canva",service4Text:"Materiais digitais, artes promocionais e identidades visuais simples.",
    workLabel:"03 — PROJETOS CONCEITUAIS",workTitle:'Alguns projetos que <span>estou criando.</span>',workIntro:"Projetos conceituais para demonstrar estrutura, responsividade e direção visual.",
    project1Type:"CRIAÇÃO DE SITE · HTML/CSS",project1Text:"Conceito de site limpo e acolhedor para uma empresa residencial de limpeza dos Estados Unidos.",
    project2Type:"CRIAÇÃO DE SITE · HTML/CSS",project2Text:"Conceito elegante de landing page para restaurante, com visual editorial acolhedor.",
    project3Type:"REDES SOCIAIS · CANVA",project3Text:"Conjunto de artes para redes sociais com uma identidade visual moderna e marcante.",
    portfolioDisclaimer:"Estes são projetos conceituais, não trabalhos contratados por clientes.",
    processLabel:"04 — PROCESSO",processTitle:'Processo simples.<br><span>Resultados cuidadosos.</span>',processIntro:"Comunicação clara e uma abordagem objetiva, do primeiro contato à entrega.",
    process1Title:"Entender",process1Text:"Conhecer seu negócio, objetivos e necessidades.",process2Title:"Planejar",process2Text:"Definir a estrutura e criar uma direção visual.",
    process3Title:"Desenvolver",process3Text:"Construir e aprimorar uma experiência responsiva.",process4Title:"Entregar",process4Text:"Revisar o resultado e preparar tudo para publicação.",
    contactLabel:"05 — CONTATO",contactTitle:'Tem um projeto<br>em <span>mente?</span>',contactText:"Conte um pouco sobre o que você está criando. Vamos conversar sobre como posso ajudar.",
    emailLabel:"Enviar um e-mail",whatsappLabel:"Conversar pelo WhatsApp",formName:"Seu nome",formEmail:"Seu e-mail",formService:"Do que você precisa?",
    formMessage:"Conte sobre seu projeto",formButton:"Enviar detalhes do projeto",formHint:"Sua mensagem será aberta no seu aplicativo de e-mail ou WhatsApp. Este site não armazena dados.",
    footerText:"Sites criativos. Design profissional."
  }
};

let currentLanguage = "en";
const languageSwitch = document.getElementById("languageSwitch");

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageSwitch.textContent = language === "en" ? "PT" : "EN";
  languageSwitch.setAttribute("aria-label", language === "en" ? "Mudar para português" : "Switch to English");
  document.title = language === "en"
    ? "MS DIGITAL | Web Design & Digital Creative"
    : "MS DIGITAL | Criação de Sites e Design Digital";
  document.querySelectorAll("#service option").forEach((option) => {
    if (language === "pt") {
      const labels = {"Website design":"Criação de sites","Landing page":"Landing page","Social media design":"Design para redes sociais","Canva creative":"Criação no Canva","Other":"Outro"};
      option.textContent = labels[option.value] || option.value;
    } else {
      option.textContent = option.value;
    }
  });
  updateContactLinks();
}

languageSwitch.addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "pt" : "en");
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

function hasEmailConfigured() {
  return CONTACT_EMAIL.trim() !== "" && CONTACT_EMAIL.includes("@");
}

function hasWhatsAppConfigured() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER);
}

function updateContactLinks() {
  const emailLink = document.getElementById("emailLink");
  const whatsappLink = document.getElementById("whatsappLink");

  emailLink.href = hasEmailConfigured() ? `mailto:${CONTACT_EMAIL}` : "#contact";
  emailLink.onclick = (event) => {
    if (!hasEmailConfigured()) {
      event.preventDefault();
      alert(currentLanguage === "pt"
        ? ""
        : "");
    }
  };

  if (hasWhatsAppConfigured()) {
    const greeting = currentLanguage === "pt"
      ? "Olá! Gostaria de conversar sobre um projeto."
      : "Hello! I would like to discuss a project.";
    whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(greeting)}`;
    whatsappLink.target = "_blank";
    whatsappLink.rel = "noopener noreferrer";
    whatsappLink.onclick = null;
  } else {
    whatsappLink.href = "#contact";
    whatsappLink.onclick = (event) => {
      event.preventDefault();
      alert(currentLanguage === "pt"
        ? "Configure seu WhatsApp em js/script.js, na variável WHATSAPP_NUMBER."
        : "Set your WhatsApp number in js/script.js, in the WHATSAPP_NUMBER variable.");
    };
  }
}

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  if (!hasEmailConfigured()) {
    alert(currentLanguage === "pt"
      ? ""
      : "");
    return;
  }

  const formData = new FormData(form);
  const name = String(formData.get("name")).trim();
  const senderEmail = String(formData.get("email")).trim();
  const service = formData.get("service");
  const message = String(formData.get("message")).trim();
  const subject = currentLanguage === "pt"
    ? "Contato pelo site MS DIGITAL"
    : "MS DIGITAL website inquiry";
  const body = currentLanguage === "pt"
    ? `Nome: ${name}\nE-mail: ${senderEmail}\nServiço: ${service}\n\nProjeto:\n${message}`
    : `Name: ${name}\nEmail: ${senderEmail}\nService: ${service}\n\nProject:\n${message}`;

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

setLanguage("en");
