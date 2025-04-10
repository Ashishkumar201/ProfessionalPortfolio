import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Todo List Application",
      description: "A full-stack Todo List application with user authentication and data persistence using MongoDB. Users can efficiently manage tasks with CRUD operations.",
      imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
      sourceCodeLink: "https://github.com/ashishkumar201/todo",
      projectLink: "https://todo-blush-eta.vercel.app/"
    },
    {
      title: "Movie Information App",
      description: "A React app that fetches and displays movie data (details, posters, reviews) from the TMDB API. Features include search functionality and responsive design.",
      imageSrc: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "TMDB API", "CSS3"],
      sourceCodeLink: "https://github.com/ashishkumar201/movie-search",
      projectLink: "https://movie-search-cyan-phi.vercel.app/"
    },
    {
      title: "VS code frontend",
      description: "A web-based code editor inspired by Visual Studio Code, built using Pure HTML and CSS. It features a user-friendly interface with syntax highlighting and code formatting.",
      imageSrc: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["HTML", "CSS"],
      sourceCodeLink: "https://github.com/ashishkumar201/vscode",
      projectLink: "https://vscode-henna.vercel.app/"
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts using the OpenWeatherMap API. Users can search for any city to get current weather conditions.",
      imageSrc: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "OpenWeatherMap API", "CSS3","React", "javaScript"],
      sourceCodeLink: "https://github.com/ashishkumar201/WeatherWizard",
      projectLink: "https://weatherwizard-2lja.onrender.com"
    },
    {
      title: "Professional Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experience. Built with ReactJS and Tailwind CSS for a modern and responsive design.",
      imageSrc: "https://images.unsplash.com/photo-1556742208-999815fca738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["ReactJS", "Tailwind CSS","React", "JavaScript", "TypeScript"],
      sourceCodeLink: "https://github.com/ashishkumar201/ecommerce-platform",
      projectLink: "https://ashish-kumar.onrender.com/"
    },
    {
      title: "Library Management System",
      description: "A library management system SQL database that stores book, member, and transaction data, enabling efficient tracking of resources. Uses tables and relationships to manage borrowing and returns.",
      imageSrc: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      technologies: ["MySQL", "XAMPP", "SQL"],
      sourceCodeLink: "https://github.com/Ashishkumar201/Library",
      projectLink: "https://github.com/Ashishkumar201/Library"
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
