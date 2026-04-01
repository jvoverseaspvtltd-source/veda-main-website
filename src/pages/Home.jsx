import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ShieldCheck,
    Zap,
    Users,
    TrendingUp,
    ChevronRight,
    Landmark,
    Network,
    Briefcase
} from "lucide-react";
import { services, loanProducts, companyInfo } from "../data/content";

const Home = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Veda Loans and Finance",
        "alternateName": "Veda Loans",
        "url": "https://www.vedaloansandfinance.com",
        "logo": "https://www.vedaloansandfinance.com/veda-logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-8712275590",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "telugu", "hindi"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Medara Bazar, Opp. Ravi Parcel, Kalamandir Center",
            "addressLocality": "Chilakaluripet",
            "postalCode": "522616",
            "addressRegion": "Andhra Pradesh",
            "addressCountry": "IN"
        },
        "description": "Professional loan coordination and distribution services. Bridging the gap between customers, DSA partners, and lending institutions for Personal, Business, Home, and SME loans.",
        "sameAs": [
            "https://www.facebook.com/vedaloans",
            "https://www.instagram.com/vedaloans"
        ]
    };

    return (
        <div className="flex flex-col bg-surface overflow-hidden">
            <Helmet>
                <title>Veda Loans and Finance – Your Trusted DSA Loan Partner in India</title>
                <meta name="description" content="Veda Loans and Finance offers professional loan coordination for Personal, Business, and Home loans. Join our growing DSA network in Andhra Pradesh and India." />
                <link rel="canonical" href="https://www.vedaloansandfinance.com/" />
                <meta name="keywords" content="Veda Loans, Loan DSA Partner, Personal Loan Chilakaluripet, Business Loan Andhra Pradesh, Home Loan DSA, SME Finance India" />
                
                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>
            {/* Elite Hero Section */}
            <section className="relative min-h-[90vh] flex items-center pt-20 pb-16 md:pt-26 md:pb-22 bg-gradient-banking">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <motion.div
                            className="w-full lg:w-3/5 text-center lg:text-left space-y-10"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 text-secondary border border-white/20 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                                India's Premier Coordination Node
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] tracking-tighter">
                                Financial <br />
                                <span className="text-secondary italic">Facilitation</span> <br />
                                Redefined.
                            </h1>

                            <p className="text-xl md:text-2xl text-blue-100/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                Bridging the gap between ambitious dreams and institutional capital through India's most transparent coordination layer.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                                <Link
                                    to="/apply"
                                    className="group relative bg-gradient-accent text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all shadow-xl shadow-accent/20 flex items-center gap-3 overflow-hidden"
                                >
                                    <span className="relative z-10">Apply for Loan</span>
                                    <ArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" size={20} />
                                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                                </Link>
                                <Link
                                    to="/services"
                                    className="group flex items-center gap-2 text-white/80 hover:text-secondary font-bold transition-all tracking-wider text-sm border-b-2 border-transparent hover:border-secondary py-2"
                                >
                                    Explore Ecosystem <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-full lg:w-2/5"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-[3rem] opacity-20 blur-2xl animate-pulse"></div>
                                <div className="relative glass p-10 md:p-16 rounded-[3rem] border-white/20 shadow-2xl text-center space-y-12">
                                    <div className="flex justify-center flex-wrap gap-4 opacity-80">
                                        <Landmark size={40} className="text-white" />
                                        <Network size={40} className="text-secondary" />
                                        <Briefcase size={40} className="text-white" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="text-white/60 text-xs font-bold uppercase tracking-[0.5em]">Network Capacity</div>
                                        <div className="text-7xl md:text-9xl font-black text-white italic drop-shadow-lg">8</div>
                                        <div className="text-secondary font-bold text-sm uppercase tracking-widest">Banking Partners</div>
                                    </div>
                                    <div className="pt-8 border-t border-white/10 flex justify-between text-left">
                                        <div>
                                            <div className="text-white font-black text-xl">60+</div>
                                            <div className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Branches</div>
                                        </div>
                                        <div>
                                            <div className="text-white font-black text-xl">5+ Years</div>
                                            <div className="text-white/40 text-[10px] uppercase font-bold tracking-tighter">Legacy</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Coordination Story */}
            <section className="py-10 md:py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="bg-accent/10 text-accent px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest inline-block border border-accent/10">The Veda Advantage</div>
                            <h2 className="text-4xl md:text-6xl font-extrabold text-primary-dark tracking-tight leading-[1.1]">
                                Not Just a Consultant. <br />
                                <span className="text-gradient italic">A Strategic Bridge.</span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Veda Loans and Finance operates as a specialized Direct Selling Agent (DSA) node. We manage the delicate logisitical layer of loan facilitation, ensuring that verified leads reach the most suitable processing units of India's leading banks.
                            </p>
                            <div className="flex flex-col gap-4">
                                {[
                                    "Proprietary lead vetting system",
                                    "Zero customer upfront fee policy",
                                    "Direct integration with 30+ banks",
                                    "Unwavering regulatory compliance"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-gray-700 font-bold group">
                                        <div className="bg-accent/10 text-accent p-1.5 rounded-full group-hover:bg-accent group-hover:text-white transition-colors">
                                            <ShieldCheck size={18} />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: Landmark, label: "Banking Reach", color: "bg-blue-50 text-primary" },
                                { icon: Network, label: "DSA Ecosystem", color: "bg-orange-50 text-accent" },
                                { icon: Zap, label: "Fast Routing", color: "bg-yellow-50 text-secondary" },
                                { icon: Users, label: "Client Support", color: "bg-blue-50 text-primary-light" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all text-center space-y-6 group"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform`}>
                                        <item.icon size={30} />
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-gray-400">{item.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Expressive Service Strip */}
            <section className="py-10 md:py-24 bg-surface border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-black text-primary-dark tracking-tight">Coordination <span className="relative inline-block text-accent">Streams<span className="absolute -bottom-2 left-0 w-full h-1 bg-accent/20"></span></span></h2>
                            <p className="text-gray-500 max-w-xl font-medium">Facilitating various capital requirements through a unified distribution channel.</p>
                        </div>
                        <Link to="/services" className="px-8 py-3 bg-white border border-gray-200 rounded-xl font-bold text-sm hover:text-accent hover:border-accent transition-all shadow-sm">View All Services</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.slice(0, 3).map((service, i) => (
                            <Link
                                key={i}
                                to="/services"
                                className="group relative bg-white p-10 rounded-[3rem] border border-gray-100 hover:border-accent/20 transition-all overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors"></div>
                                <div className="text-4xl font-black text-gray-100 mb-6 group-hover:text-accent/10 transition-colors">0{i + 1}</div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.description.slice(0, 100)}...</p>
                                <div className="flex items-center gap-2 text-accent font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">
                                    Learn More <ChevronRight size={14} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillars of Excellence CTA */}
            <section className="py-10 md:py-24 bg-primary-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-banking opacity-10 blur-3xl scale-150"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-5 rounded-full pointer-events-none blur-3xl animate-pulse"></div>

                <div className="container mx-auto px-6 relative z-10 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                        Empowering the <span className="text-secondary italic underline decoration-accent/30 decoration-8 underline-offset-8">Next Wave</span> of <br />
                        Indian Entrepreneurs.
                    </h2>
                    <p className="text-blue-100/60 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Join our growing ecosystem of partners and let's coordinate a brighter financial future together.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
                        <Link
                            to="/become-dsa"
                            className="bg-gradient-accent hover:shadow-2xl hover:shadow-accent/40 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1"
                        >
                            Become a Partner
                        </Link>
                        <Link
                            to="/why-choose-us"
                            className="text-white/70 hover:text-white font-bold transition-all border-b border-white/20 hover:border-secondary py-2 tracking-wide"
                        >
                            Why Choose Veda?
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;
