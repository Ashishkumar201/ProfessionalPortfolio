import { motion } from 'framer-motion';

interface CertificationCardProps {
  title: string;
  provider: string;
  delay?: number;
}

const CertificationCard = ({ title, provider, delay = 0 }: CertificationCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay }}
      viewport={{ once: true }}
    >
      <h4 className="font-semibold">{title}</h4>
      <p className="text-secondary">{provider}</p>
    </motion.div>
  );
};

export default CertificationCard;
