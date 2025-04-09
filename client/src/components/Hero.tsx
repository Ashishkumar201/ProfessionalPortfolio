import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-primary">Ashish</span> Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6">Full Stack Developer</h2>
            <p className="text-lg mb-8 max-w-2xl">
              Skilled Full Stack Developer with expertise in MongoDB, Express.js, React, and Node.js (MERN Stack). 
              Proficient in building scalable web applications, RESTful APIs, and database management. Passionate about 
              clean code, responsive design, and optimizing performance for seamless user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="px-6 py-3"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                variant="outline" 
                className="px-6 py-3"
              >
                View Projects
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-12">
              <a href="https://github.com/ashishkumar201" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/ashishkumar201" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:Ashishkumarbagria@gmail.com" className="text-secondary hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2952&q=80" 
              alt="Professional developer workspace" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
