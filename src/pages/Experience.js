import React from 'react';

const Experience = () => {

  const experiences = [
    {
      id: 1,
      company: 'Bevolv',
      logo: 'B',
      position: 'Software Engineer (Full-time)',
      period: 'Sep. 2023 – Present',
      achievements: [
        'Developed the CRVS (Civil Registration and Vital Statistics) application for the Government of the Kingdom of Tonga to record vital events.',
        'Integrated the MOSIP product with the Tonga CRVS application.',
        'Collaborated closely with the OpenCRVS core team to implement necessary modifications to the OpenCRVS product.',
        'Developed a document collaboration tool with workflow management, designed as a product for investment companies.',
        'Developed RESTful API and frontend component.',
        'Led interns and junior developers to deliver a successful product.',
        'Worked closely with Product Managers, Business Analysts, and QA Engineers in Agile sprints to meet project deadlines.'
      ],
      technologies: ['React', 'Node.js', 'express', 'GraphQL', 'Docker', 'Typescript','MongoDB' ,'Sqlite', 'Redis', 'Chakra UI']
    },
    {
      id: 2,
      company: 'Inova IT systems',
      logo: 'I',
      position: 'Software Engineer',
      period: 'Aug. 2022 – Aug. 2023',
      achievements: [
        'Developed an application to digitize forms.',
        'Built a package delivery service to track customer parcels at every step.',
        'Implemented a role-based authentication mechanism.',
        'Developed secure REST APIs and frontend components.'
      ],
      technologies: ['React', 'Node.js', 'express', 'Nest.js', 'Docker', 'Typescript', 'MongoDB', 'RabbitMQ', 'Chakra UI', 'Material UI']
    },
    {
      id: 3,
      company: 'Mobile App Mart',
      logo: 'M',
      position: 'Software Engineer',
      period: 'Aug. 2021 – July 2022',
      achievements: [
        'Developed a Shopify plugin that enables end-to-end video calls between customers and agents during product sales in the store.',
        'Developed RESTful APIs for backend services',
        'Logged application data and logs into Elasticsearch.',
        'Implemented Kibana dashboards for log visualization and monitoring'
      ],
      technologies: ['React', 'Node.js', 'express', 'JavaScript', 'MongoDB', 'Elasticsearch', 'Kibana']
    },
    {
      id: 4,
      company: 'Redblocks',
      logo: 'R',
      position: 'Associate Software Engineer & Intern Software Engineer',
      period: 'Oct 2020 – July 2021',
      achievements: [
        'Developed a Human Resource Management System to manage employee profiles, leave records, attendance, medical claims, and company policies.',
        'Built serverless Lambda functions to support scalable backend services.',
        'Developed an online entertainment platform for kids to enhance learning skills and abilities. This platform also allows kids to attend live online sessions.',
        'Created an application to automate the BOQ (Bill of Quantities) process in the construction industry.',
        'Developed secure REST APIs and frontend components.',
        'Integrated Stripe payment gateway for secure transactions.',
        'Wrote unit tests to ensure code quality and reliability.'
      ],
      technologies: ['React', 'Node.js', 'express', 'Nest.js', 'JavaScript', 'TypeScript', 'MySQL','MongoDB', 'AWS Services', 'Ant Design', 'Material UI','CSS']
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
                  <p className="text-white text-sm whitespace-nowrap">
                    {experience.period}
                  </p>
                </div>
                
                <div className="hidden md:flex flex-shrink-0 justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {experience.logo}
                  </div>
                </div>
                
                <div className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-primary mb-1">
                      {experience.position}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-white flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-block bg-gradient-to-r from-emerald-400 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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