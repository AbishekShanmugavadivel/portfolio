import { ArrowRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';


export default function Hero() {
  const scrollToSection = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      const navHeight = 70;
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#0B132B] text-white flex items-center py-16 lg:py-24 overflow-hidden">
      {/* Background Futuristic Ambient Glowing Orbs & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Greeting, Role, Description, Buttons, Social Links */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium tracking-wide backdrop-blur-md">

              <span>Hello, I'm</span>
            </div>

            {/* Name Headline */}
            <div className="space-y-2">
              <h1 className="text-[32px] min-[360px]:text-[40px] sm:text-[56px] lg:text-[68px] font-bold tracking-tight text-white leading-tight sm:leading-none">
                {personalInfo.name}
              </h1>
              <p className="text-base min-[360px]:text-lg sm:text-2xl font-semibold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.title}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-lg leading-[1.7] max-w-2xl font-normal">
              "{personalInfo.heroDescription}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col min-[400px]:flex-row items-stretch min-[400px]:items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  scrollToSection('contact');
                  window.dispatchEvent(new CustomEvent('prefillContact', { detail: { subject: 'Hiring Inquiry' } }));
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-100 hover:text-white font-semibold text-base border border-slate-700/80 hover:border-blue-500/50 transition-all cursor-pointer backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Mail className="w-5 h-5 text-blue-400" />
                Hire / Contact Me
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center gap-4">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all hover:scale-110"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all hover:scale-110"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter X Profile"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all hover:scale-110"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Me"
                  className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Real Developer Profile Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            <div className="relative w-60 h-60 sm:w-76 sm:h-76 lg:w-90 lg:h-90 flex items-center justify-center">

              {/* Outer Glowing Futuristic Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-600 p-[3px] animate-pulse shadow-[0_0_50px_rgba(59,130,246,0.35)]">
                <div className="w-full h-full bg-[#0B132B] rounded-full"></div>
              </div>

              {/* Middle Concentric Decorative Ring */}
              <div className="absolute -inset-2.5 rounded-full border-2 border-dashed border-cyan-400/30 animate-spin" style={{ animationDuration: '30s' }}></div>

              {/* Real Profile Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-slate-900 flex items-center justify-center">
                <img
                  src="/images/abishek-profile.jpg"
                  alt="Abishek S - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
