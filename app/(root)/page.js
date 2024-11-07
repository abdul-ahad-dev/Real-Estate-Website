import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, House, HousePlus, ShieldCheck, Bath, BedDouble, MapPin, MoveRight, Square } from "lucide-react";
import Image from "next/image";
import StatsSection from "@/components/StatsSection";
import CityProperties from "@/components/CityProperties";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import SignInCTA from "@/components/SignInCTA";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";

export default function Home() {


  


  return (
    <>
      <div className="relative flex flex-col">
        <div
          className="relative w-full min-h-[720px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center z-10">
              <div className="text-gray-200 flex flex-wrap justify-center gap-4 mb-4">
                <span>5 Beds</span>
                <span>2 Baths</span>
                <span>180 sqft</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-wide">
                Office Space at<br />Northwest
              </h1>
              <h2 className="text-lg text-white font-medium mb-4 sm:mb-6">
                $250 <span className="text-sm">/month</span>
              </h2>
              <div className="flex justify-center p-2">
                <Button className="bg-accent text-black font-medium hover:cursor-pointer hover:bg-accent/90 flex items-center">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto absolute -bottom-12">
          <FilterBar />
        </div>
      </div>


      <CityProperties />


      <WhyWorkWithUs />


      <SignInCTA />



      <FeaturedProperties />


      <HeroSection />


      <StatsSection />

    </>
  );
}
