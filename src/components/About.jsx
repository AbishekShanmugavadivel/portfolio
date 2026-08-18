import { User, MapPin, Briefcase, Code, Brain, Globe, Lightbulb, ArrowRight, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
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

  const infoRows = [
    { label: 'Name', value: 'Abishek S', icon: User, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { label: 'Role', value: 'Full Stack Developer', icon: Code, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { label: 'Location', value: personalInfo.location, icon: MapPin, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { label: 'Experience', value: personalInfo.experience, icon: Briefcase, color: 'text-purple-600 bg-purple-50 border-purple-200' },
  ];

  const focusAreas = [
    { title: 'Full Stack Development', desc: 'Designing & building complete web applications using React, Node.js, Express, and MongoDB.', icon: Code },
    { title: 'AI / Machine Learning', desc: 'Integrating intelligent features, natural language processing, and AI assistants.', icon: Brain },
    { title: 'Modern Web Applications', desc: 'Crafting fast, responsive, and intuitive digital interfaces with robust backend services.', icon: Globe },
    { title: 'Problem Solving', desc: 'Turning complex problems and technical concepts into clean, effective real-world solutions.', icon: Lightbulb },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-100/70 px-3.5 py-1 rounded-full inline-block border border-blue-200/60">
            Personal Profile
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main About Bio Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm border border-slate-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                    Full Stack Developer & Technical Problem Solver
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    Based in Tamil Nadu, India
                  </span>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-lg leading-relaxed font-normal bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/70">
                "{personalInfo.aboutDescription}"
              </p>

              {/* Supporting Focus Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {focusAreas.map((area, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-left space-y-1.5 hover:border-blue-300 transition-colors">
                    <div className="flex items-center gap-2">
                      <area.icon className="w-5 h-5 text-blue-600 shrink-0" />
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{area.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500 leading-normal pl-7">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Know More Action Button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col min-[380px]:flex-row items-start min-[380px]:items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Explore Skills & Portfolio
              </span>
              <button
                onClick={() => scrollToSection('skills')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Know More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-slate-200/80 text-left space-y-6">
              <h4 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Quick Information
              </h4>

              <div className="space-y-4">
                {infoRows.map((info, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/60 hover:bg-blue-50/30 transition-colors">
                    <div className={`p-3 rounded-xl ${info.color} border`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs uppercase font-bold text-slate-400 block tracking-wider">
                        {info.label}
                      </span>
                      <span className="text-slate-900 font-extrabold text-base truncate block">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Internship Highlight Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-md text-left flex items-start gap-4 border border-slate-800">
              <div className="p-3 rounded-2xl bg-blue-600/30 border border-blue-500/40 text-blue-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-white text-base">Vebbox Internship Graduate</h5>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Completed Full Stack Developer Internship and certified workshops in UI/UX Design and Data Analytics at Vebbox Software Solutions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
