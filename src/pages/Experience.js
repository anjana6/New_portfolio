import React, { useEffect } from 'react';
import { FaBuilding } from 'react-icons/fa';

const Experience = () => {

  const experiences = [
    {
      id: 1,
      company: 'Bevolv',
      logo: 'H',
      position: 'Software Engineer (Full-time)',
      period: 'September 2023 – Present',
      achievements: [
        'example content',
        'example content',
        'example content',
        'example content'
      ]
    },
    {
      id: 2,
      company: 'Inova IT systems',
      logo: 'P',
      position: 'Software Engineer',
      period: 'August 2022 – August 2023',
      achievements: [
        'example content',
        'example content',
        'example content',
        'example content'
      ]
    },
    {
      id: 3,
      company: 'Mobile App Mart',
      logo: 'S',
      position: 'Software Engineer',
      period: 'Aug. 2021 – July 2022',
      achievements: [
        'example content',
        'example content',
        'example content',
        'example content'
      ]
    },
    {
      id: 4,
      company: 'Redblocks',
      logo: 'I',
      position: 'Associate Software Engineer',
      period: 'May 2021 – July 2021',
      achievements: [
        'example content',
        'example content',
        'example content',
        'example content'
      ]
    },
    {
      id: 4,
      company: 'Redblocks',
      logo: 'I',
      position: 'Intern Software Engineer',
      period: 'Oct. 2021 – April 2021',
      achievements: [
        'example content',
        'example content',
        'example content',
        'example content'
      ]
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
          Professional Experience
        </h1>

        <div className="w-full">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-12">
                <div className="w-60 text-right pr-8">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {experience.company}
                  </h3>
                  <p className="text-gray-600 font-medium whitespace-nowrap">
                    {experience.period}
                  </p>
                </div>
                
                <div className="hidden md:flex flex-shrink-0 justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {experience.logo}
                  </div>
                </div>
                
                <div className="flex-1 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {experience.position}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-gray-700 flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 