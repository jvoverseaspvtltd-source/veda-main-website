import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Landmark,
    Target,
    Eye,
    ShieldCheck,
    Zap,
    Heart,
    Users,
    TrendingUp,
    ArrowRight,
    History,
    Workflow,
    Sparkles
} from "lucide-react";
import { companyInfo } from "../data/content";

const AboutUs = () => {
    const coreValues = [
        { icon: ShieldCheck, title: "Unwavering Integrity", desc: "Our coordination logic prioritizes applicant's trust above all else." },
        { icon: Heart, title: "Partner First", desc: "We grow together with our DSA partners through absolute transparency." },
        { icon: Zap, title: "Speed & Precision", desc: "Removing routing delays using expert coordination intelligence." },
        { icon: Users, title: "Human Centric", desc: "Beyond data points, we understand the dreams behind every application." }
    ];

    const timeline = [
        { year: "2020", title: "The Foundation Node", desc: "Veda Loans and Finance began as a specialized consultancy with a vision to simplify Indian lending." },
        { year: "2022", title: "Network Expansion", desc: "Facilitated 500+ successful loan cases through our growing network of banking partners and DSA agents, strengthening our institutional presence." },
        { year: "2024", title: "Intelligence Hub", desc: "Launched our centralized routing model to empower regional DSA partners." },
        { year: "Today", title: "Market Leader", desc: "Currently managing 8 banking partnerships with elite-grade excellence across 60+ branches." }
    ];

    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            {/* Elite Header */}
            <section className="bg-gradient-banking pt-32 pb-28 md:pb-40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-md"
                    >
                        <History size={14} className="text-secondary" /> The Veda Legacy
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our <span className="text-secondary italic">Story</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Crafting professional bridges between financial strategy and institutional capital for over 5 years.
                    </p>
                </div>
            </section>

            {/* The Identity Node */}
            <section className="py-10 md:py-24 bg-surface relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-1/2 space-y-12"
                        >
                            <div className="space-y-6">
                                <div className="bg-accent/10 text-accent px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest inline-block border border-accent/10">Institutional Core</div>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-primary-dark tracking-tighter leading-none">Your Strategic <br /> <span className="text-gradient italic">Coordination Unit</span></h2>
                                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                                    Veda Loans and Finance isn't just a facilitator; we are the vital intelligence layer that makes the Indian lending landscape accessible. We handle the complexity so you can focus on growth.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-xs">
                                    <div className="h-0.5 w-12 bg-primary"></div> The Veda Identity
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-accent pl-8 py-2 font-medium bg-blue-50/50 rounded-r-xl">
                                    "{companyInfo.fullIntro}"
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="bg-white p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-2xl transition-all group">
                                    <div className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">5+</div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Years of <br />Market Stability</div>
                                </div>
                                <div className="bg-primary-dark p-10 rounded-[2.5rem] text-white shadow-xl group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                                    <div className="text-5xl font-black text-secondary mb-2 group-hover:scale-110 transition-transform origin-left">8</div>
                                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Institutional <br />Banking Nodes</div>
                                </div>
                                <div className="bg-white p-10 rounded-[2.5rem] border border-blue-50 shadow-sm hover:shadow-2xl transition-all group col-span-2">
                                    <div className="text-5xl font-black text-primary mb-2 group-hover:scale-110 transition-transform origin-left">60+</div>
                                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Network <br />Branch Locations</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2 relative"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-[4rem] opacity-10 blur-3xl scale-90"></div>
                            <div className="relative glass p-12 md:p-24 rounded-[4rem] border-white/50 text-center space-y-12 relative z-10 shadow-2xl">
                                <img
                                    src="/logo-bgremove.png"
                                    alt="Veda Loans and Finance Logo"
                                    className="w-48 md:w-72 mx-auto object-contain drop-shadow-3xl hover:rotate-3 transition-transform duration-700 bg-white p-6 rounded-[3rem]"
                                />
                                <div className="space-y-3">
                                    <h3 className="text-primary-dark font-black text-4xl tracking-tighter uppercase">Veda Node 001</h3>
                                    <div className="flex items-center justify-center gap-2 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
                                        <Sparkles size={12} className="text-secondary" /> Certified Distribution Partner
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Elite Timeline Grid */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-50 -skew-x-12 translate-x-1/2 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                        <div className="space-y-4">
                            <div className="bg-accent/10 text-accent px-3 py-1 rounded-md text-[8px] font-bold uppercase tracking-widest inline-block border border-accent/10">Chronological Matrix</div>
                            <h2 className="text-4xl md:text-6xl font-black text-primary-dark tracking-tighter leading-none">The <span className="text-gradient italic">Evolution</span></h2>
                        </div>
                        <p className="text-gray-400 font-medium max-w-sm">Mapping the professional trajectory of Veda Loans and Finance from startup node to market leadership.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white p-10 rounded-[3rem] border border-blue-50 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                                <div className="text-5xl font-black text-primary/10 group-hover:text-accent transition-colors mb-6">{item.year}</div>
                                <h4 className="text-xl font-bold text-primary-dark mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars of Excellence (Modified Core Values) */}
            <section className="py-10 md:py-24 bg-primary-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-banking opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-5 rounded-full pointer-events-none blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-none uppercase">Ethical <br /> <span className="text-secondary italic">Pillars</span></h2>
                                <p className="text-blue-100/40 text-lg md:text-xl font-medium leading-relaxed">
                                    Our operational success is built on a rigid architectural framework of transparency and institutional compliance.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {coreValues.map((value, i) => (
                                    <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                        <div className="text-accent mb-6 transition-transform group-hover:scale-125 origin-left">
                                            <value.icon size={32} className="group-hover:text-secondary transition-colors" />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                                        <p className="text-white/40 text-[10px] leading-relaxed font-black uppercase tracking-widest">{value.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-12 md:p-20 rounded-[4rem] space-y-8 shadow-2xl relative overflow-hidden group border border-blue-50">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full"></div>
                                <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent">
                                    <Target size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-primary-dark tracking-tighter text-center sm:text-left">Strategic Mission</h3>
                                    <p className="text-gray-600 text-lg leading-relaxed font-medium italic border-l-4 border-accent pl-8">
                                        "{companyInfo.mission}"
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-accent p-12 md:p-20 rounded-[4rem] space-y-8 relative overflow-hidden group shadow-xl shadow-accent/20">
                                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white opacity-10 rounded-full"></div>
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary backdrop-blur-sm">
                                    <Eye size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-white tracking-tighter text-center sm:text-left">Vision Node</h3>
                                    <p className="text-white/90 text-lg leading-relaxed font-medium italic border-l-4 border-white/30 pl-8">
                                        "{companyInfo.vision}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic CTA Footer Section */}
            <section className="py-16 md:py-32 bg-surface relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-50 skew-y-6 transform translate-y-1/2 opacity-30"></div>
                <div className="container mx-auto px-6 text-center space-y-12 relative z-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-7xl font-black text-primary-dark tracking-tighter leading-none">Ready to <span className="text-gradient italic">Connect?</span></h2>
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            Join the elite Veda coordination network today and experience institutional-grade loan facilitation.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            to="/become-dsa"
                            className="w-full sm:w-auto bg-gradient-accent text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-accent/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 transform hover:-translate-y-1"
                        >
                            Become Partner <ArrowRight size={20} />
                        </Link>
                        <Link
                            to="/contact"
                            className="w-full sm:w-auto bg-white border border-gray-200 text-primary-dark px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:text-accent transition-all flex items-center justify-center gap-3 shadow-sm"
                        >
                            The Desk <Workflow size={20} />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-4 pt-12 opacity-10">
                        <Landmark size={24} />
                        <div className="h-px w-24 bg-primary-dark"></div>
                        <ShieldCheck size={24} />
                        <div className="h-px w-24 bg-primary-dark"></div>
                        <Workflow size={24} />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
