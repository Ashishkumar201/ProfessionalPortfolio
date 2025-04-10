import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const responsibilities = [
    "Responsible for frontend development with HTML, CSS and JavaScript",
    "Learned and implemented React and PHP to fulfill workplace requirements",
    "Collaborated with design and backend teams to implement user interfaces and features",
    "Optimized website performance and ensured responsive design across devices"
  ];
  

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills and knowledge.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-secondary">Frontend Developer</h3>
                <h4 className="text-lg font-medium text-primary">Festo Technologies</h4>
              </div>
              <div className="mt-2 md:mt-0">
                <Badge variant="outline" className="bg-primary/10 text-primary rounded-full px-4 py-1">
                  March 2022
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6">Remote, India</p>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>


      {/* section 2 */}
      <div className="container mx-auto px-4">
        {/* <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my skills and knowledge.
          </p>
        </motion.div> */}

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="bg-white rounded-xl shadow-md p-8 mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-secondary">Service Desk Analyst</h3>
                <h4 className="text-lg font-medium text-primary">Equifax/Teleperformance</h4>
              </div>
              <div className="mt-2 md:mt-0">
              <Badge variant="outline" className="bg-primary/10 text-primary rounded-full px-4 py-1">
                  January 2025
                </Badge>-
                <Badge variant="outline" className="bg-primary/10 text-primary rounded-full px-4 py-1">
                  Present
                </Badge>
                
              </div>
            </div>
            <p className="text-muted-foreground mb-6">Gurugram, India</p>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>


    
  );
  
};

export default Experience;
