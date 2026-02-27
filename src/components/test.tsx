// components/Navbar.tsx
import { useActiveSection } from "../hooks/useActiveSection";

const Navbar = () => {
  const sections = ["hero", "sobre-mi", "proyectos", "contacto"];
  const activeSection = useActiveSection({ sectionIds: sections });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 transition-colors duration-300 ${
                  activeSection === section
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-400"
                }`}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1).replace("-", " ")}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
