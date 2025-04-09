import { motion } from "framer-motion";
import CertificationCard from "./CertificationCard";

const Education = () => {
  const certifications = [
    { title: "ReactJS", provider: "Udemy" },
    { title: "Python for Data Science", provider: "XIE" },
    { title: "4 Stars in C++ & SQL", provider: "HackerRank" },
    { title: "Java", provider: "Udemy" },
    { title: "Command Line in Linux", provider: "Coursera" },
    { title: "Business Intelligence Analyst", provider: "DataCamp" },
    { title: "NodeJS with Express & MongoDB", provider: "Udemy" }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            My academic background and continuous learning through professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Education</h3>
            
            <div className="space-y-8">
              <motion.div 
                className="relative pl-8 border-l-2 border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
                <div className="mb-1">
                  <span className="text-primary font-medium">August 2024</span>
                </div>
                <h4 className="text-lg font-semibold">Bachelor of Technology - Information Technology</h4>
                <p className="text-secondary mb-1">Vellore Institute of Technology, Vellore, India</p>
                <p>CGPA: 7.37</p>
              </motion.div>
              
              <motion.div 
                className="relative pl-8 border-l-2 border-primary/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
                <div className="mb-1">
                  <span className="text-primary font-medium">2020</span>
                </div>
                <h4 className="text-lg font-semibold">Secondary Education - Science</h4>
                <p className="text-secondary mb-1">Gurukul Kurukshetra, Kurukshetra, India</p>
                <p>Percentage: 95%</p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">Certifications</h3>
            
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={index} 
                  title={cert.title} 
                  provider={cert.provider} 
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
