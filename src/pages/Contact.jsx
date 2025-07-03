import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'anjanashakthi.ja@gmail.com',
      href: 'mailto:anjanashakthi.ja@gmail.com',
      bgColor: 'bg-gradient-to-br from-red-500 to-pink-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Matara, Sri Lanka',
      href: '#',
      bgColor: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anjanajayasinghe/',
      bgColor: 'bg-gradient-to-br from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/anjana6',
      bgColor: 'bg-gradient-to-br from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-600 hover:to-gray-700'
    }
  ];

  const handleGetInTouch = () => {
    const contactOptions = [
      { name: 'Email', action: () => window.open('mailto:anjanashakthi.ja@gmail.com', '_blank') },
      { name: 'LinkedIn', action: () => window.open('https://www.linkedin.com/in/anjanajayasinghe/', '_blank') }
    ];

    const dialog = document.createElement('div');
    dialog.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    dialog.innerHTML = `
      <div class="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl max-w-md w-full mx-4">
        <h3 class="text-2xl font-bold text-white mb-6 text-center">Choose Contact Method</h3>
        <div class="space-y-3">
          ${contactOptions.map(option => `
            <button class="w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-white font-medium text-left">
              ${option.name}
            </button>
          `).join('')}
        </div>
        <button class="w-full mt-6 p-3 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-medium transition-colors duration-200">
          Cancel
        </button>
      </div>
    `;

    const buttons = dialog.querySelectorAll('button');
    buttons.forEach((button, index) => {
      if (index < contactOptions.length) {
        button.addEventListener('click', () => {
          contactOptions[index].action();
          document.body.removeChild(dialog);
        });
      } else {
        button.addEventListener('click', () => {
          document.body.removeChild(dialog);
        });
      }
    });

    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) {
        document.body.removeChild(dialog);
      }
    });

    document.body.appendChild(dialog);
  };

  return (
    <div className="section-padding">
      <div className="container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center font-mono">
          Get in Touch
        </h1>

        <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          I'm always interested in hearing about new opportunities and exciting projects. 
          Feel free to reach out through on these platforms
        </p>

    
        <div className="text-center mb-12">
          <button
            onClick={handleGetInTouch}
            className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-700 hover:from-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
              {/* <h2 className="text-2xl font-bold text-white mb-6">
                Contact Details
              </h2> */}

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <info.icon className="text-xl" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
              {/* <h2 className="text-2xl font-bold text-white mb-6">
                Connect With Me
              </h2> */}

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className={`w-10 h-10 ${social.bgColor} ${social.hoverColor} rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      <social.icon className="text-lg" />
                    </div>
                    <span className="font-medium text-white">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 