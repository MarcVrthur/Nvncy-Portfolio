import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Terminal, 
  Database,
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { SKILLS, PROJECTS, EXPERIENCES } from '../data';

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
  const typedTitle = useTypewriter("Data Developer | Machine Learning & Analytics", 60);

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
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-2">
              Data Developer<span className="text-brand-cyan">_</span>
            </h1>
            
            <div className="text-lg md:text-2xl font-bold text-brand-purple uppercase tracking-wide min-h-[40px]">
              {typedTitle}<span className="cursor-blink">_</span>
            </div>
            
            <p className="mt-4 max-w-sm text-sm md:text-base text-slate-400 font-sans leading-relaxed">
              Je construis des pipelines robustes, j'entraîne des modèles intelligents 
              et je conçois des systèmes data qui résolvent de vrais problèmes.
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
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 border border-slate-800 hover:border-brand-cyan hover:text-brand-cyan transition-colors rounded-sm">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:email@example.com" className="p-3 border border-slate-800 hover:text-white transition-colors rounded-sm">
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
                Passionnée par la transformation de données brutes en insights actionnables. 
                Je navigue entre l'ingénierie des données pour garantir des flux fiables, 
                et le machine learning pour en extraire la quintessence.
              </p>
              <p>
                Mon approche combine la rigueur du génie logiciel 
                avec l'intuition de l'analyste. J'aime concevoir des architectures qui scalent 
                et des modèles qui performent en conditions réelles.
              </p>
              <div className="flex items-center space-x-2 text-brand-cyan font-mono text-sm pt-4">
                <MapPin className="w-4 h-4" />
                <span>Basée à Abidjan, Côte d'ivoire</span>
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
            
            <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap className="w-16 h-16 text-brand-purple" />
              </div>
              <div className="relative z-10 space-y-3">
                <div className="flex items-center space-x-2 text-brand-purple">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Diplôme Universitaire</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Master Informatique & Science des données</h3>
                  <p className="text-[10px] text-slate-500 italic">Université de [Nom de l'Université] — 2020</p>
                </div>
                <p className="text-[11px] text-slate-400 font-sans pt-3 border-t border-slate-800">
                  Spécialisation en architectures Big Data, modélisation prédictive et optimisation algorithmique.
                </p>
              </div>
            </div>
          </div>
          
        </motion.div>
      </section>

    </main>
  );
}
