import Image from "next/image";
import { PenTool, Mail, Calendar, BookOpen, ArrowRight } from 'lucide-react';
import banner from "@/public/WelcomeImage.png";
import typeWriter from "@/public/typewriter-2900330_1280.jpg";

export default function Home() {
    return (
        <div className="bg-[#FBF9F4] text-[#1C2D37] min-h-screen font-sans selection:bg-[#C5A880]/30">

            {/* --- 1. HERO SECTION --- */}
            <div className="relative w-full h-screen overflow-hidden">
                {/* Background Image */}
                <Image
                    src={banner}
                    alt="Heritage Press Banner"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-black/45"></div>

                {/* Content Box */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white z-10">
                    <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#C5A880] mb-2">
                        Est. 1895
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight max-w-3xl">
                        The Art of the Printed Word
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-gray-200 max-w-xl leading-relaxed font-light">
                        Preserving the tactile elegance of traditional craftsmanship for the modern connoisseur.
                        Archival-quality letterpress for those who value the permanent.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#032214] border border-[#032214] hover:bg-[#032214]/90 text-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm transition-all shadow-md">
                            Request a Private Consultation
                        </button>
                        <button className="border border-white/80 px-6 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm backdrop-blur-xs">
                            Explore the Archives
                        </button>
                    </div>
                </div>
            </div>

            {/* ---2 HERITAGE / BRAND STORY SECTION --- */}
            <div className="py-24 border-t border-gray-100 bg-[#FBF9F4]">
                <h2 className="text-center text-xs font-bold tracking-[0.3em] uppercase text-[#8B7355]">
                    Our Heritage
                </h2>
                <div className="mt-3 mx-auto w-16 h-1px bg-[#8C6D3E]/60"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 px-6 md:px-12 pt-16">

                    {/* Narrative Paragraphs */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h3 className="text-3xl md:text-4xl font-serif italic text-[#1C2D37] tracking-wide">
                            A Century of Impressions
                        </h3>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">
                            Deep in our London workshop, the rhythmic clatter of the Heidelberg Windmill and the heavy scent of archival ink speak of an era when every invitation, every business card, and every ledger was a testament to the person who held it.
                        </p>
                        <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">
                            Heritage Press was founded on the principle that digital ubiquity cannot replace physical permanence. We use centuries-old techniques—metal type, hand-mixed pigments, and artisanal cotton papers—to create work that demands to be touched.
                        </p>
                        <span className="text-[#8B7355] uppercase tracking-widest text-xs font-bold border-b border-[#8B7355] w-fit pb-1 cursor-pointer hover:text-black hover:border-black transition-colors mt-2">
                            Discover Our Process
                        </span>
                    </div>

                    {/* Asset Showcase Frame */}
                    <div className="md:w-1/2 flex justify-center w-full">
                        <div className="relative w-full max-w-105 aspect-3/4 bg-white p-3 border border-gray-200/60 shadow-xl rounded-sm">
                            <div className="relative w-full h-full overflow-hidden">
                                <Image
                                    src={typeWriter}
                                    alt="Traditional Letterpress Workshop Machine"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Float Accent Badge */}
                            <div className="absolute bottom-6 right-6 bg-[#032214] text-white p-4 min-w-27.5 text-center shadow-lg rounded-xs">
                                <p className="text-2xl font-serif tracking-wide text-[#E9E7E2]">125</p>
                                <p className="text-[9px] font-bold tracking-widest text-[#C5A880] mt-0.5">YEARS OF CRAFT</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- 3. EXPERT SERVICES (BENTO GRID) --- */}
            <div className="py-24">
                {/* Services Header */}
                <section className="max-w-7xl mx-auto px-6 pb-12 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                    <div>
                        <span className="text-xs font-bold tracking-widest uppercase text-[#8B7355] block mb-3">
                            Expert Services
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif tracking-wide leading-tight max-w-md">
                            The Alchemy of Ink & Paper
                        </h2>
                    </div>
                    <div className="md:text-right flex md:justify-end">
                        <p className="text-sm text-[#4A4A4A] max-w-xs leading-relaxed font-light italic border-l-2 md:border-l-0 md:border-r-2 border-[#C5A880] px-4 md:px-6">
                            Bespoke solutions for individuals and institutions who demand excellence.
                        </p>
                    </div>
                </section>

                {/* Bento Grid */}
                <section className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card 1: Bespoke Letterpress */}
                        <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between min-h-80 md:col-span-2 shadow-sm rounded-sm">
                            <div>
                                <div className="text-[#8B7355] mb-6">
                                    <PenTool size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 tracking-wide">Bespoke Letterpress</h3>
                                <p className="text-sm text-[#4A4A4A] leading-relaxed max-w-xl font-light">
                                    Our signature service. We produce a deep tactile impression on heavy cotton stock,
                                    creating a physical presence that modern digital printing cannot replicate.
                                </p>
                            </div>
                            <div className="pt-6">
                                <a href="#" className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider uppercase group text-[#1C2D37] hover:text-[#8B7355] transition-colors">
                                    <span>Learn More</span>
                                    <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Card 2: Fine Stationery */}
                        <div className="bg-[#032214] text-white p-8 flex flex-col justify-between min-h-80 shadow-sm rounded-sm">
                            <div>
                                <div className="text-[#C5A880] mb-6">
                                    <Mail size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 tracking-wide text-[#E9E7E2]">Fine Stationery</h3>
                                <p className="text-sm text-gray-300 leading-relaxed font-light">
                                    Personalized correspondences, blind engraving, and gilded edges. For the discerning desk.
                                </p>
                            </div>
                            <div className="pt-6">
                                <a href="#" className="inline-flex items-center text-xs font-bold tracking-wider uppercase border-b border-white/40 pb-1 hover:border-white transition-colors">
                                    View Collection
                                </a>
                            </div>
                        </div>

                        {/* Card 3: Occasions */}
                        <div className="bg-white p-8 border border-gray-100 flex flex-col justify-between min-h-70 shadow-sm rounded-sm">
                            <div>
                                <div className="text-[#8B7355] mb-6">
                                    <Calendar size={22} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-serif mb-3 tracking-wide">Occasions</h3>
                                <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">
                                    Wedding suites and gala invitations that serve as heirlooms long after the event has passed.
                                </p>
                            </div>
                            <div></div>
                        </div>

                        {/* Card 4: Bookbinding */}
                        <div className="bg-[#E9E7E2] p-8 flex flex-col md:flex-row justify-between gap-6 min-h-70 md:col-span-2 shadow-inner rounded-sm">
                            <div className="flex flex-col justify-between max-w-md">
                                <div>
                                    <div className="text-[#8B7355] mb-6">
                                        <BookOpen size={22} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-serif mb-3 tracking-wide">Bookbinding</h3>
                                    <p className="text-sm text-[#4A4A4A] leading-relaxed font-light">
                                        Hand-sewn leather bindings and restoration of antique volumes using traditional archival materials.
                                    </p>
                                </div>
                            </div>
                            {/* Graphic Accent Block */}
                            <div className="w-full md:w-44 h-44 md:h-full bg-linear-to-br from-[#1c2d37] to-[#032214] opacity-90 self-center rounded-sm shadow-md"></div>
                        </div>

                    </div>
                </section>
            </div>



            {/* --- 4. CALL TO ACTION SECTION --- */}
            <section className="bg-white border-t border-gray-100 py-24 text-center px-6">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif tracking-wide italic text-[#1C2D37]">
                        Let us leave a lasting impression.
                    </h2>
                    <p className="text-xs text-[#4A4A4A] max-w-md mx-auto leading-relaxed uppercase tracking-wider font-medium">
                        Consultations are by appointment only at our historic Fleet Street studio or via virtual atelier.
                    </p>
                    <div className="pt-4">
                        <button className="bg-[#032214] text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-opacity-95 transition-all shadow-md active:scale-[0.99]">
                            Request a Private Consultation
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}