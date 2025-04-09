import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  content: string;
  href?: string;
}

const ContactCard = ({ icon, title, content, href }: ContactCardProps) => {
  return (
    <motion.div 
      className="flex items-start"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mr-4">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-secondary mb-1">{title}</h4>
        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactCard;
