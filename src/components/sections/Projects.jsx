import React from 'react'
import { RevealOnScroll } from '../ReavealOnScroll'

const Projects = () => {
  return (
    <section id='projects' className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> VirtualR</h3>
              <p className="text-gray-400 mb-4">
               Empower your creativity and bring your VR app ideas to life with our intuitive developement tools. Get started today and turn your imagination into immersive reality!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://virtual-r-psi-kohl.vercel.app/" target='blank'
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>                
              </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> APOD PROJECT</h3>
              <p className="text-gray-400 mb-4">
               A dynamic app that integrates with NASA's Astronomy Picture of the Day (APOD) API to display a new space image and its accompanying description every day, offering users a visually engaging and educational astronomy experience
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://apodproject.vercel.app/" target='blank'
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>                
              </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Todo List</h3>
              <p className="text-gray-400 mb-4">
               A simple yet functional to-do list application built with React, allowing users to add, edit, and delete tasks with a clean and responsive interface for easy task management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwindcss"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://reactjs-todo-list-iota.vercel.app/" target='blank'
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>                
              </div>
            </div>
             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Javascript Quiz</h3>
              <p className="text-gray-400 mb-4">
              An interactive quiz application built with JavaScript that dynamically presents multiple-choice questions, tracks scores in real time, and provides instant feedback, offering a fun and engaging way to test knowledge.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML5", "CSS", "Javascript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://js-quiz-gamma.vercel.app/" target='blank'
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>                
              </div>
            </div>
            
          </div>
        </div>
        </RevealOnScroll>
    </section>
  )
}    

export default Projects