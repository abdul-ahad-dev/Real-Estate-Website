import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Phone } from 'lucide-react'

function Navbar() {
  return (
    <div className="w-full py-5 shadow-md bg-foreground z-20 text-white">
      <div className="md:w-11/12 mx-auto flex justify-between items-center">

        <div className="flex">
          <h1 className="text-xl font-mono">Real State</h1>
        </div>

        <div className=" md:block none">
          <Button variant="link" asChild>
            <Link href={'/'} className="flex items-center text-white">Home<ChevronDown /></Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={'/'} className="flex items-center text-white">Members<ChevronDown /></Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={'/'} className="flex items-center text-white">Blog<ChevronDown /></Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={'/'} className="flex items-center text-white">Pages<ChevronDown /></Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={'/'} className="flex items-center text-white">Contact</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <Phone size={20} />
            <span className="ml-1">+92 330 2355684</span>
          </div>

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Button variant="outline" className="rounded-full border-2 border-black hover:text-white hover:bg-black transition-colors" asChild>
            <Link href="/login" className='text-black'>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Navbar