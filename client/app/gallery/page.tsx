import React from "react";
import Image from "next/image";
import { Share2, Mail, Copy, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import art1 from "@/public/art1.png"
import art2 from "@/public/art2.png"
import art3 from "@/public/burgundy-desk-mat.png"
import art4 from "@/public/framed-botanical.png"
import art5 from "@/public/green-leather-box.png"
import art6 from "@/public/ink-workshop.png"

// Mock gallery items for the grid showcasing diverse print types
const galleryItems = [
    { id: 1, src: art1, alt: "Bespoke green leather ledger bookbinding" },
    { id: 2, src: art2, alt: "Press fine art print with frame" },
    { id: 3, src: art3, alt: "Handcrafted cotton business card deck on textured surface" },
    { id: 4, src: art4, alt: "Custom dark minimalist corporate brand stationery kit" },
    { id: 5, src: art5, alt: "Thick stacked gilded edge luxury business cards" },
    { id: 6, src: art6, alt: "Navy blue custom wedding card folder with premium wax seal stamp" },
];;

export default function Gallery() {
    return (
        <div className="bg-[#FBF9F4] text-[#1C2D37] min-h-screen font-sans antialiased selection:bg-[#C5A880]/30">


            {/* --- 2. HERO INTRO / TITLE SECTION --- */}
            <section className="max-w-4xl mx-auto text-center pt-24 pb-16 px-6">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.35em] uppercase text-[#8B7355] block mb-4">
                    Archive of Excellence
                </span>
                <h1 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight text-[#1C2D37] font-medium mb-8">
                    Recent Commissions
                </h1>

                {/* Editorial Decorative Winged Flourish */}
                <div className="flex flex-col items-center justify-center space-y-1 my-8 text-[#8B7355]/80">
                    <span className="text-sm italic font-serif">❦</span>
                    <span className="text-xs transform rotate-180 italic font-serif">❦</span>
                </div>

                <p className="text-sm md:text-base text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed font-light italic mt-6">
                    Discover our curated collection of artisanal print work, where historic techniques meet timeless modern aesthetics. Every piece is hand-pressed in our studio.
                </p>
            </section>

            {/* --- 3. FILTER TAB LINKS NAVIGATION --- */}
            <section className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold tracking-widest uppercase border-b border-gray-200/60 pb-4 max-w-fit mx-auto">
                    <button className="text-black border-b border-black pb-1 cursor-pointer">All Work</button>
                    <button className="text-[#4A4A4A] hover:text-black transition-colors cursor-pointer">Wedding Suites</button>
                    <button className="text-[#4A4A4A] hover:text-black transition-colors cursor-pointer">Executive Stationery</button>
                    <button className="text-[#4A4A4A] hover:text-black transition-colors cursor-pointer">Limited Edition Prints</button>
                </div>
            </section>

            {/* --- 4. PORTFOLIO SHOWCASE IMAGE GRID --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-28">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="group aspect-square bg-white relative overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-gray-100 p-2 rounded-sm"
                        >
                            <div className="relative w-full h-full overflow-hidden bg-gray-50">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-w-768px) 100vw, 33vw"
                                    className="object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                />
                                {/* Subtle Inner Frame Overlay on Hover */}
                                <div className="absolute inset-0 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- 5. CLIENT REFLECTIONS & TESTIMONIALS SECTION --- */}
            <section className="bg-transparent border-t border-gray-200/40 py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

                    {/* Main Column Label */}
                    <div className="md:col-span-2 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif tracking-wide text-[#1C2D37]">
                            Client Reflections
                        </h2>
                        <p className="text-sm text-[#4A4A4A] max-w-sm leading-relaxed font-light">
                            The physical presence of a Heritage Press piece is something that digital simply cannot replicate. Our clients and guests often comment on the tactile weight and the quiet authority our stationery carries.
                        </p>
                    </div>

                    {/* Right Column Editorial Blockquotes */}
                    <div className="md:col-span-3 space-y-12 md:pl-8">

                        {/* Quote 1 */}
                        <div className="border-l-2 border-[#C5A880] pl-6 space-y-3">
                            <p className="text-lg md:text-xl font-serif italic text-[#1C2D37] leading-relaxed tracking-wide">
                                &ldquo;The level of craftsmanship is unparalleled. Our wedding suites felt like historic artifacts, perfectly capturing the permanence of our commitment.&rdquo;
                            </p>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-[#8B7355]">
                                &mdash; Elizabeth & James V.
                            </p>
                        </div>

                        {/* Quote 2 */}
                        <div className="border-l-2 border-[#C5A880] pl-6 space-y-3">
                            <p className="text-lg md:text-xl font-serif italic text-[#1C2D37] leading-relaxed tracking-wide">
                                &ldquo;Heritage Press brings an archival quality to our corporate identity that commands immediate respect in every boardroom we enter.&rdquo;
                            </p>
                            <p className="text-[10px] font-bold tracking-widest uppercase text-[#8B7355]">
                                &mdash; Marlowe & Co. Architects
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- 6. CALL TO ACTION BOX (DEEP GREEN MODULE) --- */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
                <div className="bg-[#032214] text-white p-12 md:p-20 text-center rounded-sm shadow-xl relative overflow-hidden">
                    {/* Subtle Background Textural Depth */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#white_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

                    <div className="max-w-2xl mx-auto space-y-6 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-wide text-[#E9E7E2]">
                            Commission Your Own Legacy
                        </h2>
                        <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed font-light pt-2">
                            Every project begins with a conversation about materiality, typography, and intent. Let us help you craft something that lasts.
                        </p>

                        <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Button title="Schedule Consultation" variant="accent" size="md" className="w-full sm:w-auto" />
                            <Button title="Order Sample Kit" variant="outline" size="md" className="w-full sm:w-auto !border-white/40 !text-white hover:!bg-white hover:!text-black" />
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}