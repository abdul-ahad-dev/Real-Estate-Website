import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Linkedin, href: "#", label: "LinkedIn" },
    ]

    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto md:w-11/12 px-4 h-16">
                <div className="flex items-center justify-between h-full">
                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground">
                        Copyright © {new Date().getFullYear()}. Abdul Ahad
                    </p>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="h-6 w-6">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-full w-full"
                            >
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                        <span className="font-semibold text-lg">RealState</span>
                    </Link>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="h-4 w-4" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}