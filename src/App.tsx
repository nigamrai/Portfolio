import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Award, ExternalLink, ChevronDown, Terminal, Users } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Tailor Management System',
      tech: 'MERN Stack',
      description: 'Full-stack application for managing clothing orders and customer measurements with dynamic React interfaces and secure RESTful APIs.',
      features: ['Order Management', 'Measurement Tracking', 'Customer Database', 'Responsive UI/UX'],
      github: 'https://github.com/nigamrai'
    },
    {
      title: 'Real-Time Collaborative Workspace',
      tech: 'MERN + WebSockets',
      description: 'Collaborative platform enabling teams to share updates and communicate in real-time with instant board updates and live chat.',
      features: ['Live Chat', 'WebSocket Integration', 'Task Updates', 'Real-time Notifications'],
      github: 'https://github.com/nigamrai'
    },
    {
      title: 'Face Detection Attendance System',
      tech: 'MERN + Python',
      description: 'Automated attendance tracking system integrating Python face-recognition libraries with Node.js backend.',
      features: ['Face Recognition', 'Real-time Detection', 'Attendance Logs', 'User Registration'],
      github: 'https://github.com/nigamrai'
    },
    {
      title: 'Futsal Booking System',
      tech: 'MERN Stack',
      description: 'Platform for booking futsal grounds with live slot availability updates using WebSockets and secure authentication.',
      features: ['Live Availability', 'Booking Management', 'Secure Auth', 'Responsive Design'],
      github: 'https://github.com/nigamrai'
    },
    {
      title: 'Learning Management System',
      tech: 'MERN Stack',
      description: 'E-learning platform with course enrollment, progress tracking, and assignment submissions with reusable React components.',
      features: ['Course Management', 'Progress Tracking', 'Assignment System', 'Student Dashboard'],
      github: 'https://github.com/nigamrai'
    }
  ];

  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Advanced' },
    { name: 'MongoDB', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Advanced' },
    { name: 'PHP', level: 'Basic' }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'text-green-400';
      case 'Intermediate':
        return 'text-yellow-400';
      case 'Basic':
        return 'text-orange-400';
      default:
        return 'text-cyan-400';
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-green-500/20 border-green-500/40 text-green-300';
      case 'Intermediate':
        return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';
      case 'Basic':
        return 'bg-orange-500/20 border-orange-500/40 text-orange-300';
      default:
        return 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/3 right-0 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <Terminal className="text-cyan-400" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NR</span>
          </div>
          <div className="flex gap-8">
            {['home', 'about', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`capitalize transition-all hover:text-cyan-400 ${
                  activeSection === section ? 'text-cyan-400' : 'text-gray-400'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
        <div className="text-center z-10 max-w-4xl">
          <div className="mb-6 inline-block">
            <img
              src="/0-02-03-5801a79220566c4d234e634fb9525f0041541f3f039e0520b1ccbdb4ec94c03b_f87292d3beba7a3d.jpg"
              alt="Nigam Rai"
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-500 shadow-2xl shadow-cyan-500/50"
            />
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
            NIGAM RAI
          </h1>
          <p className="text-3xl text-cyan-300 mb-6">MERN Stack Developer</p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate full-stack developer building dynamic, responsive, and scalable web applications
            with a focus on cutting-edge technologies and exceptional user experiences.
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a href="mailto:nigamdeveloprai2023@gmail.com" className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full border border-cyan-500/30 transition-all hover:scale-110">
              <Mail className="text-cyan-400" />
            </a>
            <a href="tel:+9779840759969" className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full border border-cyan-500/30 transition-all hover:scale-110">
              <Phone className="text-cyan-400" />
            </a>
            <a href="https://github.com/nigamrai" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full border border-cyan-500/30 transition-all hover:scale-110">
              <Github className="text-cyan-400" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full border border-cyan-500/30 transition-all hover:scale-110">
              <Linkedin className="text-cyan-400" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <MapPin size={20} className="text-cyan-400" />
            <span>Sukhedhara, Nepal</span>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="mx-auto text-cyan-400" size={32} />
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl z-10">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 shadow-xl shadow-cyan-500/10">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Passionate and results-driven <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> with
              hands-on experience in building dynamic, responsive, and scalable web applications using MongoDB, Express.js,
              React, and Node.js.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Adept at creating full-stack solutions with a focus on both front-end and back-end development, ensuring
              high performance and exceptional user experiences. I thrive on solving complex problems and transforming
              innovative ideas into reality through code.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full z-10">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">{skill.name}</span>
                </div>
                <div className="flex justify-center">
                  <span className={`px-4 py-2 rounded-full border font-semibold text-sm ${getLevelBadgeColor(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['GitHub', 'GitLab', 'Bootstrap', 'WebSockets', 'RESTful APIs'].map((tech) => (
              <span
                key={tech}
                className="px-6 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-full text-cyan-300 hover:bg-cyan-500/10 transition-all hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full z-10">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Code className="text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500/10 hover:bg-cyan-500/20 rounded-full border border-cyan-500/30 transition-all hover:scale-110"
                  >
                    <Github className="text-cyan-400" size={20} />
                  </a>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-cyan-400 text-sm mb-4 font-semibold">{project.tech}</p>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl w-full z-10">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>

          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3">
              <Award className="text-cyan-400" />
              Achievements
            </h3>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0 shadow-lg shadow-cyan-500/50">
                  2nd
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-white mb-2">Intra-College Hackathon - 2nd Place</h4>
                  <p className="text-cyan-400 font-semibold mb-3">Aadim College Hackathon</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Developed a <span className="text-cyan-400 font-semibold">Tournament Registration System with Opponent Finder</span> using MERN Stack.
                    Due to limited time, focused on implementing the futsal registration module with real-time opponent matching capabilities.
                  </p>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="text-cyan-400" size={20} />
                      <span className="text-white font-semibold">Team: NCNS Innovators</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-7">
                      {['Nigam Rai', 'Sapana Rai', 'Chhiring Yonjan Tamang', 'Naresh Shahi'].map((member) => (
                        <span
                          key={member}
                          className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-300"
                        >
                          {member}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-white font-semibold mb-2">Tech Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                      {['MongoDB', 'Express.js', 'React', 'Node.js', 'WebSockets'].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="https://github.com/nigamrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-400 transition-all hover:scale-105"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3">
              <Award className="text-cyan-400" />
              Certifications
            </h3>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Full Stack Web Development 1.0</h4>
                  <p className="text-gray-400 mb-3">Issued by PW Skills</p>
                  <a
                    href="https://learn.pwskills.com/certificate/791a881a-4efe-4204-8d85-1a708b98ea5c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl w-full z-10 text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 shadow-xl shadow-cyan-500/10">
            <p className="text-2xl text-gray-300 mb-8">
              Interested in collaborating or have a project in mind?
            </p>
            <p className="text-xl text-gray-400 mb-12">
              Feel free to reach out and let's create something amazing together!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:nigamdeveloprai2023@gmail.com"
                className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Mail className="text-cyan-400 mx-auto mb-3" size={32} />
                <p className="text-white font-semibold mb-1">Email</p>
                <p className="text-sm text-gray-400 break-all">nigamdeveloprai2023@gmail.com</p>
              </a>
              <a
                href="tel:+9779840759969"
                className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Phone className="text-cyan-400 mx-auto mb-3" size={32} />
                <p className="text-white font-semibold mb-1">Phone</p>
                <p className="text-sm text-gray-400">(+977) 9840759969</p>
              </a>
              <a
                href="https://github.com/nigamrai"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl p-6 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <Github className="text-cyan-400 mx-auto mb-3" size={32} />
                <p className="text-white font-semibold mb-1">GitHub</p>
                <p className="text-sm text-gray-400">@nigamrai</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-cyan-500/20 py-8 text-center z-10 relative">
        <p className="text-gray-400">
          © 2025 Nigam Rai. Crafted with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">passion</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
