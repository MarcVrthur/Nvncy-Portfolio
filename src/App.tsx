/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="font-mono min-h-screen text-slate-300 selection:bg-brand-purple/30 selection:text-white flex flex-col">
        {/* Navigation (Fixed) */}
        <header className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/50 px-6 py-4 md:px-10 md:py-6">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_8px_var(--color-brand-cyan)]"></div>
              <span className="text-lg font-bold tracking-tighter text-white">NVNCY.DATA</span>
            </a>
            <nav className="hidden md:flex gap-8 text-xs uppercase tracking-widest">
              <a href="/#about" className="hover:text-brand-cyan transition-colors">_About</a>
              <a href="/#skills" className="hover:text-brand-cyan transition-colors">_Skills</a>
              <a href="/#projects" className="hover:text-brand-cyan transition-colors">_Projects</a>
              <a href="/#experience" className="hover:text-brand-cyan transition-colors">_Experience</a>
            </nav>
          </div>
        </header>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
