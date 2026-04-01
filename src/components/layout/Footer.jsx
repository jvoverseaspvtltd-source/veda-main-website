import { Link } from "react-router-dom";
import { Landmark, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, ChevronRight } from "lucide-react";
import { companyInfo } from "../../data/content";

const Footer = () => {
    return (
        <footer className="bg-primary-dark pt-24 pb-12 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-gradient-banking opacity-50"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand & Info */}
                    <div className="space-y-10">
                        <Link to="/" className="flex items-center gap-4 group">
                            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-[1.5rem] p-3 shadow-xl group-hover:scale-110 transition-transform">
                                <img
                                    src="/logo-bgremove.png"
                                    alt="Veda Loans Logo"
                                    loading="lazy"
                                    width="64"
                                    height="64"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-2xl font-extrabold tracking-tighter">
                                Veda <span className="text-secondary italic">Loans and Finance</span>
                            </span>
                        </Link>
                        <p className="text-blue-100/60 text-sm leading-relaxed font-medium">
                            {companyInfo.shortIntro}
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-white/5 hover:bg-gradient-accent rounded-xl transition-all border border-white/5 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-10">Directory</h4>
                        <ul className="space-y-6 text-blue-100/70 font-bold text-sm">
                            {["About Us", "Loan Products", "Our Services", "Become a Partner", "Contact Us", "Track Status"].map((link, i) => (
                                <li key={i}>
                                    <Link to={`/${link.toLowerCase().replace(/ us| a /g, '').replace(/ /g, '-')}`} className="hover:text-secondary transition-colors flex items-center gap-2 group">
                                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0 text-accent" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-10">Nodes</h4>
                        <ul className="space-y-8 text-blue-100/70 font-bold text-sm">
                            <li className="flex items-start gap-4 group">
                                <MapPin size={24} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="leading-relaxed">{companyInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Phone size={24} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <span>{companyInfo.phone}</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <Mail size={24} className="text-accent shrink-0 group-hover:scale-110 transition-transform" />
                                <span>{companyInfo.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Compliance Info */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-accent mb-10">Notice Unit</h4>
                        <div className="bg-white/5 p-8 rounded-[2rem] text-xs leading-relaxed text-blue-100/40 space-y-4 border border-white/5 italic backdrop-blur-sm">
                            <p>Veda Loans and Finance operates as a specialized Direct Selling Agent (DSA) node.</p>
                            <p>All approval decisions rest with the processing units of our partner institutions.</p>
                            <div className="pt-2">
                                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full not-italic tracking-widest uppercase text-[8px] font-black border border-accent/20">Zero Upfront Fee Policy</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
                    <p>© {new Date().getFullYear()} Veda Loans and Finance. Secure Coordination Unit.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-accent transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Compliance</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
