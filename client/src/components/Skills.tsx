import { motion } from "framer-motion";
import ProgressBar from "./ProgressBar";
import SkillCard from "./SkillCard";
import { 
  Database, Server, Code, FileCode, Cpu, Terminal, 
  ShieldCheck, Layout, Braces
} from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { skill: "JavaScript", percentage: 90 },
    { skill: "React.js", percentage: 85 },
    { skill: "Node.js", percentage: 80 },
    { skill: "MongoDB", percentage: 85 },
    { skill: "SQL", percentage: 75 },
    { skill: "Python", percentage: 70 }
  ];

  const skillCards = [
    { name: "MongoDB", icon: <Database className="h-6 w-6 text-primary" /> },
    { name: "Express.js", icon: <Server className="h-6 w-6 text-primary" /> },
    { name: "React", icon: <Code className="h-6 w-6 text-primary" /> },
    { name: "Node.js", icon: <FileCode className="h-6 w-6 text-primary" /> },
    { name: "SQL", icon: <Database className="h-6 w-6 text-primary" /> },
    { name: "HTML/CSS", icon: <Layout className="h-6 w-6 text-primary" /> },
    { name: "Python", icon: <Terminal className="h-6 w-6 text-primary" /> },
    { name: "C/C++", icon: <Cpu className="h-6 w-6 text-primary" /> },
    { name: "PHP", icon: <Braces className="h-6 w-6 text-primary" /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            My technical toolkit includes a range of technologies and frameworks that enable me to build
            comprehensive web solutions from front-end to back-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            className="bg-white rounded-xl shadow-md p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <ProgressBar 
                key={index} 
                skill={skill.skill} 
                percentage={skill.percentage} 
              />
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skillCards.map((card, index) => (
                <SkillCard 
                  key={index} 
                  name={card.name} 
                  icon={card.icon} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
