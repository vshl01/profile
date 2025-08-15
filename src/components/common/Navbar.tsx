import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type NavItem = { name: string; id: string };

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const navLinks: NavItem[] = useMemo(
    () => [
      { name: "Home", id: "home" },
      { name: "About", id: "about" },
      { name: "Projects", id: "projects" },
      { name: "Contact", id: "contact" }, // add the section when ready
    ],
    []
  );

  // Smooth scroll with offset for fixed navbar
  const scrollToId = (id: string) => {
    const offset = 80; // navbar height
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      return;
    }
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveSection(id);
  };

  // Scroll spy (updates active link while scrolling)
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to viewport center
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // Trigger when section is roughly in middle area
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      }
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Initial detection on mount
    setTimeout(() => {
      const fromTop = window.scrollY;
      if (fromTop < 100) setActiveSection("home");
    }, 0);

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo acts like Home scroll */}
        <button
          onClick={() => scrollToId("home")}
          className="text-2xl font-serif bg-gradient-to-r from-red-500 via-red-700 to-pink-100 bg-clip-text text-transparent tracking-wide"
        >
          VISHAL
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id} className="relative">
                <button
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className={`relative inline-block px-1 transition-colors ${
                    isActive ? "text-red-500" : "hover:text-red-400"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="underlineDesktop"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 rounded"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        scrollToId(link.id);
                        setIsOpen(false);
                      }}
                      className={`relative inline-block px-1 transition-colors ${
                        isActive ? "text-red-500" : "hover:text-red-400"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="underlineMobile"
                          className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500 rounded"
                        />
                      )}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
