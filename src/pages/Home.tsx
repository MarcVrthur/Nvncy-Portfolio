import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Database,
  GraduationCap,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { SKILLS, PROJECTS, EXPERIENCES, EDUCATION, SOFT_SKILLS } from '../data';

// Hook personnalisé pour l'effet typewriter
function useTypewriter(text: string, speed = 50) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayedText(""); 
    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayedText;
}

export function Home() {
  const typedTitle = useTypewriter("Data Engineer | Data Analyste | Data Architect", 60);

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const serviceId = 'service_h0xmuo8';
    const templateId = 'template_tboj8cn';
    const publicKey = 'iJ6LVZtszME8jmI86';

    if (!serviceId || !templateId || !publicKey) {
      alert("⚠️ Configuration EmailJS manquante.");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus('success');
          form.current?.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          setSubmitStatus('error');
        }
      );
  };

  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
      
      {/* HERO SECTION */}
      <section id="hero" className="min-h-[60vh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-2 text-brand-cyan text-xs uppercase tracking-widest mb-4">
            <Terminal className="w-4 h-4" />
            <span>Système initialisé. Connexion établie.</span>
          </div>
          
          <div className="border-l-2 border-brand-purple pl-6 py-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-2 uppercase">
              Nancy Prisca Dobé<span className="text-brand-cyan">.</span>
            </h1>
            
            <div className="text-lg md:text-2xl font-bold text-brand-purple uppercase tracking-wide min-h-[40px]">
              {typedTitle}<span className="cursor-blink">_</span>
            </div>
            
            <p className="mt-4 max-w-sm text-sm md:text-base text-slate-400 font-sans leading-relaxed">
              Expérience confirmée en analyse de données commerciales, conception de tableaux de bord interactifs et formulation de recommandations stratégiques.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-8 text-xs uppercase tracking-widest">
            <a href="#projects" className="px-6 py-3 bg-brand-purple text-white font-bold hover:opacity-80 transition-all flex items-center space-x-2">
              <span>Voir mes projets</span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 border border-slate-800 hover:border-brand-cyan hover:text-brand-cyan transition-colors rounded-sm">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/nancy-prisca-dobe-167687222" target="_blank" rel="noreferrer" className="p-3 border border-slate-800 hover:border-brand-cyan hover:text-brand-cyan transition-colors rounded-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:nancydobe3@gmail.com" className="p-3 border border-slate-800 hover:text-white transition-colors rounded-sm">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          <h2 className="text-xs font-bold text-brand-purple uppercase mb-4 tracking-tighter">
            // À_propos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 text-slate-400 font-sans font-light leading-relaxed">
            <div className="md:col-span-2 space-y-4">
              <p>
                Data Analyste avec une expérience confirmée en analyse de données commerciales, 
                conception de tableaux de bord interactifs (Power BI) et formulation 
                de recommandations stratégiques.
              </p>
              <p>
                Je suis spécialisée dans la transformation de données brutes en insights 
                actionnables pour faciliter la prise de décision. Actuellement en stage 
                chez SACO sur des missions de reporting opérationnel dans la filière cacao.
              </p>
              <div className="flex items-center space-x-2 text-brand-cyan font-mono text-sm pt-4">
                <MapPin className="w-4 h-4" />
                <span>Basée à Cocody Angré, Côte d'Ivoire</span>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-cyan/20 translate-x-4 translate-y-4 rounded-sm transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="relative aspect-square bg-[#111118] border border-white/10 p-6 rounded-sm flex items-center justify-center font-mono text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),rgba(0,0,0,0))]"></div>
                <Database className="w-24 h-24 text-slate-700 mx-auto" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <h2 className="text-xs font-bold text-brand-purple uppercase mb-4 tracking-tighter">
            // Tech Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-sm space-y-4 hover:border-brand-cyan/50 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  {skillGroup.icon}
                  <h3 className="text-[10px] text-slate-500 uppercase italic">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, idj) => (
                    <motion.span 
                      key={idj} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-block px-2 py-1 bg-slate-800 text-[10px] text-slate-300 border border-transparent hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan transition-colors duration-300 rounded-sm cursor-default hover:shadow-[0_0_8px_var(--color-brand-cyan)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          <h2 className="text-xs font-bold text-brand-purple uppercase mb-4 tracking-tighter">
            // Real-world Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, idx) => (
              <Link to={`/project/${project.id}`} key={idx}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group bg-[#0F0F1A] border border-slate-800 p-6 flex flex-col h-full hover:border-brand-cyan/60 transition-all duration-300 relative overflow-hidden rounded-sm hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)] hover:z-10"
                >
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-1">
                      {project.status}
                    </span>
                    <span className="text-slate-500 group-hover:text-white transition-colors mr-6">
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                  
                  <h3 className="text-sm font-bold text-white mb-2 underline decoration-brand-purple underline-offset-4">{project.title}</h3>
                  <p className="text-[11px] text-slate-400 font-sans mb-4 flex-grow">{project.description}</p>
                  
                  <div className="mt-auto space-y-3">
                    <div className="text-[10px] text-brand-cyan uppercase bg-brand-cyan/10 inline-block px-2 py-1">
                      Résultat: {project.metric}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] text-brand-cyan opacity-70 uppercase tracking-wider">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <section id="experience" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16"
        >
          {/* Experience */}
          <div className="space-y-8">
            <h2 className="text-xs font-bold text-brand-purple uppercase mb-4 tracking-tighter">
              // Expérience
            </h2>
            
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="relative pl-4 border-l border-slate-700">
                  <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-brand-cyan rounded-full"></span>
                  <p className="text-xs font-bold text-white">
                    {exp.role} @ {exp.company}
                  </p>
                  <p className="text-[10px] text-slate-500 italic mb-2">{exp.period}</p>
                  <p className="text-[11px] text-slate-400 font-sans">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h2 className="text-xs font-bold text-brand-purple uppercase mb-4 tracking-tighter">
              // Formation
            </h2>
            
            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="bg-slate-900/40 border border-slate-800 p-5 rounded-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap className="w-16 h-16 text-brand-purple" />
                  </div>
                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center space-x-2 text-brand-purple">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-[10px] uppercase font-bold tracking-tighter">Diplôme</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{edu.degree}</h3>
                      <p className="text-[10px] text-slate-500 italic">{edu.school} — {edu.period}</p>
                    </div>
                    {edu.description && (
                      <p className="text-[11px] text-slate-400 font-sans pt-3 border-t border-slate-800">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-xs font-bold text-brand-cyan uppercase mb-4 mt-8 tracking-tighter">
              // Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {SOFT_SKILLS.map((skill, idx) => (
                <span key={idx} className="inline-block px-3 py-1.5 bg-slate-800/50 text-xs text-slate-300 border border-slate-700/50 rounded-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
        </motion.div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto space-y-8 bg-slate-900/40 border border-slate-800 p-8 rounded-sm"
        >
          <div className="text-center space-y-4">
            <h2 className="text-xs font-bold text-brand-purple uppercase tracking-tighter">
              // Contact
            </h2>
            <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Prêt à collaborer ?</h3>
            <p className="text-sm text-slate-400 font-sans">
              N'hésitez pas à me contacter pour discuter de vos données et de la façon dont nous pourrions travailler ensemble.
            </p>
          </div>

          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs text-brand-cyan uppercase tracking-wider">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  required
                  className="w-full bg-[#0F0F1A] border border-slate-700 p-3 rounded-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs text-brand-cyan uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  required
                  className="w-full bg-[#0F0F1A] border border-slate-700 p-3 rounded-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-xs text-brand-cyan uppercase tracking-wider">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                required
                className="w-full bg-[#0F0F1A] border border-slate-700 p-3 rounded-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans text-sm"
                placeholder="Proposition de mission"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-xs text-brand-cyan uppercase tracking-wider">Message</label>
              <textarea 
                id="message"
                name="message" 
                required
                rows={5}
                className="w-full bg-[#0F0F1A] border border-slate-700 p-3 rounded-sm text-white focus:outline-none focus:border-brand-purple transition-colors font-sans text-sm resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-cyan/10 border border-brand-cyan text-brand-cyan font-bold uppercase tracking-wider py-3 hover:bg-brand-cyan hover:text-[#0B1120] transition-colors rounded-sm text-sm flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
            </button>
            
            {submitStatus === 'success' && (
              <p className="text-brand-cyan text-sm text-center">Votre message a été envoyé avec succès !</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-brand-purple text-sm text-center">Une erreur s'est produite lors de l'envoi. Veuillez réessayer.</p>
            )}
          </form>
        </motion.div>
      </section>

    </main>
  );
}
