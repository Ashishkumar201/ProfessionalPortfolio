import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll with offset for the navbar
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
      
      // Close mobile menu if open
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <nav className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a onClick={() => scrollToSection("hero")} className="text-xl font-bold text-primary tracking-tight cursor-pointer">AK.</a>
        <div className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection("about")} className="text-secondary hover:text-primary transition-colors cursor-pointer">About</a>
          <a onClick={() => scrollToSection("skills")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Skills</a>
          <a onClick={() => scrollToSection("projects")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Projects</a>
          <a onClick={() => scrollToSection("experience")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Experience</a>
          <a onClick={() => scrollToSection("education")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Education</a>
          <a onClick={() => scrollToSection("contact")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Contact</a>
        </div>
        <button className="md:hidden text-secondary p-2" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-white shadow-md absolute top-full left-0 right-0 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <a onClick={() => scrollToSection("about")} className="text-secondary hover:text-primary transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection("skills")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection("projects")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection("experience")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Experience</a>
            <a onClick={() => scrollToSection("education")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Education</a>
            <a onClick={() => scrollToSection("contact")} className="text-secondary hover:text-primary transition-colors cursor-pointer">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
