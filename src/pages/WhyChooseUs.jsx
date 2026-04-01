import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
    CheckCircle,
    Shield,
    Network,
    Zap,
    HeartHandshake,
    Award,
    Fingerprint,
    Scale,
    Verified,
    Globe,
    ArrowRight
} from "lucide-react";

const WhyChooseUs = () => {
    const pillars = [
        { icon: Scale, title: "100% Transparency", desc: "No hidden layers, surprise fees, or coordination markups. Every step is handled with absolute financial clarity." },
        { icon: Shield, title: "Ethical Integrity", desc: "We strictly adhere to the fair practice codes of our partner institutions, ensuring a clean and compliant process." },
        { icon: Globe, title: "Giant Network", desc: "Access India's most expansive lending ecosystem with 30+ major financial institutions on a single coordination node." },
        { icon: Zap, title: "Route Velocity", desc: "Our proprietary lead-forwarding model minimizes systematic delays, ensuring your application moves at peak efficiency." },
        { icon: HeartHandshake, title: "Partner-Centric", desc: "A sustainable growth ecosystem designed to provide dedicated support and infrastructure to our DSA partners." },
        { icon: Award, title: "Proven Mastery", desc: "Years of specialized experience in navigating the Indian capital distribution landscape with elite success rates." }
    ];

    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            {/* Dynamic Header */}
            <section className="bg-gradient-banking pt-32 pb-28 md:pb-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.4em] mb-8 border border-white/10 backdrop-blur-md"
                    >
                        <Verified size={14} className="text-secondary" /> The Veda Advantage
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Pillars of <span className="text-secondary italic">Mastery</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Why India's leading entrepreneurs and DSA partners trust Veda Loans and Finance as their primary capital coordination node.
                    </p>
                </div>
            </section>

            {/* Pillars of Excellence Grid */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-50 -skew-x-12 transform -translate-x-1/2 opacity-30"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                className="group p-12 rounded-[3.5rem] bg-white border border-blue-50 hover:border-accent/20 hover:shadow-3xl transition-all duration-500 relative overflow-hidden shadow-sm"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:bg-gradient-accent opacity-10 transition-all"></div>
                                <div className="bg-primary/5 w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-gradient-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/5">
                                    <pillar.icon size={36} className="text-primary group-hover:text-white" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black text-primary-dark mb-4 leading-none group-hover:text-accent transition-colors">{pillar.title}</h4>
                                <p className="text-gray-500 leading-relaxed font-medium text-sm md:text-base">{pillar.desc}</p>
                                <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-accent uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                                    Excellence Verified <ArrowRight size={14} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Ethical Manifesto */}
            <section className="py-10 md:py-24 bg-primary-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-banking opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <svg width="100%" height="100%"><pattern id="grid-manifesto" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern><rect width="100%" height="100%" fill="url(#grid-manifesto)" /></svg>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center space-y-16">
                    <div className="max-w-4xl mx-auto space-y-10">
                        <div className="text-secondary flex justify-center scale-150 animate-pulse transition-transform duration-1000 shadow-secondary/20"><HeartHandshake size={80} /></div>
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tighter">
                            "Trust isn't just a word for us; it's the <span className="text-secondary italic">Core Architecture</span> of every coordination node we manage."
                        </h2>
                    </div>

                    <div className="flex justify-center gap-12 md:gap-24">
                        {[
                            { label: "Trust Nodes", val: "10K+" },
                            { label: "Bank Partners", val: "30+" },
                            { label: "Legacy Years", val: "5+" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-3xl md:text-6xl font-black text-white mb-2 italic tracking-tighter group-hover:text-secondary transition-colors">{stat.val}</div>
                                <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.3em] opacity-60">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Pledge Detail */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-50 skew-y-3 transform translate-y-24"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-surface rounded-[5rem] p-12 md:p-32 border border-blue-50 relative group overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-50 -skew-x-12 transform translate-x-32 group-hover:translate-x-24 transition-transform duration-700"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                            <div className="space-y-10">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-widest text-xs px-5 py-2.5 bg-white rounded-2xl border border-blue-100 shadow-sm transition-colors group-hover:bg-blue-50">
                                        <Fingerprint size={20} className="text-accent" /> Identity Verification
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-extrabold text-primary-dark leading-none tracking-tighter">Our Ethical <br /> <span className="text-gradient italic">Manifesto</span></h2>
                                    <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                                        Beyond the numbers, we operate on a strict fair-practice code. Total data privacy and zero hidden fee structures are non-negotiable pillars of Veda Loans and Finance.
                                    </p>
                                </div>

                                <ul className="space-y-6">
                                    {[
                                        "Zero Upfront Documentation Fees",
                                        "Military-Grade Data Privacy Protocols",
                                        "Non-Aggressive Distribution Policy",
                                        "Real-Time Case Transparency Mode"
                                    ].map((pledge, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-700 font-bold tracking-tight group/li">
                                            <div className="bg-gradient-accent text-white p-1 rounded-full group-hover/li:rotate-12 transition-transform shadow-lg shadow-accent/20">
                                                <CheckCircle size={20} />
                                            </div>
                                            <span className="text-base md:text-lg">{pledge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <motion.div
                                className="bg-primary-dark rounded-[4rem] p-12 md:p-20 text-center space-y-10 shadow-3xl relative overflow-hidden"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-gradient-banking opacity-20"></div>
                                <Shield size={100} className="mx-auto text-secondary mb-6 opacity-80 animate-pulse relative z-10 shadow-secondary/20" />
                                <div className="space-y-4 relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase leading-none">Certified Distribution Standard</h3>
                                    <p className="text-white/40 text-sm font-medium">Fully aligned with the RBI's Fair Practice Codes for Banks and NBFCs.</p>
                                </div>
                                <div className="flex justify-center gap-2 relative z-10">
                                    {[1, 2, 3].map(i => <div key={i} className="w-10 h-1 bg-secondary opacity-30 rounded-full"></div>)}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WhyChooseUs;
