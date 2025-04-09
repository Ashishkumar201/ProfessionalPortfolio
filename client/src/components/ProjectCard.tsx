import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  projectLink?: string;
  sourceCodeLink?: string;
}

const ProjectCard = ({
  title,
  description,
  imageSrc,
  technologies,
  projectLink,
  sourceCodeLink
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <h3 className="text-white text-xl font-bold p-4">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex justify-between">
          {projectLink && (
            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
              View Project
            </a>
          )}
          {sourceCodeLink && (
            <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium">
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
