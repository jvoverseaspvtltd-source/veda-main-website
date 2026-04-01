import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
    const location = useLocation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className={`flex-grow ${location.pathname === "/" ? "" : "pt-20"}`}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        {children}
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
