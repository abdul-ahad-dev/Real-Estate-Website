"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Menu, Phone, X } from 'lucide-react'


export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [userActions, setUserActions] = useState({ name: 'Login', href: '/login' });

	const navItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Members', href: '/' },
		{ name: 'Blog', href: '/' },
		{ name: 'Pages', href: '/' },
		{ name: 'Contact', href: '/' },
	]

	useEffect(() => {
		const checkUser = async () => {
			const user = await localStorage.getItem('user');
			if (user) {
				setUserActions({ name: 'Login', href: '/' })
			} else {
				setUserActions({ name: 'Logout', href: '/' })
			}
		}
		checkUser();
	}, []);

	return (
		<nav className="w-full py-4 shadow-md bg-foreground z-20 text-white">
			<div className="container mx-auto px-4 flex justify-between items-center">
				<div className="flex items-center">
					<h1 className="text-xl font-mono">Real State</h1>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center space-x-4">
					{navItems.map((item) => (
						<Button key={item.name} variant="link" asChild>
							<Link href={item.href} className="flex items-center text-white">
								{item.name}
								{item.name !== 'Contact' && <ChevronDown className="ml-1 h-4 w-4" />}
							</Link>
						</Button>
					))}
				</div>

				{/* Contact Info and User Actions */}
				<div className="hidden lg:flex items-center space-x-4">
					<div className="flex items-center">
						<Phone size={20} />
						<span className="ml-1">+92 330 2355684</span>
					</div>

					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<Button variant="outline" className="bg-foreground rounded-full border-2 border-white hover:text-black hover:bg-white transition-colors" asChild>
						<Link href={`${userActions.href}`}>{userActions.name}</Link>
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="lg:hidden">
							<Menu />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[300px] sm:w-[400px]">
						<nav className="flex flex-col h-full">
							<div className="flex items-center justify-between mb-8">
								<h2 className="text-lg font-semibold">Menu</h2>
								<SheetTrigger asChild>
									<Button variant="ghost" size="icon">
										<X className="h-6 w-6" />
										<span className="sr-only">Close menu</span>
									</Button>
								</SheetTrigger>
							</div>
							{navItems.map((item) => (
								<Button key={item.name} variant="ghost" asChild className="justify-start mb-2">
									<Link href={item.href} onClick={() => setIsOpen(false)}>
										{item.name}
									</Link>
								</Button>
							))}
							<div className="mt-auto">
								<div className="flex items-center mb-4">
									<Phone size={20} />
									<span className="ml-2">+92 330 2355684</span>
								</div>
								<Button variant="outline" className="w-full rounded-full border-2 border-primary hover:text-white hover:bg-primary transition-colors" asChild>
									<Link href={`${userActions.href}`} onClick={() => setIsOpen(false)}>{userActions.name}</Link>
								</Button>
							</div>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	)
};