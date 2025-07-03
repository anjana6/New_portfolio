import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const About = () => {

  const educationData = [
    {
      id: 1,
      title: 'University of Kelaniya',
      icon: FaGraduationCap,
      items: [
        'B.Sc (Hons.) Software Engineering',
        'Feb 2018 - June 2022',
        'Web Application development & Mobile Application development'
      ]
    },
    {
      id: 2,
      title: "ST.Thomas' Boys' College Matara",
      icon: FaSchool,
      items: [
        'GCE Advanced Level',
        'July 2012 - Aug 2016',
        'Maths-A Chemistry-B Physics-B'
      ]
    },
    {
      id: 3,
      title: "ST.Thomas' Boys' College Matara",
      icon: FaSchool,
      items: [
        'GCE Ordinary Level',
        'Feb 2006 - Dec 2011',
        'A-4 B-2 C-3'
      ]
    }
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="mb-5">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center font-mono">
            About Me
          </h1>
          
          <div className="relative">
            <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full">
              <div className="relative w-full h-full">
                <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-primary to-blue-600 rounded-full opacity-10"></div>
                <div className="absolute right-1/3 top-1/2 transform -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary to-blue-500 rounded-full opacity-20"></div>
                <div className="absolute right-1/3 top-1/3 transform -translate-y-1/3 w-64 h-64 bg-gradient-to-br from-primary to-blue-400 rounded-full opacity-30"></div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-5/6 h-5/6 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                        <img 
                          src={`${process.env.PUBLIC_URL}/assets/profile.png`} 
                          alt="Anjana Shakthi Profile" 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
                </div>
              </div>
              
              <div className="text-lg text-white leading-relaxed">
                <p>
                I am a graduate software engineer from the University of Kelaniya, Sri Lanka, with over 4 years of hands-on experience in software development. 
                I see myself as a full-stack web developer Mostly Specialized in JavaScript & TypeScript.
                </p>
                <p className="mt-4">
                  My greatest passion in life is to do a better service for the industry and also the society.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-mono">
            Education
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationData.map((education) => (
              <div
                key={education.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <education.icon className="text-3xl text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {education.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {education.items.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start italic">
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 