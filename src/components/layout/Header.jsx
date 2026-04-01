import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Zap, Handshake, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: "Home", path: "/", icon: Home },
        { name: "About Us", path: "/about", icon: Info },
        { name: "Products", path: "/products", icon: Briefcase },
        { name: "Services", path: "/services", icon: Zap },
        { name: "Partner", path: "/become-dsa", icon: Handshake },
        { name: "Contact", path: "/contact", icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-white/80 backdrop-blur-lg shadow-lg py-3"
                    : (location.pathname === "/" ? "bg-transparent py-5 text-white" : "bg-gradient-banking py-5 shadow-sm text-white")
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
                        <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                            <img
                                src="/logo-bgremove.png"
                                alt="Veda Loans Logo"
                                width="48"
                                height="48"
                                fetchPriority="high"
                                className="w-full h-full object-contain p-1.5 transition-transform group-hover:scale-110"
                            />
                        </div>
                        <span className={`text-xs sm:text-sm md:text-lg font-extrabold tracking-tight transition-colors duration-300 ${scrolled ? "text-primary-dark" : "text-white"}`}>
                            Veda <span className={scrolled ? "text-accent" : "text-secondary"}>Loans and Finance</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-bold tracking-wide transition-all duration-300 hover:text-accent group relative py-1 ${location.pathname === link.path
                                    ? (scrolled ? "text-primary" : "text-secondary")
                                    : (scrolled ? "text-gray-600" : "text-white/90")
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? "w-full" : "w-0"}`}></span>
                            </Link>
                        ))}
                        <div className="flex items-center gap-3">
                            <a
                                href="https://crm.vedaloans.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-5 py-2.5 rounded-xl text-sm font-bold border transition-all transform hover:scale-105 active:scale-95 ${
                                    scrolled 
                                    ? "border-primary/20 text-primary-dark hover:bg-primary/5" 
                                    : "border-white/30 text-white hover:bg-white/10"
                                }`}
                            >
                                Login
                            </a>
                            <Link
                                to="/apply"
                                className="bg-gradient-accent hover:shadow-lg hover:shadow-accent/30 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all transform hover:scale-105 active:scale-95"
                            >
                                Get Started
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-xl transition-all active:scale-95 ${scrolled ? "text-primary-dark hover:bg-gray-100" : "text-white hover:bg-white/10"}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={isOpen ? "close" : "open"}
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </motion.div>
                        </AnimatePresence>
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lg:hidden fixed inset-0 z-[100] bg-primary-dark/95 backdrop-blur-2xl flex flex-col"
                    >
                        {/* Header inside menu */}
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-xl">
                                    <img src="/logo-bgremove.png" alt="Veda Loans Logo" className="w-full h-full object-contain" />
                                </div>
                                <span className="text-white font-black text-lg tracking-tight">Veda <span className="text-secondary">Loans and Finance</span></span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white active:scale-90 transition-transform"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Links Container */}
                        <div className="flex-grow overflow-y-auto px-4 sm:px-6 py-6 sm:py-10">
                            <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`flex items-center justify-between p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] transition-all group ${location.pathname === link.path
                                                ? "bg-gradient-accent text-white shadow-xl shadow-accent/20"
                                                : "bg-white/5 text-white/70 hover:bg-white/10"
                                                }`}
                                        >
                                            <div className="flex items-center gap-4 sm:gap-5">
                                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center transition-colors ${location.pathname === link.path ? "bg-white/20" : "bg-white/5"
                                                    }`}>
                                                    <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${location.pathname === link.path ? "text-white" : "text-secondary"}`} />
                                                </div>
                                                <span className="text-lg sm:text-xl font-bold tracking-tight">{link.name}</span>
                                            </div>
                                            <ChevronRight size={18} className={`opacity-40 group-hover:translate-x-1 transition-transform ${location.pathname === link.path ? "text-white" : ""}`} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Footer in menu */}
                        <div className="p-6 sm:p-8 border-t border-white/5 flex flex-col gap-4">
                            <a
                                href="https://crm.vedaloans.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full bg-transparent border border-white/30 text-white text-center py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black uppercase tracking-[0.2em] text-xs sm:text-sm active:scale-[0.98] transition-all hover:bg-white/5"
                            >
                                CRM Login
                            </a>
                            <Link
                                to="/apply"
                                onClick={() => setIsOpen(false)}
                                className="block w-full bg-white text-primary-dark text-center py-4 sm:py-6 rounded-2xl sm:rounded-3xl font-black uppercase tracking-[0.2em] text-xs sm:text-sm shadow-2xl active:scale-[0.98] transition-all"
                            >
                                Get Started Now
                            </Link>
                            <p className="mt-4 text-center text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
                                Veda Loans and Finance • Precision Facilitation
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};



export default Header;
