"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <nav className="bg-[#FBF9F4] px-4 md:px-8 py-4 flex items-center justify-between border-b border-gray-100 relative z-50 w-full">

            {/* Brand Logo */}
            <div className="text-2xl font-headline text-[#1C2D37] tracking-wide relative z-50">
                Heritage Press
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
                <ul className="flex items-center space-x-6 text-sm font-medium text-[#4A4A4A]">
                    <li>
                        <Link href="/" className="hover:text-black transition-colors">
                            Heritage
                        </Link>
                    </li>

                    <li className="relative">
                        <button
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="flex items-center space-x-1 text-black border-b-2 border-[#C5A880] pb-1 font-semibold focus:outline-none cursor-pointer"
                        >
                            <span>Services</span>
                            <ChevronDown size={14} className="mt-0.5" />
                        </button>

                        {servicesOpen && (
                            <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg py-2 rounded z-50">
                                <li>
                                    <Link
                                        href="/services/specialized-techniques"
                                        className="block px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#FBF9F4] hover:text-black"
                                    >
                                        Specialized Techniques
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services/custom-printing"
                                        className="block px-4 py-2 text-sm text-[#4A4A4A] hover:bg-[#FBF9F4] hover:text-black"
                                    >
                                        Custom Printing
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <Link
                            href="/gallery"
                            className="hover:text-black transition-colors"
                        >
                            Gallery
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/inquiry"
                            className="hover:text-black transition-colors"
                        >
                            Inquiry
                        </Link>
                    </li>
                </ul>

                <Link
                    href="/request-quote"
                    className="bg-[#032214] text-white text-xs font-bold tracking-wider uppercase px-5 py-2.5 rounded-sm hover:bg-opacity-90 transition-all"
                >
                    Request Quote
                </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center relative z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 text-[#1C2D37] focus:outline-none pointer-events-auto"
                    aria-label="Toggle Menu"
                    type="button"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#FBF9F4] border-b border-gray-200 p-6 shadow-xl flex flex-col space-y-6 md:hidden z-40 pointer-events-auto">
                    <ul className="flex flex-col space-y-4 text-base font-medium text-[#4A4A4A]">
                        <li>
                            <Link
                                href="/"
                                className="block py-1 hover:text-black"
                                onClick={() => setIsOpen(false)}
                            >
                                Heritage
                            </Link>
                        </li>

                        <li>
                            <button
                                onClick={() => setServicesOpen(!servicesOpen)}
                                className="flex items-center justify-between w-full py-1 text-black font-semibold border-b border-gray-200 focus:outline-none"
                                type="button"
                            >
                                <span>Services</span>
                                <ChevronDown
                                    size={16}
                                    className={`transform transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {servicesOpen && (
                                <ul className="mt-2 pl-4 border-l-2 border-[#C5A880] space-y-3 py-2 text-sm text-gray-600">
                                    <li>
                                        <Link
                                            href="/services/specialized-techniques"
                                            className="block hover:text-black"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Specialized Techniques
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/custom-printing"
                                            className="block hover:text-black"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Custom Printing
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/gallery"
                                className="block py-1 hover:text-black"
                                onClick={() => setIsOpen(false)}
                            >
                                Gallery
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/inquiry"
                                className="block py-1 hover:text-black"
                                onClick={() => setIsOpen(false)}
                            >
                                Inquiry
                            </Link>
                        </li>
                    </ul>

                    <Link
                        href="/request-quote"
                        className="bg-[#032214] text-white text-sm font-bold tracking-wider uppercase py-3 rounded-sm text-center block w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        Request Quote
                    </Link>
                </div>
            )}
        </nav>
    );
}