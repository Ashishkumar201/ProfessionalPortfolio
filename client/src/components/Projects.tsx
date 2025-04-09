import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Todo List Application",
      description: "A full-stack Todo List application with user authentication and data persistence using MongoDB. Users can efficiently manage tasks with CRUD operations.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      sourceCodeLink: "https://github.com/ashishkumar201/todo-app"
    },
    {
      title: "Movie Information App",
      description: "A React app that fetches and displays movie data (details, posters, reviews) from the TMDB API. Features include search functionality and responsive design.",
      imageSrc: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "TMDB API", "CSS3"],
      sourceCodeLink: "https://github.com/ashishkumar201/movie-app"
    },
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with features for product browsing, shopping cart management, order processing, and user authentication. Uses Redux for state management.",
      imageSrc: "https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "PostgreSQL", "Redux"],
      sourceCodeLink: "https://github.com/ashishkumar201/ecommerce-platform"
    },
    {
      title: "Library Management System",
      description: "A library management system SQL database that stores book, member, and transaction data, enabling efficient tracking of resources. Uses tables and relationships to manage borrowing and returns.",
      imageSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MySQL", "XAMPP", "SQL"],
      sourceCodeLink: "https://github.com/ashishkumar201/library-management"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Here are some of the projects I've worked on that demonstrate my skills and problem-solving approach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              technologies={project.technologies}
              projectLink={project.projectLink}
              sourceCodeLink={project.sourceCodeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
