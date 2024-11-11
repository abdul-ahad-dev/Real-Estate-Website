import { Button } from "@/components/ui/button"
import { ArrowRight, Bed, Bath, Square } from "lucide-react"
import FilterBar from "./FilterBar"


export default function FeaturedProperty() {
    return (
        <section className="relative">
            <div className="container w-full">
                <div className="relative w-full min-h-[720px] overflow-hidden">
                    <div
                        className="absolute w-full inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1540266947548-74a00563e834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        }}
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative min-h-[720px] z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                        <div className="flex flex-wrap justify-center gap-4 mb-4">
                            <span className="flex items-center"><Bed className="mr-2 h-4 w-4" /> 5 Beds</span>
                            <span className="flex items-center"><Bath className="mr-2 h-4 w-4" /> 2 Baths</span>
                            <span className="flex items-center"><Square className="mr-2 h-4 w-4" /> 180 sqft</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight tracking-wide max-w-4xl">
                            Office Space at Northwest
                        </h1>
                        <h2 className="text-lg font-medium mb-6">
                            $250 <span className="text-sm">/month</span>
                        </h2>
                        <Button
                            size="lg"
                            className="bg-accent text-accent-foreground hover:bg-accent/90 active:scale-95"
                        >
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div className="absolute left-4 right-4 -bottom-12 z-20">
                    <FilterBar />
                </div>
            </div>
        </section>
    )
}