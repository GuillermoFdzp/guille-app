import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-auto">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <a 
          href="https://github.com/GuillermoFdzp" 
          className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6" />
          <span>Github</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/guillermofernándezpérez/"
          className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>
      </div>
    </footer>
  );
}