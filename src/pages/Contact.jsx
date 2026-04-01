import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { motion } from "framer-motion";
import {
    Send,
    Phone,
    Mail,
    MapPin,
    Landmark,
    ShieldCheck,
    ChevronRight,
    Workflow,
    Clock
} from "lucide-react";
import { companyInfo } from "../data/content";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        category: "Capital Allocation Inquiry",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `*Veda Loans and Finance - New Inquiry*%0A%0A` +
            `*Name:* ${formData.name}%0A` +
            `*Phone:* ${formData.phone}%0A` +
            `*Category:* ${formData.category}%0A` +
            `*Message:* ${formData.message}`;

        // WhatsApp link (using company info phone)
        // Clean phone number (remove +, spaces, etc if needed, but companyInfo.phone seems to have it)
        const cleanPhone = companyInfo.phone.replace(/\D/g, "");
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${message}`;

        window.open(whatsappUrl, "_blank");
    };

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
                        <Workflow size={14} className="text-secondary" /> Coordination Gateway
                    </motion.div>
                    <motion.h1
                        className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Get in <span className="text-secondary italic">Touch</span>
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto leading-relaxed font-medium">
                        Connect with our professional coordination desk to navigate the Indian lending landscape with precision.
                    </p>
                </div>
            </section>

            {/* Interaction Hub */}
            <section className="py-10 md:py-24 bg-surface relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1/4 h-full bg-blue-50 -skew-x-12 transform -translate-x-1/2 opacity-50"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch">

                        {/* Information Node */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-2/5 space-y-12"
                        >
                            <div className="space-y-6">
                                <div className="bg-accent/10 text-accent px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest inline-block border border-accent/10">Official Correspondence</div>
                                <h2 className="text-4xl md:text-6xl font-black text-primary-dark tracking-tighter leading-none">The Veda <br /> <span className="text-gradient italic">Desk</span></h2>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                    Reach out for loan inquiries, partnership onboarding, or coordination support. Our team responds to all verified inquiries within 24 business hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, label: "Phone Node", value: companyInfo.phone, sub: "Available Mon-Sat, 10AM - 6PM" },
                                    { icon: Mail, label: "Digital Inflow", value: companyInfo.email, sub: "Official Email Correspondence" },
                                    { icon: MapPin, label: "Physical Node", value: "Chilakaluripet, AP", sub: "India Coordination Hub" }
                                ].map((item, i) => (
                                    <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-blue-50 hover:border-accent/20 hover:shadow-2xl transition-all duration-500 shadow-sm">
                                        <div className="flex items-center gap-6">
                                            <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center text-primary group-hover:bg-gradient-accent group-hover:text-white transition-all shadow-sm">
                                                <item.icon size={24} />
                                            </div>
                                            <div className="space-y-1">
                                                <div className="text-[10px] font-black uppercase text-gray-300 tracking-widest">{item.label}</div>
                                                <div className="text-lg font-black text-primary-dark tracking-tight">{item.value}</div>
                                                <div className="text-[10px] font-bold text-accent uppercase tracking-widest italic">{item.sub}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 rounded-[3rem] bg-primary-dark text-white space-y-6 relative overflow-hidden group shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-bl-full group-hover:scale-125 transition-transform duration-700"></div>
                                <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center text-secondary backdrop-blur-sm">
                                    <ShieldCheck size={28} />
                                </div>
                                <div className="space-y-2 relative z-10">
                                    <h4 className="text-xl font-bold text-white">100% Privacy Unit</h4>
                                    <p className="text-blue-100/40 text-xs leading-relaxed font-medium">All data shared via this gateway is handled according to our institutional confidentiality protocols.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Gateway Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="w-full lg:w-3/5 bg-white rounded-[4rem] p-10 md:p-16 border border-blue-50 shadow-3xl relative overflow-hidden"
                        >
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 rounded-full"></div>

                            <form className="space-y-10 relative z-10" onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <h3 className="text-4xl font-extrabold text-primary-dark tracking-tighter leading-tight">Initiate <span className="text-gradient italic">Stream</span></h3>
                                    <p className="text-gray-400 font-medium">Please provide accurate verification details for rapid coordination.</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Verification Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-surface border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold placeholder:text-gray-300 text-primary-dark"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Communication Link</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 XXXXX XXXXX"
                                            className="w-full bg-surface border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold placeholder:text-gray-300 text-primary-dark"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Request Category</label>
                                    <div className="relative">
                                        <select
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="w-full bg-surface border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold appearance-none cursor-pointer text-primary-dark/70"
                                        >
                                            <option>Capital Allocation Inquiry</option>
                                            <option>DSA Partner Onboarding</option>
                                            <option>Institutional Coordination</option>
                                            <option>Compliance Portal</option>
                                        </select>
                                        <ChevronRight size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-accent rotate-90" />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-2">Coordination Message</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your capital requirement or partnership intent..."
                                        className="w-full bg-surface border border-gray-100 px-8 py-5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold resize-none placeholder:text-gray-300 text-primary-dark"
                                    ></textarea>
                                </div>

                                <button type="submit" className="w-full bg-gradient-accent text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-sm transition-all shadow-xl shadow-accent/20 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-4 group transform hover:-translate-y-1">
                                    Initiate Gateway <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </button>

                                <div className="flex items-center justify-between pt-8 opacity-40">
                                    <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-primary-dark"><Clock size={12} className="text-accent" /> Response in 24h</div>
                                    <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.2em] text-primary-dark"><Landmark size={12} className="text-accent" /> Institutional Grade</div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Location Overlay */}
            <section className="py-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 skew-x-12 translate-x-1/2"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="relative h-[300px] md:h-[400px] rounded-[5rem] overflow-hidden group border-8 border-surface bg-gray-50 flex items-center justify-center text-center p-8 shadow-inner">
                        <div className="absolute inset-0 bg-white opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative z-10 space-y-8">
                            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-bounce border-4 border-blue-50">
                                <MapPin size={40} className="text-accent" />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-primary-dark tracking-tighter">Coordination Hub</h3>
                                <p className="text-gray-400 font-black uppercase tracking-widest text-[10px] md:text-xs max-w-2xl mx-auto leading-relaxed italic">
                                    {companyInfo.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;
