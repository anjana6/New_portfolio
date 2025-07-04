import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import SEO from '../components/SEO';

const Home = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Software Engineer';

  const typeText = useCallback(() => {
    let currentIndex = 0;
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
        
        setTimeout(() => {
          deleteText();
        }, 2000);
      }
    }, 150);
  }, []);

  const deleteText = useCallback(() => {
    let currentIndex = fullText.length;
    setIsTyping(true);
    
    const deletingInterval = setInterval(() => {
      if (currentIndex >= 0) {
        setText(fullText.slice(0, currentIndex));
        currentIndex--;
      } else {
        setIsTyping(false);
        clearInterval(deletingInterval);
        
        setTimeout(() => {
          typeText();
        }, 1000);
      }
    }, 100);
  }, [typeText]);

  useEffect(() => {
    typeText();
  }, [typeText]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Anjana(cv).pdf';
    link.download = 'Anjana(CV).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/anjanajayasinghe/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/sharkja123?igsh=MTQyOHBuN2Z6emtyOA==', label: 'Instagram' },
    { icon: FaGithub, href: 'https://github.com/anjana6', label: 'GitHub' },
  ];

  return (
    <>
      <SEO 
        title="Anjana Shakthi - Full Stack Software Engineer Portfolio"
        description="Full Stack Software Engineer specializing in React, Node.js, and modern web technologies. View my projects, skills, and experience in software development."
        keywords="Full Stack Developer, Software Engineer, React Developer, Node.js Developer, Web Development, JavaScript, TypeScript, Portfolio"
        url="/"
      />
      <div className="min-h-screen flex items-center justify-center section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-white mb-2">Hi, my name is</p>
          
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center">
              Anjana Shakthi
            </h1>

            <h2 className="text-2xl text-white mb-6 text-center">
              I am a <span className="typewriter-text">{text}</span>
              {isTyping && <span className="cursor">|</span>}
            </h2>
            
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            I create functional, scalable, and user-friendly applications to solve real problems.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-200 text-2xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-700 hover:from-emerald-700 text-white px-6 py-2 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </button>
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r bg-white hover:from-emerald-700 hover:from-emerald-700 px-6 py-2 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                CV Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 