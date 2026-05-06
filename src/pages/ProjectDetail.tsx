import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Terminal, Server, Code } from 'lucide-react';
import { PROJECTS } from '../data';

export function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-white mb-4">404 - Projet introuvable</h1>
        <p className="text-slate-400 font-sans mb-8">Le projet que vous cherchez n'existe pas ou a été déplacé.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-brand-purple text-white font-bold hover:opacity-80 transition-all flex items-center space-x-2 rounded-sm text-xs uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-slate-500 hover:text-brand-cyan transition-colors mb-12 text-xs uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Retour</span>
        </Link>

        {/* Header */}
        <div className="border-l-2 border-brand-purple pl-6 py-2 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] text-brand-cyan uppercase bg-brand-cyan/10 px-2 py-1 font-bold">
              {project.status}
            </span>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] text-brand-cyan opacity-80 uppercase tracking-wider">#{tag}</span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            {project.title}<span className="text-brand-cyan">_</span>
          </h1>
          
          <p className="text-lg text-slate-400 font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metadata section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="border-l border-slate-800 pl-4 py-1">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Client</div>
            <div className="text-sm font-bold text-white tracking-tight">{project.client}</div>
          </div>
          <div className="border-l border-slate-800 pl-4 py-1">
            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Timeline</div>
            <div className="text-sm font-bold text-white tracking-tight">{project.startDate} — {project.endDate}</div>
          </div>
        </div>

        {/* Content Body */}
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-cyan opacity-50"></div>
          <div className="absolute top-6 right-6 opacity-20">
            <Terminal className="w-16 h-16 text-brand-cyan" />
          </div>
          
          <h2 className="text-xs font-bold text-brand-purple uppercase mb-6 tracking-tighter">
            // Détails du projet
          </h2>
          
          <div className="prose prose-invert prose-slate max-w-none font-sans text-sm md:text-base leading-relaxed whitespace-pre-line text-slate-300">
            {project.fullContent}
          </div>
        </div>

        {/* Metrics & Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#0F0F1A] border border-slate-800 p-6 flex items-start gap-4 rounded-sm">
            <div className="p-3 bg-brand-cyan/10 text-brand-cyan rounded-sm">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Impact</div>
              <div className="text-xl font-bold text-white tracking-tight">{project.metric}</div>
            </div>
          </div>
          <div className="bg-[#0F0F1A] border border-slate-800 p-6 flex items-start gap-4 rounded-sm">
            <div className="p-3 bg-brand-purple/10 text-brand-purple rounded-sm">
              <Code className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Stack principale</div>
              <div className="text-sm font-bold text-white tracking-tight leading-tight">
                {project.tags.join(" • ")}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
