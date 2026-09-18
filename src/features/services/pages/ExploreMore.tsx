import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Home,
    Building2,
    Palmtree,
    Droplet,
    CheckCircle2,
    Timer,
    DollarSign,
    Move,
    Leaf,
    ShieldCheck,
    BarChart3,
    Hammer,
    Plus,
    Minus
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../../../components/layout/Section';
import { Button } from '../../../components/ui/Button';
import containerHomes from '../../../assets/containerHomes.webp';
import containerOffice from '../../../assets/officeContainers.webp';
import containerResort from '../../../assets/container-resort.webp';
import containerSanitation from '../../../assets/container-sanitation.webp';
 
const Scaffolding = ({ x = "0%", y = "0%", scale = 1 }) => (
    <div className="absolute pointer-events-none opacity-10 hidden lg:block" style={{ left: x, top: y, transform: `scale(${scale})` }}>
        <div className="grid grid-cols-3 grid-rows-4 gap-2 w-32 h-48 border border-industrial-gray/30">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="border border-industrial-gray/20 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-[1px] bg-industrial-gray/10 rotate-45" />
                        <div className="w-full h-[1px] bg-industrial-gray/10 -rotate-45" />
                    </div>
                </div>
            ))}
        </div>
    </div>
);
 
const Crane = ({ delay = 0, x = "10%", y = "20%", reverse = false }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay }}
        className="absolute pointer-events-none block"
        style={{ left: x, top: y, transform: reverse ? "scaleX(-1)" : "none" }}
    >
        {/* Mobile-scaled wrapper */}
        <div className="relative scale-50 origin-top-left md:scale-100">
            {/* Crane Tower */}
            <div className="w-4 h-80 bg-industrial-gray/20 border-x border-industrial-gray/30 relative">
                <div className="absolute inset-0 grid-pattern opacity-20" />
                {/* Horizontal Braces */}
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="absolute w-full h-[1px] bg-industrial-gray/30" style={{ top: `${i * 12.5}%` }} />
                ))}
            </div>
 
            {/* Crane Jib (Arm) */}
            <motion.div
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-2 w-80 h-4 bg-industrial-gray/30 origin-left flex items-center"
            >
                <div className="absolute -left-4 w-10 h-10 bg-industrial-gray/40 rounded-full border-2 border-industrial-gray/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-industrial-orange rounded-full animate-pulse" />
                </div>
 
                {/* Trolley and Hook */}
                <motion.div
                    animate={{ x: [60, 240, 60] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-full left-0"
                >
                    {/* Cable */}
                    <motion.div
                        animate={{ height: [60, 140, 60] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="w-[1.5px] bg-industrial-gray/60 mx-auto"
                    />
 
                    {/* Lifting Container */}
                    <motion.div
                        animate={{
                            rotate: [-2, 2, -2],
                            y: [0, 8, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-28 h-14 bg-industrial-orange/10 border-2 border-industrial-orange/30 backdrop-blur-sm flex items-center justify-center relative group"
                    >
                        <div className="absolute inset-0 grid-pattern opacity-20" />
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-industrial-orange/50" />
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-industrial-orange/50" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-industrial-orange/50" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-industrial-orange/50" />
                        <span className="text-[7px] font-mono text-industrial-orange/70 font-bold uppercase tracking-widest" style={{ transform: reverse ? "scaleX(-1)" : "none" }}>
                            UNIT_ASSEMBLY
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
);
 
const StackingContainer = ({ delay = 0, x = "0%", y = "0%", color = "industrial-gray", label = "01" }) => (
    <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay, ease: "easeOut" }}
        className={`absolute w-36 h-18 border-2 border-${color}/20 bg-${color}/5 backdrop-blur-[1px] hidden lg:block group`}
        style={{ left: x, top: y }}
    >
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-2 left-2 text-[8px] font-mono font-bold text-industrial-gray/30">{label}</div>
        <div className="absolute bottom-2 right-2 flex gap-1">
            <div className="w-1 h-1 bg-industrial-gray/20 rounded-full" />
            <div className="w-1 h-1 bg-industrial-gray/20 rounded-full" />
        </div>
    </motion.div>
);
 
const ConstructionGrid = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
            animate={{ y: ["0%", "100%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.04] grid-pattern"
        />
 
        <motion.div
            animate={{ top: ["-5%", "105%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-industrial-orange/30 to-transparent shadow-[0_0_20px_rgba(242,125,38,0.2)]"
        />
 
        {[...Array(15)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                animate={{
                    opacity: [0, 0.3, 0],
                    y: ["-10%", "110%"],
                    x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
                }}
                transition={{
                    duration: 20 + Math.random() * 20,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear"
                }}
                className="absolute w-1 h-1 bg-industrial-gray/20 rounded-full"
            />
        ))}
    </div>
);
 
const FAQS = [
    {
        question: "How long does a typical container construction project take?",
        answer: "Construction timelines are significantly faster than traditional methods. A standard residential or commercial project can be completed in 6-8 weeks, depending on the complexity and customization required."
    },
    {
        question: "Are container homes safe and durable?",
        answer: "Yes, shipping containers are designed to withstand harsh maritime environments. When properly engineered and anchored, they are extremely durable, fire-resistant, and can withstand extreme weather conditions, including high winds and seismic activity."
    },
    {
        question: "Do I need special permits for container buildings?",
        answer: "Container buildings are subject to the same local building codes and zoning regulations as traditional structures. We assist our clients through the entire permitting process to ensure full compliance with local authorities."
    },
    {
        question: "How is insulation handled in shipping containers?",
        answer: "We use high-performance insulation solutions (such as spray foam or mineral wool) to ensure excellent thermal efficiency. This makes container homes comfortable year-round, even in extreme hot or cold climates."
    },
    {
        question: "Can container structures be multi-story?",
        answer: "Absolutely. Shipping containers are designed to be stacked. We can create beautiful multi-story homes, offices, and resort complexes by structurally reinforcing the units and using innovative architectural designs."
    }
];
 
export const ExploreMore = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = React.useState<number | null>(null);
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
 
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
 
    return (
        <div className="bg-industrial-sand/20">
            {/* Live Construction Hero */}
            <section className="relative h-screen overflow-hidden flex items-center justify-center">
                {/* Background Animation Layers - Now spanning full height */}
                <div className="absolute inset-0 z-0 bg-white" />
                <ConstructionGrid />
 
                {/* Construction Scene */}
                <Scaffolding x="12%" y="45%" scale={0.8} />
                <Scaffolding x="82%" y="15%" scale={1.1} />
 
                <Crane delay={0.5} x="8%" y="25%" />
 
                {/* Stacking Units */}
                <StackingContainer delay={2.2} x="72%" y="75%" color="industrial-gray" label="MOD_A1" />
                <StackingContainer delay={2.8} x="72%" y="66%" color="industrial-orange" label="MOD_B2" />
                <StackingContainer delay={3.4} x="72%" y="57%" color="industrial-gray" label="MOD_C3" />
 
                <StackingContainer delay={2.5} x="18%" y="80%" color="industrial-gray" label="BASE_01" />
                <StackingContainer delay={3.1} x="18%" y="71%" color="industrial-gray" label="BASE_02" />
 
                {/* Hero Content - Directly on Background */}
                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center pt-16 md:pt-20 lg:pt-24 xl:pt-32 pb-6 md:pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 leading-none tracking-tight">
                            <span className="block bg-gradient-to-r from-[#ef7e39] to-[#bf0908] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                FUTURE
                            </span>
                            <span className="block bg-gradient-to-r from-[#ef7e39] to-[#bf0908] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                MODULAR
                            </span>
                        </h1>
                    </motion.div>
 
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="text-[#1C2E57]/80 max-w-2xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed mb-4 md:mb-8 font-semibold"
                    >
                        Providing innovative container structures that combine strength, mobility, and modern functionality.
                    </motion.p>
 
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center"
                    >
                        <Button
                            variant="gold"
                            className="px-10 md:px-16 py-4 md:py-6 text-sm uppercase tracking-[0.2em] font-black bg-gradient-to-r from-[#ef7e39] to-[#bf0908] hover:opacity-90 shadow-2xl shadow-orange-500/40 transition-all duration-500 rounded-2xl border-none text-white w-full sm:w-auto"
                            onClick={() => document.getElementById('residential-detail')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Explore Services
                        </Button>
                        <button
                            onClick={() => navigate('/contact/')}
                            className="px-10 md:px-16 py-4 md:py-6 border-2 border-[#1C2E57]/10 rounded-2xl font-black text-[#1C2E57] uppercase tracking-[0.2em] text-sm hover:border-industrial-orange/50 hover:bg-white transition-all duration-300 shadow-xl shadow-[#1C2E57]/5 backdrop-blur-sm w-full sm:w-auto"
                        >
                            Get a Consultation
                        </button>
                    </motion.div>
                </div>
 
                {/* Construction Side Rail */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-10 z-20">
 
                    <div className="w-[1px] h-32 bg-industrial-gray/10" />
                </div>
            </section>
 
            {/* Residential */}
            <Section id="residential-detail" className="bg-[#1C2E57] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold">
                                <Home className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold">Container Home Construction</h2>
                        </div>
                        <p className="text-white/70 mb-10 text-lg leading-relaxed">
                            We design and build modern homes using high-quality shipping containers, delivering durable, sustainable, and affordable housing solutions tailored to your lifestyle.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            {[
                                { title: 'Fast construction timelines', desc: 'Container homes can be completed significantly faster than traditional buildings.', icon: <Timer /> },
                                { title: 'Cost-efficient housing', desc: 'Reduced material and labor costs compared to conventional construction.', icon: <DollarSign /> },
                                { title: 'Durable steel structures', desc: 'Containers provide strong, weather-resistant frameworks designed for long-term use.', icon: <Hammer /> },
                                { title: 'Custom design options', desc: 'Flexible layouts for single homes, multi-container villas, and modular housing.', icon: <Move /> }
                            ].map((item, i) => (
                                <div key={i} className="group bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                                    <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                                    <h4 className="font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="gold" className="px-8 py-4 text-sm" onClick={() => navigate('/contact/')}>Request a Consultation</Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative group">
                            <img
                                src={containerHomes}
                                alt="Container Homes"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#1C2E57]/20" />
                        </div>
                    </div>
                </div>
            </Section>
 
            {/* Commercial */}
            <Section id="commercial-detail">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-navy/5 aspect-video relative group">
                            <img
                                src={containerOffice}
                                alt="Commercial Building"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-[#1C2E57]/10" />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#1C2E57]/5 rounded-xl flex items-center justify-center text-gold">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-[#1C2E57]">Commercial Container Buildings</h2>
                        </div>
                        <p className="text-[#1C2E57]/80 mb-10 text-lg leading-relaxed font-medium">
                            We construct container-based offices, retail spaces, site offices, and commercial units designed for functionality, mobility, and modern aesthetics.
                        </p>
                        <div className="space-y-4 mb-12">
                            {[
                                'Quick deployment for businesses',
                                'Scalable modular design',
                                'Professional interior finishes',
                                'Relocatable structures'
                            ].map((item, i) => (
                                <div key={i} className="group flex items-center gap-3 text-[#1C2E57]/80 hover:translate-x-2 transition-transform duration-300">
                                    <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-semibold text-lg group-hover:text-gold transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                        <Button variant="gold" className="px-8 py-4 text-sm" onClick={() => navigate('/contact/')}>Request a Consultation</Button>
                    </div>
                </div>
            </Section>
 
            {/* Hospitality */}
            <Section id="hospitality-detail" className="bg-[#1C2E57] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold">
                                <Palmtree className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold">Resort & Hospitality Projects</h2>
                        </div>
                        <p className="text-white/70 mb-10 text-lg leading-relaxed">
                            We build eco-friendly resorts, vacation cottages, cafés, and hospitality spaces using containers that combine modern design with sustainable construction.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: 'Eco-friendly construction', desc: 'Reuse shipping containers to reduce impact.' },
                                { title: 'Unique architectural appeal', desc: 'Modern and creative designs.' },
                                { title: 'Custom resort layouts', desc: 'Villas, guest rooms, and café spaces.' },
                                { title: 'Rapid project completion', desc: 'Faster construction timelines.' }
                            ].map((item, i) => (
                                <div key={i} className="group p-4 border-l-2 border-gold/30 hover:border-gold bg-white/5 transition-all duration-300 hover:scale-[1.02]">
                                    <h4 className="font-bold mb-1 text-sm group-hover:text-gold transition-colors">{item.title}</h4>
                                    <p className="text-xs text-white/40">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="gold" className="px-8 py-4 text-sm" onClick={() => navigate('/contact/')}>Request a Consultation</Button>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative group">
                            <img
                                src={containerResort}
                                alt="Hospitality Project"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </Section>
 
            {/* Sanitation */}
            <Section id="sanitation-detail">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border border-navy/5 aspect-video relative group">
                            <img
                                src={containerSanitation}
                                alt="Sanitation Facility"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#1C2E57]/5 rounded-xl flex items-center justify-center text-gold">
                                <Droplet className="w-6 h-6" />
                            </div>
                            <h2 className="text-4xl font-bold text-[#1C2E57]">Sanitation & Utility Infrastructure</h2>
                        </div>
                        <p className="text-[#1C2E57]/80 mb-10 text-lg leading-relaxed font-medium">
                            We develop container-based sanitation facilities, portable toilets, and utility units for public spaces, construction sites, and remote locations.
                        </p>
                        <div className="space-y-6 mb-12">
                            {[
                                { label: 'Portable sanitation units', desc: 'Ideal for events and remote construction sites.' },
                                { label: 'Fully equipped utility spaces', desc: 'Complete plumbing, water, and hygiene systems.' },
                                { label: 'Durable outdoor structures', desc: 'Built to withstand harsh weather conditions.' },
                                { label: 'Quick installation', desc: 'Minimal on-site construction required.' }
                            ].map((item, i) => (
                                <div key={i} className="group border-b border-[#1C2E57]/5 pb-4 last:border-0 hover:translate-x-2 transition-transform duration-300 text-[#1C2E57]">
                                    <h4 className="font-bold mb-1 group-hover:text-gold transition-colors">{item.label}</h4>
                                    <p className="text-sm opacity-60 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <Button variant="gold" className="px-8 py-4 text-sm" onClick={() => navigate('/contact/')}>Request a Consultation</Button>
                    </div>
                </div>
            </Section>
 
            {/* Pricing & Value */}
            <Section id="pricing" className="bg-[#1C2E57] text-white">
                <h2 className="text-4xl font-bold text-center mb-16">Pricing & Value</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Transparent Pricing', desc: 'Custom project estimates based on size, design, and features.' },
                        { title: 'Complete Project Delivery', desc: 'Design, fabrication, transport, and installation handled end-to-end.' },
                        { title: 'Flexible Project Options', desc: 'Solutions suitable for residential, commercial, and infrastructure.' },
                        { title: 'Long-Term Value', desc: 'Durable structures with significantly lower maintenance costs.' }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 bg-white/5 rounded-3xl border border-white/10 text-center hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                            <h3 className="font-bold text-gold mb-4 uppercase tracking-widest text-sm group-hover:scale-110 transition-transform">{item.title}</h3>
                            <p className="text-sm text-white/50">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
 
            <Section id="comparison">
                <h2 className="text-4xl font-bold text-[#1C2E57] text-center mb-16">Feature Comparison</h2>
               
                <div className="w-full overflow-x-auto pb-4 table-scrollbar" style={{ WebkitOverflowScrolling: 'touch' }}>
                    <div className="inline-block min-w-full align-middle">
                        <div className="rounded-3xl border border-[#1C2E57]/10 overflow-hidden bg-white shadow-sm">
                            <table className="min-w-[800px] w-full border-collapse">
                                <thead>
                                    <tr className="bg-[#1C2E57] text-white text-left">
                                        <th className="p-6 whitespace-nowrap">Feature</th>
                                        <th className="p-6 whitespace-nowrap">Global Containers</th>
                                        <th className="p-6 whitespace-nowrap">Traditional Construction</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[#1C2E57]/80">
                                    {[
                                        ['Construction Time', 'Fast Modular Build', 'Long Construction Time'],
                                        ['Cost Efficiency', 'Lower Overall Cost', 'Higher Material & Labor Cost'],
                                        ['Mobility', 'Relocatable Structures', 'Permanent Structures'],
                                        ['Sustainability', 'Recycled Containers', 'Higher Resource Consumption']
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-[#1C2E57]/5 hover:bg-[#1C2E57]/5 transition-colors font-medium">
                                            <td className="p-6 font-bold whitespace-nowrap">{row[0]}</td>
                                            <td className="p-6 text-gold font-bold whitespace-nowrap">{row[1]}</td>
                                            <td className="p-6 whitespace-nowrap">{row[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>
 
            {/* Key Differentiators */}
            <Section id="differentiators" className="bg-[#1C2E57] text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-bold mb-12">Key Differentiators</h2>
                        <div className="space-y-10">
                            {[
                                { title: 'Innovative Container Architecture', desc: 'Modern modular designs that transform containers into beautiful spaces.', icon: <CheckCircle2 /> },
                                { title: 'Fully Customized Projects', desc: 'Layouts, interiors, and finishes designed according to your needs.', icon: <CheckCircle2 /> },
                                { title: 'Faster Project Delivery', desc: 'Container construction significantly reduces build timelines.', icon: <CheckCircle2 /> },
                                { title: 'Sustainable Building Approach', desc: 'Reusing containers helps reduce waste and footprint.', icon: <CheckCircle2 /> }
                            ].map((item, i) => (
                                <div key={i} className="group flex gap-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="text-gold mt-1 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                                        <p className="text-white/50 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
                        <h2 className="text-4xl font-bold mb-12">Our Commitment</h2>
                        <div className="space-y-8">
                            {[
                                { label: 'Strong Structural Engineering', desc: 'Modified for maximum safety and durability.', icon: <ShieldCheck /> },
                                { label: 'Proven Construction Expertise', desc: 'Experience across all container-based project sectors.', icon: <BarChart3 /> },
                                { label: 'Modern Design & Finishing', desc: 'Professional interiors, insulation, and utility systems.', icon: <Leaf /> },
                                { label: 'Reliable Project Support', desc: 'Dedicated guidance from design to installation.', icon: <Timer /> }
                            ].map((item, i) => (
                                <div key={i} className="group flex items-center gap-6 hover:scale-[1.02] transition-transform duration-300">
                                    <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold group-hover:text-gold transition-colors">{item.label}</h4>
                                        <p className="text-xs text-white/40">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
 
            {/* FAQ Section */}
            <Section id="faq" className="bg-[#1C2E57]/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-12 xl:col-span-5">
                        <div className="lg:sticky lg:top-40">
                            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Information Center</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#1C2E57] mb-8 leading-tight">Frequently Asked Questions</h2>
                            <p className="text-[#1C2E57]/80 text-lg leading-relaxed mb-10 max-w-xl font-medium">
                                Find answers to common questions about our modular construction process, timelines, and technical requirements.
                            </p>
                            <div className="p-8 bg-white rounded-3xl border border-[#1C2E57]/5 hidden xl:block">
                                <h4 className="font-bold text-[#1C2E57] mb-4">Still have questions?</h4>
                                <p className="text-sm text-[#1C2E57]/60 mb-6 font-medium">Our experts are here to help you navigate your project requirements.</p>
                                <Button variant="gold" className="w-full py-4 text-xs" onClick={() => navigate('/contact/')}>Contact Specialist</Button>
                            </div>
                        </div>
                    </div>
 
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="space-y-6">
                            {FAQS.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`group rounded-3xl overflow-hidden transition-all duration-500 bg-white ${openFaq === i
                                        ? 'ring-2 ring-gold border-transparent scale-[1.02]'
                                        : 'border border-navy/5 hover:border-gold/30 hover:scale-[1.01]'
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-8 text-left transition-colors"
                                    >
                                        <span className={`font-bold text-xl pr-8 transition-colors duration-300 ${openFaq === i ? 'text-gold' : 'text-[#1C2E57]'
                                            }`}>
                                            {faq.question}
                                        </span>
                                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-500 ${openFaq === i ? 'bg-gold text-white rotate-0' : 'bg-[#1C2E57]/5 text-[#1C2E57] hover:bg-gold hover:text-white'
                                            }`}>
                                            {openFaq === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "circOut" }}
                                            >
                                                <div className="px-8 pb-8 text-[#1C2E57]/80 text-lg leading-relaxed border-t border-[#1C2E57]/10 mt-2 pt-8 bg-gold/[0.02] font-medium">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
 
                        <div className="mt-12 xl:hidden">
                            <Button variant="gold" className="w-full py-6" onClick={() => navigate('/contact/')}>Still have questions? Contact Us</Button>
                        </div>
                    </div>
                </div>
            </Section>
 
            {/* Final CTA */}
            <Section id="final-cta" centered className="py-32">
                <h2 className="text-4xl md:text-6xl font-bold text-[#1C2E57] mb-8 text-center">Ready to Build Your Project?</h2>
                <p className="text-[#1C2E57]/80 max-w-2xl mx-auto mb-12 text-lg text-center font-medium">
                    Schedule a consultation to discuss your requirements and explore innovative container building solutions with Global Containers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="gold" className="px-12 py-5 text-sm" onClick={() => navigate('/contact/')}>Request a Consultation</Button>
                </div>
            </Section>
        </div>
    );
};