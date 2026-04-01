import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Building2,
    Handshake,
    TrendingUp,
    ShieldCheck,
    ArrowRight,
    ChevronRight,
    Landmark,
    Network,
    Users
} from "lucide-react";

const BecomeDSA = () => {
    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            <Helmet>
                <title>Become a DSA Partner | Veda Loans and Finance – Join Our Network</title>
                <meta name="description" content="Join India's most transparent loan coordination network. Scale your consultancy as a Veda DSA partner with 30+ banking institutions." />
                <link rel="canonical" href="https://www.vedaloansandfinance.com/become-dsa" />
                <meta name="keywords" content="Apply for Loan DSA, Bank DSA Registration, Loan Partner Program, Veda Loans Partnership" />
            </Helmet>
            {/* Immersive Header */}
            <section className="bg-gradient-banking pt-20 pb-24 md:pt-32 md:pb-40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-surface/50 opacity-20 backdrop-blur-sm"></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 bg-white/10 text-secondary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-white/10 backdrop-blur-md"
                    >
                        <Network size={14} className="text-secondary" /> Ecosystem Growth
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Scale with <span className="text-secondary italic">Veda</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Join India's most transparent coordination network and transform your consultancy into an institutional-grade distribution node.
                    </p>
                </div>
            </section>

            {/* The Partner Proposition Storyboard */}
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
                                <div className="bg-accent/10 text-accent px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest inline-block border border-accent/10">Strategic Alignment</div>
                                <h2 className="text-4xl md:text-6xl font-extrabold text-primary-dark tracking-tighter leading-none">Why Partner <br /> <span className="text-gradient italic">As a DSA?</span></h2>
                                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                                    In the complex Indian lending landscape, access is everything. As a Veda partner, you gain instant institutional capacity, allowing you to serve more clients with higher approval rates.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {[
                                    { icon: Landmark, title: "30+ Institutions", desc: "Instant access to major Banks & NBFCs." },
                                    { icon: ShieldCheck, title: "Zero Setup Cost", desc: "No registration or documentation fees." },
                                    { icon: TrendingUp, title: "Higher Success", desc: "Expert vetting ensures better approval odds." },
                                    { icon: Users, title: "Expert Support", desc: "Dedicated coordination desk for your leads." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="bg-blue-50 p-3 rounded-2xl text-primary shrink-0 transition-colors group-hover:bg-gradient-accent group-hover:text-white shadow-sm border border-blue-100/50">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="font-bold text-primary-dark text-sm">{item.title}</h4>
                                            <p className="text-gray-400 text-[10px] leading-relaxed uppercase tracking-widest font-black">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2 relative group"
                        >
                            <div className="absolute inset-0 bg-accent/20 rounded-[4rem] opacity-10 blur-3xl scale-90"></div>
                            <div className="glass p-12 md:p-20 rounded-[4rem] border-white/50 space-y-12 relative z-10 shadow-2xl">
                                <div className="text-center space-y-6">
                                    <div className="bg-white/50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto text-accent shadow-sm border border-white/50">
                                        <Building2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black text-primary-dark tracking-tight">Veda Partner Node</h3>
                                </div>
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/40 rounded-2xl border border-white/20 flex items-center justify-between backdrop-blur-sm">
                                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Lead Visibility</span>
                                        <span className="text-accent font-black">UNLIMITED</span>
                                    </div>
                                    <div className="p-6 bg-white/40 rounded-2xl border border-white/20 flex items-center justify-between backdrop-blur-sm">
                                        <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Pricing Transparency</span>
                                        <span className="text-accent font-black">100%</span>
                                    </div>
                                    <div className="p-6 bg-primary-dark text-white rounded-2xl flex items-center justify-between shadow-xl relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"></div>
                                        <span className="text-sm font-bold uppercase tracking-widest text-white/60 relative z-10">Partner Status</span>
                                        <span className="font-black text-secondary relative z-10">ELITE PREFERRED</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Creation Section */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-primary-dark rounded-[5rem] p-8 sm:p-16 lg:p-24 text-white relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-banking opacity-20 pointer-events-none"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-5 rounded-full pointer-events-none blur-3xl"></div>

                        <div className="relative z-10 text-center space-y-12">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">Empowering Your <br /> <span className="text-secondary italic">Financial Business.</span></h2>
                            <p className="text-blue-100/40 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
                                We handle the back-end complexity of bank coordination so you can focus on building relationships and sourcing quality leads.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-8">
                                {[
                                    { title: "Inflow Control", desc: "Manage any number of loan leads through our single node.", icon: TrendingUp },
                                    { title: "Documentation Sync", desc: "Expert guidance on institutional application standards.", icon: Handshake },
                                    { title: "Verified Outflow", desc: "Direct routing to the right credit processing unit.", icon: ArrowRight }
                                ].map((item, i) => (
                                    <div key={i} className={`bg-white/5 p-6 sm:p-8 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all text-center space-y-6 group transform hover:-translate-y-2 flex flex-col items-center ${i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                                        <div className="text-accent flex justify-center group-hover:text-secondary transition-colors shrink-0"><item.icon size={40} /></div>
                                        <div className="space-y-4 w-full overflow-hidden">
                                            <h4 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight break-words px-2">{item.title}</h4>
                                            <p className="text-white/40 text-[10px] md:text-xs leading-relaxed font-medium break-words px-2">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onboarding Visual & CTA */}
            <section className="py-10 md:py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative aspect-square md:aspect-video rounded-[4rem] bg-white border border-blue-50 flex items-center justify-center p-12 overflow-hidden group shadow-sm">
                                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-5 transition-opacity"></div>
                                <div className="text-primary opacity-10 group-hover:opacity-20 transition-all group-hover:scale-110">
                                    <Handshake size={200} className="md:w-[300px] md:h-[300px]" />
                                </div>
                                <div className="absolute bottom-12 left-12 right-12 text-center space-y-2">
                                    <div className="text-primary-dark font-black uppercase tracking-[0.3em] text-[10px]">Strategic Partnership</div>
                                    <div className="text-gray-400 font-medium text-xs">Veda Loans and Finance - Multi Bank DSA Network</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/2 space-y-12"
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark tracking-tighter leading-none">Ready to <span className="text-gradient italic">Onboard?</span></h2>
                                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                    Joining the Veda network is a simple professional alignment. Contact our onboarding experts today and start your journey as a certified DSA node partner.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <Link
                                    to="/contact"
                                    className="w-full bg-gradient-accent text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-accent/30 hover:scale-105 transform hover:-translate-y-1"
                                >
                                    Contact for Onboarding <ArrowRight size={20} />
                                </Link>
                                <div className="flex items-center justify-center gap-6 opacity-20">
                                    <div className="h-px bg-gray-400 flex-grow"></div>
                                    <div className="text-[10px] font-black uppercase tracking-widest">No Hidden Fees</div>
                                    <div className="h-px bg-gray-400 flex-grow"></div>
                                </div>
                                <p className="text-center text-gray-500 font-medium text-sm flex items-center justify-center gap-3">
                                    <ShieldCheck size={18} className="text-accent" /> 100% Ethical & Compliant Partner Support.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default BecomeDSA;
