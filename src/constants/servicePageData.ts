// import { IMAGES } from "./image";


// export interface KeyAdvantage {
//     title: string;
//     value: string;
// }

// export interface BuildingComponent {
//     icon: string;
//     title: string;
//     description: string;
// }

// export interface StructureType {
//     title: string;
//     description: string;
// }

// export interface ServiceStep {
//     number: string;
//     title: string;
//     description: string;
// }

// export interface IndustryData {
//     id?: string;
//     image: string;
//     title: string;
//     description: string;
// }

// export interface FAQItem {
//     question: string;
//     answer: string;
// }

// export interface ServiceData {
//     id?: string;
//     title: string;
//     subtitle: string;
//     heroImage: string;
//     overviewImage: string;
//     overviewTitle: string;
//     overviewDescription: string;
//     keyAdvantagesTitle: string;
//     keyAdvantages: KeyAdvantage[];
//     keyFeaturesTitle: string;
//     keyFeatures: string[];
//     componentsTitle: string;
//     componentsSubtitle: string;
//     componentsData: BuildingComponent[];
//     structuresTitle: string;
//     structuresSubtitle: string;
//     structuresData: StructureType[];
//     servicesTitle: string;
//     servicesSubtitle: string;
//     servicesList: ServiceStep[];
//     industriesTitle: string;
//     industriesList: IndustryData[];
//     faqTitle?: string;
//     faqSubtitle?: string;
//     faqImage?: string;
//     faqList?: FAQItem[];
//     ctaTitle: string;
//     ctaDescription: string;
//     footerMessage?: string;
//     heroImagePosition?: string;
//     link?: string;


// }

// export const servicesData: ServiceData[] = [
//     {
//         id: "container-house-manufacturers-coimbatore",
//         title: "Luxury Container Homes",
//         subtitle: "Modern Modular Container Home Solutions in Coimbatore",
//         heroImage: IMAGES.luxuryContainerHomesHero,
//         heroImagePosition: "center",
//         overviewImage: IMAGES.productOverview,
//         overviewTitle: "Product Overview",
//         overviewDescription: "Container homes are one of the most innovative and sustainable modern housing solutions. Built using repurposed shipping containers, these structures offer durability, faster construction, and modern architectural flexibility. At Global Infra Projects, we specialize in designing and manufacturing luxury container homes in Coimbatore, delivering stylish and functional modular living spaces for residential and commercial applications. Our container homes combine strong steel structures with modern interiors, insulation systems, and customized layouts to create comfortable and visually appealing environments. From compact living spaces to luxury villas and resort cottages, our container homes are designed for durability, energy efficiency, and long-term performance.",

//         keyAdvantagesTitle: "Key Advantages",
//         keyAdvantages: [
//             { title: "Construction Speed", value: "Up to 70–80% faster than traditional buildings" },
//             { title: "Cost Efficiency", value: "Lower construction cost with modular design" },
//             { title: "Sustainability", value: "Eco-friendly construction using recycled containers" },
//             { title: "Flexibility", value: "Expandable and customizable architectural layouts" }
//         ],

//         keyFeaturesTitle: "Key Features & Benefits",
//         keyFeatures: [
//             "Strong steel structures built using high-quality shipping containers",
//             "Modern modular design allowing flexible layouts and configurations",
//             "Faster construction timelines compared to traditional houses",
//             "Thermal insulation for comfortable indoor environments",
//             "Premium interior finishes and customized architectural design",
//             "Stackable containers enabling multi-level construction",
//             "Portable structures that can be relocated if required",
//             "Energy-efficient and eco-friendly construction approach",
//             "Suitable for residential, commercial, and hospitality spaces",
//             "Reduced construction waste compared to conventional buildings",
//             "Quick installation with minimal site disruption",
//             "Scalable design allowing future expansion"
//         ],

//         componentsTitle: "Container Home Structural Components",
//         componentsSubtitle: "Our container homes are designed with carefully engineered components that ensure durability, comfort, and modern aesthetics.",
//         componentsData: [
//             {
//                 icon: "Building2",
//                 title: "Container Structural Frame",
//                 description: "High-strength steel container frames that provide structural stability and durability."
//             },
//             {
//                 icon: "LayoutDashboard",
//                 title: "Insulation & Interior Systems",
//                 description: "Thermal insulation, interior wall panels, flooring systems, and ceiling finishes for comfortable living spaces."
//             },
//             {
//                 icon: "Home",
//                 title: "Doors, Windows & Ventilation",
//                 description: "Custom openings for natural lighting, ventilation, and modern architectural design."
//             },
//             {
//                 icon: "Settings",
//                 title: "Utilities & Electrical Systems",
//                 description: "Integrated plumbing, electrical systems, and lighting designed for residential or commercial use."
//             }
//         ],

//         structuresTitle: "Types of Container Structures We Build",
//         structuresSubtitle: "Versatile container building solutions for residential, commercial, and hospitality applications.",
//         structuresData: [
//             { title: "Luxury Container Homes", description: "Modern residential container houses with premium interior finishes." },
//             { title: "Farmhouse Container Houses", description: "Container homes designed for agricultural lands and countryside living." },
//             { title: "Resort & Cottage Units", description: "Container-based cottages for eco-resorts and tourism developments." },
//             { title: "Container Offices", description: "Portable office spaces designed for project sites and commercial use." },
//             { title: "Portable Container Homes", description: "Movable container houses suitable for temporary housing solutions." },
//             { title: "Studio Apartments", description: "Compact container-based living units ideal for rental or guest accommodation." },
//             { title: "Guest Houses", description: "Standalone container structures used as guest rooms or rental units." },
//             { title: "Modular Living Spaces", description: "Multi-container modular designs creating larger homes and villas." },
//             { title: "Commercial Container Buildings", description: "Container structures designed for cafés, retail spaces, or small commercial setups." }
//         ],

//         servicesTitle: "Our Container Home Services",
//         servicesSubtitle: "End-to-end container home design and construction services from concept to installation.",
//         servicesList: [
//             {
//                 number: "01",
//                 title: "Consultation & Planning",
//                 description: "Understanding client requirements, land conditions, and architectural preferences."
//             },
//             {
//                 number: "02",
//                 title: "Design & Layout Development",
//                 description: "Custom architectural planning with optimized modular container layouts."
//             },
//             {
//                 number: "03",
//                 title: "Container Modification",
//                 description: "Cutting, reinforcement, and structural modifications of shipping containers."
//             },
//             {
//                 number: "04",
//                 title: "Insulation & Interior Finishing",
//                 description: "Installation of insulation, flooring, electrical systems, and interior finishes."
//             },
//             {
//                 number: "05",
//                 title: "Transportation & Site Preparation",
//                 description: "Safe delivery of container modules and preparation of installation foundations."
//             },
//             {
//                 number: "06",
//                 title: "Installation & Final Handover",
//                 description: "On-site installation, finishing work, and final project completion."
//             }
//         ],

//         industriesTitle: "Industries & Applications",
//         industriesList: [
//             {
//                 id: "residential-living",
//                 image: IMAGES.ManufacturingandEngineering,
//                 title: "Residential Living",
//                 description: "Modern container homes designed for compact, eco-friendly living."
//             },
//             {
//                 id: "resorts-hospitality",
//                 image: IMAGES.WarehouseandLogistics,
//                 title: "Resorts & Hospitality",
//                 description: "Container cottages and villas used in tourism and resort developments."
//             },
//             {
//                 id: "commercial-office",
//                 image: IMAGES.EPC_1,
//                 title: "Commercial & Office Spaces",
//                 description: "Container-based offices and small commercial structures for business operations."
//             }
//         ],

//         faqTitle: "Frequently Asked Questions",
//         faqSubtitle: "Common questions about container homes and modular construction.",
//         faqImage: IMAGES.faq,
//         faqList: [
//             {
//                 question: "Are container homes durable?",
//                 answer: "Yes. Shipping containers are made from high-strength steel and are designed to withstand extreme conditions.",
//             },
//             {
//                 question: "How long does it take to build a container home?",
//                 answer: "Most projects can be completed within a few weeks to a few months, depending on design complexity.",
//             },
//             {
//                 question: "Can container homes be expanded in the future?",
//                 answer: "Yes. Additional containers can be added to expand the structure.",
//             },
//             {
//                 question: "Are container homes eco-friendly?",
//                 answer: "Yes. They reuse shipping containers, reduce construction waste."
//             },
//             {
//                 question: "Can container homes be used for commercial spaces?",
//                 answer: "Absolutely. Container structures are widely used for offices, cafés, retail stores, and hospitality spaces."
//             },
//             {
//                 question: "Do container homes require special foundations?",
//                 answer: "Generally, simple foundations such as concrete piers or slabs are sufficient."
//             }
//         ],

//         ctaTitle: "Start Your Container Home Project",
//         ctaDescription: "Contact Global Infra Projects today for a consultation and customized container home design.",
//     },
// ];
