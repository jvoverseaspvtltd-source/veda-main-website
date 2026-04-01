import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { loanProducts } from "../data/content";

const LoanProducts = () => {
    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            {/* Immersive Header */}
            <section className="bg-gradient-banking pt-32 pb-28 md:pb-40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 backdrop-blur-md border border-white/10"
                    >
                        <Icons.PieChart size={14} className="text-secondary" /> Capital Architecture
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Loan <span className="text-secondary italic">Portfolios</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Sophisticated financial solutions coordinated through India's premier lending institutions for individuals and enterprises.
                    </p>
                </div>
            </section>

            {/* Elite Product Grid */}
            <section className="py-10 md:py-24 bg-surface relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                        {loanProducts.map((product, i) => {
                            const IconComponent = Icons[product.icon] || Icons.HelpCircle;
                            return (
                                <motion.div
                                    key={product.id}
                                    className="group relative bg-white rounded-[3.5rem] p-12 border border-blue-50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 hover:border-accent/20 transition-all duration-500 overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-[4rem] group-hover:bg-accent/10 transition-all duration-700 pointer-events-none"></div>

                                    <div className="bg-primary/5 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-gradient-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/5">
                                        <IconComponent size={40} className="text-primary group-hover:text-white" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-black text-primary-dark tracking-tight leading-none group-hover:text-accent transition-colors">{product.title}</h3>
                                        <p className="text-gray-500 leading-relaxed font-medium text-base">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-accent font-black text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                                            Bank Facilitated <Icons.ChevronRight size={14} />
                                        </div>
                                        <div className="text-[10px] font-bold text-gray-300 group-hover:text-secondary transition-colors italic">Veda Verified</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Facilitation Storytelling */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-50 skew-x-12 -translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 space-y-12">
                            <div className="space-y-6">
                                <div className="bg-accent/10 text-accent px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block border border-accent/10">The Coordination Model</div>
                                <h2 className="text-4xl md:text-6xl font-black text-primary-dark leading-tight tracking-[calc(-0.02em)]">
                                    Seamless <span className="text-gradient italic">Distribution</span> of Institutional Capital.
                                </h2>
                                <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                                    Our role as a DSA node is to eliminate the information asymmetry between borrowers and lenders. We coordinate the entire documentation and vetting process, ensuring that only quality applications reach the banks, speeding up disbursement.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Icons.FileCheck, title: "Expert Vetting", desc: "Every application is reviewed for policy alignment." },
                                    { icon: Icons.Link, title: "Bank Sync", desc: "Direct channels to credit teams of 30+ lenders." },
                                    { icon: Icons.Zap, title: "Zero Friction", desc: "Digital first coordination for minimal turnaround." },
                                    { icon: Icons.ShieldCheck, title: "Safe & Secure", desc: "No upfront fees and absolute data confidentiality." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="bg-blue-50 p-3 rounded-2xl text-primary shrink-0 transition-colors group-hover:bg-gradient-accent group-hover:text-white shadow-sm">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary-dark">{item.title}</h4>
                                            <p className="text-gray-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 relative">
                            <div className="absolute inset-0 bg-accent/20 rounded-[4rem] opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"></div>
                            <div className="bg-gradient-banking rounded-[4rem] p-12 md:p-24 text-white relative z-10 overflow-hidden group shadow-2xl shadow-primary/20">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-bl-full group-hover:scale-125 transition-transform duration-1000"></div>
                                <div className="relative z-10 space-y-8 text-center lg:text-left">
                                    <Icons.ShieldAlert size={64} className="text-secondary drop-shadow-[0_0_15px_rgba(255,204,0,0.5)]" />
                                    <h3 className="text-3xl md:text-4xl text-orange-500 font-extrabold tracking-tight">Institutional Compliance Unit</h3>
                                    <p className="text-blue-100/60 text-lg leading-relaxed font-medium italic">
                                        "We adhere to the Fair Practice Codes issued by National Banks and NBFCs. Our coordination is a purely logical distribution service with zero hidden charges."
                                    </p>
                                    <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
                                        {["RBI Compliant", "Bank Verified", "DSA Certified"].map((label, i) => (
                                            <span key={i} className="px-4 py-1.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/5">{label}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-10 md:py-24 bg-surface border-t border-gray-100 relative">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-primary-dark tracking-tight">Ready to Secure Your <span className="text-accent italic">Capital</span>?</h2>
                        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                            Speak with our coordination experts today and find the most suitable lending partner for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                            <Link to="/apply" className="bg-gradient-accent text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-accent/30 hover:scale-105 transition-all transform hover:-translate-y-1">Coordinate My Loan</Link>
                            <Link to="/become-dsa" className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2 group">
                                Learn about Partnering <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default LoanProducts;
