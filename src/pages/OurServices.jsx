import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Landmark,
    CheckCircle2,
    Headphones,
    Layers,
    Network,
    Zap,
    ShieldCheck,
    Cpu,
    ArrowRight,
    Workflow
} from "lucide-react";
import { services } from "../data/content";

const OurServices = () => {
    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            {/* Immersive Header */}
            <section className="bg-gradient-banking pt-32 pb-28 md:pb-40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-sm"
                    >
                        <Workflow size={14} className="text-secondary" /> The Coordination Stream
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our <span className="text-secondary italic">Capabilities</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Sophisticated logistical layers designed to navigate the complexities of India's capital distribution pipeline.
                    </p>
                </div>
            </section>

            {/* Narrative Service List */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-50 -skew-x-12 transform translate-x-1/2 opacity-30"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 gap-24 lg:gap-40">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Visual side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative group">
                                        <div className="absolute -inset-4 bg-gradient-banking opacity-10 rounded-[4rem] group-hover:opacity-20 transition-opacity"></div>
                                        <div className="bg-white rounded-[4rem] aspect-[4/3] w-full flex items-center justify-center p-8 md:p-16 shadow-xl border border-blue-50 overflow-hidden relative">
                                            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                                                <svg width="100%" height="100%"><pattern id={`p-grid-${i}`} width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor" className="text-primary-dark" /></pattern><rect width="100%" height="100%" fill={`url(#p-grid-${i})`} /></svg>
                                            </div>
                                            <div className="bg-gray-50 p-12 md:p-20 rounded-[3rem] shadow-inner text-primary transition-transform duration-700 group-hover:scale-110 relative z-10 border border-blue-50">
                                                {[<Network size={80} className="md:w-32 md:h-32 text-primary/80" />, <Workflow size={80} className="md:w-32 md:h-32 text-primary/80" />, <Headphones size={80} className="md:w-32 md:h-32 text-primary/80" />, <Landmark size={80} className="md:w-32 md:h-32 text-primary/80" />][i]}
                                            </div>
                                            <div className="absolute top-8 left-8 bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">
                                                Professional Faciliation
                                            </div>
                                        </div>
                                        <div className="absolute -bottom-8 -right-8 bg-gradient-accent text-white px-8 py-6 rounded-3xl shadow-2xl flex items-center gap-4 z-10 border-4 border-white transform hover:-translate-y-2 transition-transform">
                                            <div className="bg-white/20 p-2 rounded-xl"><ShieldCheck size={28} /></div>
                                            <div className="flex flex-col">
                                                <span className="font-black text-lg leading-tight tracking-tight">Verified</span>
                                                <span className="text-[10px] uppercase font-bold text-white/70 tracking-widest">Routing Logic</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content side */}
                                <div className="w-full lg:w-1/2 space-y-10">
                                    <div className="space-y-4 relative pt-28">
                                        <div className="absolute top-0 left-0 text-6xl md:text-9xl font-black text-primary/10 select-none italic pointer-events-none leading-none">0{i + 1}</div>
                                        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary-dark leading-tight relative z-10">{service.title}</h2>
                                        <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            { title: "Institutional Vetting", icon: ShieldCheck },
                                            { title: "Direct Bank Routing", icon: Landmark },
                                            { title: "Status Coordination", icon: Workflow },
                                            { title: "Ethics Compliance", icon: CheckCircle2 }
                                        ].map((item, j) => (
                                            <div key={j} className="flex items-center gap-3 p-5 bg-white rounded-2xl border border-blue-50 shadow-sm group/item hover:border-accent/30 transition-all hover:shadow-lg">
                                                <item.icon size={20} className="text-accent shrink-0 transition-transform group-hover/item:scale-125 group-hover/item:text-secondary" />
                                                <span className="text-sm font-bold text-gray-700">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/contact" className="inline-flex items-center gap-3 text-accent font-black uppercase tracking-widest text-xs border-b-2 border-accent pb-1 group/link hover:text-primary-dark hover:border-primary-dark transition-colors">
                                        Inquire About {service.title} <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Elite Ecosystem Mapping */}
            <section className="py-16 md:py-32 bg-primary-dark text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-banking opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-[0.3em] text-[10px]">
                                    <span className="w-8 h-px bg-secondary"></span> Logistical Architecture
                                </div>
                                <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tighter">Unified <br /> <span className="text-secondary italic">Inflow & Outflow</span></h2>
                                <p className="text-blue-100/40 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                                    A multi-layered distribution system where every lead undergoes professional vetting before being routed to a select pool of 30+ banking partners.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 md:gap-8">
                                {[
                                    { label: "Lead Sourcing", icon: Network, desc: "Multichannel" },
                                    { label: "Coordination", icon: Workflow, desc: "Expert Vetting" },
                                    { label: "Bank Routing", icon: Landmark, desc: "Final Processing" }
                                ].map((node, i) => (
                                    <motion.div
                                        key={i}
                                        className="bg-white/5 p-6 rounded-[2rem] border border-white/10 space-y-4 group hover:bg-white/10 transition-colors shadow-inner"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="bg-white/10 w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-secondary transition-transform group-hover:scale-110 shadow-lg group-hover:bg-gradient-accent group-hover:text-white">
                                            <node.icon size={24} className="md:w-8 md:h-8" />
                                        </div>
                                        <div className="space-y-1">
                                            <span className="font-black text-[10px] uppercase tracking-widest text-white block leading-tight">{node.label}</span>
                                            <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{node.desc}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-accent rounded-[5rem] opacity-10 blur-3xl"></div>
                            <div className="bg-white/5 p-12 md:p-24 rounded-[5rem] border border-white/10 shadow-3xl text-center space-y-12 relative z-10 backdrop-blur-md">
                                <div className="text-secondary flex justify-center scale-110 md:scale-150 animate-pulse transition-transform duration-1000 shadow-secondary/20">
                                    <Cpu size={100} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">The Coordination Engine</h3>
                                    <p className="text-white/40 leading-relaxed font-medium">Removing systematic friction from the loan distribution pipeline through expert node management.</p>
                                </div>
                                <div className="flex justify-center gap-2">
                                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-accent opacity-50 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default OurServices;
