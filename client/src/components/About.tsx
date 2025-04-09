import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
              alt="Modern tech workspace" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-lg mb-6">
              Passionate Full Stack Developer with a strong foundation in the MERN stack and a drive for 
              creating exceptional web applications. I'm dedicated to writing clean, efficient code and building
              responsive interfaces that deliver seamless user experiences.
            </p>
            <p className="text-lg mb-8">
              My journey in tech began during my studies at VIT, where I developed a strong foundation in 
              computer science fundamentals. Since then, I've expanded my skills through both academic projects
              and professional experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span>Full Stack Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span>Database Management</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span>API Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <Check className="h-5 w-5" />
                </div>
                <span>Responsive Design</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button className="px-6 py-3">
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-3"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
