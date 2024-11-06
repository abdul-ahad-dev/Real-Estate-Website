import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="-z-10">
      <Image
        src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Beautiful landscape"
        className="w-full brightness-50 relative -z-10 object-cover"
        width={1476}
        height={987}
      />

      <div className="absolute p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="text-gray-200 flex justify-center gap-4 mb-4 text-center mx-auto">
          <span>5 Beds</span>
          <span>2 Baths</span>
          <span>180 sqft</span>
        </div>
        <h1 className="text-6xl font-bold mb-8 text-white text-center leading-tight tracking-wide">
          Office Space at<br />Northwest
        </h1>
        <h1 className="text-lg text-white font-medium mb-6 text-center">
          $250{' '}
          <span className="text-sm">/month</span>
        </h1>
        <div className="flex justify-center p-2">
          <Button className="bg-accent text-black font-medium hover:cursor-pointer">
            View Details <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
    
  );
}
