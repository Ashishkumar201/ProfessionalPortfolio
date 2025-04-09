import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: ReactNode;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-3">
        {icon}
      </div>
      <h4 className="font-medium">{name}</h4>
    </motion.div>
  );
};

export default SkillCard;
