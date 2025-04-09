import { motion } from 'framer-motion';

interface ProgressBarProps {
  skill: string;
  percentage: number;
}

const ProgressBar = ({ skill, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <motion.div 
          className="progress-value"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
