import { useState, useEffect, useRef } from "react";

interface UseActiveSectionProps {
  sectionIds: string[];
  threshold?: number;
  rootMargin?: string;
}

export const useActiveSection = ({
  sectionIds,
  threshold = 0.5,
  rootMargin = "-50px 0px -50px 0px",
}: UseActiveSectionProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Limpiar observer anterior
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    // Observar todas las secciones
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
};
