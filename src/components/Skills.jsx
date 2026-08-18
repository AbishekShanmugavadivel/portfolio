import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMongoose, 
  SiJsonwebtokens,
  SiTailwindcss, 
  SiMui, 
  SiPython, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiVitest,
  SiPostman, 
  SiFigma 
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { AwsS3Icon, AwsEc2Icon, AwsSqsIcon, AwsSesIcon } from './AwsIcons';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const getSkillIcon = (iconKey, color) => {
    const iconProps = { 
      className: "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 group-hover:scale-105 transition-transform duration-300", 
      style: { color: color } 
    };

    switch (iconKey) {
      case 'html5':
        return <SiHtml5 {...iconProps} />;
      case 'css3':
        return <FaCss3Alt {...iconProps} />;
      case 'javascript':
        return <SiJavascript {...iconProps} />;
      case 'react':
        return <SiReact {...iconProps} />;
      case 'tailwindcss':
        return <SiTailwindcss {...iconProps} />;
      case 'mui':
        return <SiMui {...iconProps} />;
      case 'nodejs':
        return <SiNodedotjs {...iconProps} />;
      case 'express':
        return <SiExpress {...iconProps} style={{ color: '#1E293B' }} />;
      case 'mongodb':
        return <SiMongodb {...iconProps} />;
      case 'mongoose':
        return <SiMongoose {...iconProps} />;
      case 'jwt':
        return <SiJsonwebtokens {...iconProps} />;
      case 'python':
        return <SiPython {...iconProps} />;
      case 'git':
        return <SiGit {...iconProps} />;
      case 'github':
        return <SiGithub {...iconProps} style={{ color: '#0F172A' }} />;
      case 'awss3':
        return <AwsS3Icon className={iconProps.className} />;
      case 'awsec2':
        return <AwsEc2Icon className={iconProps.className} />;
      case 'awssqs':
        return <AwsSqsIcon className={iconProps.className} />;
      case 'awsses':
        return <AwsSesIcon className={iconProps.className} />;
      case 'docker':
        return <SiDocker {...iconProps} />;
      case 'vitest':
        return <SiVitest {...iconProps} />;
      case 'postman':
        return <SiPostman {...iconProps} />;
      case 'figma':
        return <SiFigma {...iconProps} />;
      default:
        return <SiReact {...iconProps} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Aligned Section Heading matching Poppins specification */}
        <div className="text-left mb-16 space-y-2">
          <h2 className="text-3xl sm:text-[34px] font-bold text-slate-900 tracking-tight">
            Skills
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
        </div>

        {/* Clean Logo Showcase Grid (5-6 columns desktop, 3-4 tablet, 2-3 mobile) */}
        <div className="grid grid-cols-2 min-[360px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12 lg:gap-y-14 justify-items-center">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center group cursor-pointer select-none transition-all duration-300"
            >
              {/* Technology Logo */}
              <div className="mb-2.5 p-1 flex items-center justify-center">
                {getSkillIcon(skill.icon, skill.color)}
              </div>

              {/* Technology Name Centered Below Logo */}
              <span className="font-medium text-slate-800 text-xs sm:text-sm lg:text-base tracking-wide group-hover:text-blue-600 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
