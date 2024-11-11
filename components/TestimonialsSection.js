import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-400"
                        }`}
                />
            ))}
        </div>
    )
}

export default function TestimonialsSection() {
    return (
        <section className="bg-black text-white py-24">
            <div className="container md:w-11/12 mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            What our customers are saying about us?
                        </h2>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-2xl font-bold">10m+</div>
                                <div className="text-sm text-gray-400">Happy People</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">4.88</div>
                                <div className="text-sm text-gray-400">Overall rating</div>
                                <div className="mt-1">
                                    <StarRating rating={4.88} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-zinc-900 border-zinc-800">
                        <CardContent className="p-8 relative">
                            <Quote className="absolute right-8 top-8 h-12 w-12 text-yellow-400 opacity-20" />
                            <div className="flex items-center gap-4 mb-6">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                                    <AvatarFallback>CW</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-accent">Cameron Williamson</div>
                                    <div className="text-sm text-gray-400">Designer</div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.
                            </p>
                            <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="rounded-full">
                                    <ChevronLeft className="h-4 w-4" />
                                    <span className="sr-only">Previous testimonial</span>
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Next testimonial</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-400 mb-12">Thousands of {"world's"} leading companies trust Space</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {['Amazon', 'AMD', 'Cisco', 'Dropcom', 'Logitech', 'Spotify'].map((company) => (
                            <div key={company} className="font-mono text-2xl p-4">
                                <h1>{company}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}