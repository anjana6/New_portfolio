import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaTools, 
  FaLightbulb,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaSyncAlt,
  FaUserTie,
  FaPuzzlePiece
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiBootstrap,
  SiAntdesign,
  SiMui,
  SiExpress,
  SiNestjs,
  SiServerless,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiPostman,
  SiSwagger,
  SiBitbucket,
  SiRabbitmq,
  SiClickup,
  SiJira
} from 'react-icons/si';
import SEO from '../components/SEO';

const Skills = () => {

  const skillCategories = [
    {
      title: 'Front-end',
      icon: FaReact,
      skills: [
        { name: 'React', icon: FaReact, color: 'text-blue-500' },
        { name: 'Next JS', icon: SiNextdotjs, color: 'text-black' },
        { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
        { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
        { name: 'Ant Design', icon: SiAntdesign, color: 'text-blue-600' },
        { name: 'Material UI', icon: SiMui, color: 'text-blue-600' }
      ]
    },
    {
      title: 'Back-end',
      icon: FaNodeJs,
      skills: [
        { name: 'Node JS', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Express JS', icon: SiExpress, color: 'text-black' },
        { name: 'Nest JS', icon: SiNestjs, color: 'text-red-600' },
        { name: 'Serverless', icon: SiServerless, color: 'text-orange-500' }
      ]
    },
    {
      title: 'Database',
      icon: FaDatabase,
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
        { name: 'SQLite', icon: SiSqlite, color: 'text-blue-500' }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: FaTools,
      skills: [
        { name: 'Git & GitHub', icon: FaGithub, color: 'text-black' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
        { name: 'Swagger', icon: SiSwagger, color: 'text-green-600' },
        { name: 'BitBucket', icon: SiBitbucket, color: 'text-blue-600' },
        { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-orange-600' },
        { name: 'BullMQ', icon: SiRabbitmq, color: 'text-red-600' },
        { name: 'ClickUp', icon: SiClickup, color: 'text-purple-600' },
        { name: 'Jira', icon: SiJira, color: 'text-blue-600' }
      ]
    },
    {
      title: 'Core Competencies',
      icon: FaPuzzlePiece,
      skills: [
        { name: 'Problem Solving', icon: FaLightbulb, color: 'text-yellow-500' },
        { name: 'Agile Methodologies', icon: FaSyncAlt, color: 'text-green-500' },
        { name: 'Team Leadership', icon: FaUserTie, color: 'text-blue-500' }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Skills & Technologies - Anjana Shakthi's Technical Expertise"
        description="Explore Anjana Shakthi's technical skills including React, Node.js, TypeScript, MongoDB, and modern web development technologies. Full-stack developer expertise."
        keywords="React Developer, Node.js Developer, TypeScript Developer, Full Stack Skills, Web Development Technologies, JavaScript, MongoDB, MySQL, Frontend, Backend"
        url="/skills"
      />
      <div className="section-padding">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
            My Tech Arsenal
          </h1>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-8">
                  <category.icon className="text-3xl text-primary mr-3" />
                  <h2 className="text-xl font-bold text-white">
                    {category.title}
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="backdrop-blur-md bg-white/10 rounded-lg shadow-md p-6 border border-white/20 hover:shadow-lg transition-shadow duration-300 text-center group shine-effect"
                    >
                      <div className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                        <skill.icon />
                      </div>
                      <h3 className="font-semibold text-white text-sm">
                        {skill.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills; 