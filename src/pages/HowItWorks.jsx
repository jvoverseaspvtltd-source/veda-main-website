import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    MousePointer2,
    ClipboardCheck,
    Share2,
    FileCheck,
    Cpu,
    Layers,
    Landmark,
    Workflow,
    ArrowRight,
    TrendingUp,
    Fingerprint
} from "lucide-react";

const HowItWorks = () => {
    const steps = [
        {
            icon: MousePointer2,
            step: "01",
            title: "Lead Capture",
            desc: "Customers reach out to our registered DSA consultants for various capital requirements.",
            detail: "Multisource inflow"
        },
        {
            icon: ClipboardCheck,
            step: "02",
            title: "Policy Vetting",
            desc: "Our experts perform initial vetting to align the application with specific bank policies.",
            detail: "Compliance check"
        },
        {
            icon: Share2,
            step: "03",
            title: "Logic Routing",
            desc: "Verified applications are routed to the most suitable processing units of partner institutions.",
            detail: "Expert facilitation"
        },
        {
            icon: FileCheck,
            step: "04",
            title: "Disbursement",
            desc: "Lending institutions perform final processing, approval, and capital disbursement.",
            detail: "Institutional finality"
        }
    ];

    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            {/* Elite Header */}
            <section className="bg-gradient-banking pt-32 pb-28 md:pb-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-md"
                    >
                        <Workflow size={14} className="text-secondary" /> Logistical Pipeline
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        The <span className="text-secondary italic">Flow</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Demystifying the coordination layer between point-of-sale and institutional capital distribution.
                    </p>
                </div>
            </section>

            {/* Visual Step-by-Step Flow */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-50 -skew-x-12 transform translate-x-1/2 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-1 bg-gradient-accent opacity-20"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                            {steps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="relative flex flex-col items-center lg:items-start space-y-8 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-24 h-24 rounded-[2.5rem] bg-white border border-blue-50 flex items-center justify-center text-primary-dark relative z-10 shadow-xl group-hover:scale-110 group-hover:bg-gradient-accent group-hover:text-white transition-all duration-500">
                                        <item.icon size={36} className="transition-transform group-hover:rotate-12" />
                                        <span className="absolute -top-3 -right-3 bg-secondary text-primary-dark w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs border-4 border-white shadow-lg">{item.step}</span>
                                    </div>

                                    <div className="text-center lg:text-left space-y-3">
                                        <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em]">{item.detail}</div>
                                        <h3 className="text-2xl md:text-3xl font-black text-primary-dark tracking-tight leading-none group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium pt-2">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Coordination Architecture Diagram */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gray-50 skew-x-12 -translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-primary-dark rounded-[5rem] p-12 md:p-32 relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-banking opacity-20 -skew-x-12 transform translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <div className="inline-flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-xs">
                                        <Cpu size={20} className="text-secondary" /> The Veda Engine
                                    </div>
                                    <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter">Coordination <br /><span className="text-secondary italic">Intelligence.</span></h2>
                                    <p className="text-blue-100/40 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                        We don't just pass papers. We synchronize complex regulatory policies with applicant profiles in real-time.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { title: "Partner Mapping", icon: Layers, desc: "Selective routing to 30+ lenders based on scoring." },
                                        { title: "Policy Compliance", icon: Fingerprint, desc: "Automatic filtering for banking policy alignment." },
                                        { title: "Inflow Aggregation", icon: Landmark, desc: "Unified node for all DSA field coordinations." }
                                    ].map((feature, i) => (
                                        <div key={i} className="flex gap-6 group/item">
                                            <div className="bg-white/5 p-4 rounded-2xl text-secondary group-hover/item:bg-gradient-accent group-hover/item:text-white transition-all shadow-inner border border-white/5">
                                                <feature.icon size={28} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-xl font-bold text-white group-hover/item:text-secondary transition-colors">{feature.title}</h4>
                                                <p className="text-white/30 text-sm group-hover/item:text-white/50 transition-colors">{feature.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <motion.div
                                className="relative flex justify-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 bg-accent rounded-full opacity-10 blur-3xl"></div>
                                <div className="relative bg-white/5 p-12 md:p-24 rounded-full border border-white/10 shadow-3xl aspect-square flex flex-col items-center justify-center text-center space-y-6 backdrop-blur-md">
                                    <Cpu size={120} className="text-secondary animate-pulse shadow-secondary/20" />
                                    <div className="space-y-2">
                                        <div className="text-white font-black text-2xl tracking-tighter uppercase">Veda Node</div>
                                        <div className="text-secondary font-bold text-[10px] uppercase tracking-[0.5em]">Central Core</div>
                                    </div>
                                    <div className="flex gap-2">
                                        {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>)}
                                    </div>
                                </div>

                                {/* Orbiting Elements */}
                                <div className="hidden md:block absolute top-[10%] left-[10%] bg-white/5 p-4 rounded-2xl border border-white/10 animate-float-slow shadow-lg">
                                    <Landmark size={24} className="text-secondary/60" />
                                </div>
                                <div className="hidden md:block absolute bottom-[20%] right-[0%] bg-white/10 p-4 rounded-2xl border border-white/10 animate-float shadow-lg backdrop-blur-sm">
                                    <TrendingUp size={24} className="text-accent" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ready to Experience CTA */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-white p-12 md:p-20 rounded-[4rem] border border-blue-50 shadow-2xl transition-transform hover:scale-[1.01]">
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark tracking-tighter leading-tight">Ready to <span className="text-gradient italic">Process</span>?</h2>
                            <p className="text-gray-500 font-medium max-w-sm">Start your coordination journey with India's most efficient capital distribution engine.</p>
                        </div>
                        <Link to="/apply" className="bg-gradient-accent text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-accent/20 flex items-center gap-3 transition-all transform hover:-translate-y-1 hover:scale-105 active:scale-95">
                            Apply Now <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowItWorks;
