import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"


export default function TestimonialsSection() {
    return (
        <section className="bg-black text-white py-24">
            <div className="container md:w-11/12 mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            What our customers are saying us?
                        </h2>
                        <div className="flex gap-12">
                            <div>
                                <div className="text-2xl font-bold">10m+</div>
                                <div className="text-sm text-gray-400">Happy People</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">4.88</div>
                                <div className="text-sm text-gray-400">Overall rating</div>
                                <div className="flex gap-1 mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-4 h-4 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>


                    <Card className="bg-foreground border-foreground">
                        <CardContent className="p-8 relative">
                            <Quote className="absolute right-8 top-8 h-12 w-12 text-yellow-400 opacity-20" />
                            <div className="flex items-center gap-4 mb-6">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Cameron Williamson" />
                                    <AvatarFallback>CW</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-semibold text-white">Cameron Williamson</div>
                                    <div className="text-sm text-gray-400">Designer</div>
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6">
                                Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.
                            </p>
                            <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="rounded-full">
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button size="icon" variant="outline" className="rounded-full">
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>


                <div className="mt-24 text-center">
                    <p className="text-gray-400 mb-12">Thousands of world's leading companies trust Space</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
                        {['Amazon', 'AMD', 'Cisco', 'Dropcom', 'Logitech', 'Spotify'].map((company) => (
                            <div key={company} className="flex justify-center">
                                <Image
                                    fill={true}
                                    src="/placeholder.svg?height=40&width=120"
                                    alt={`${company} logo`}
                                    className="h-8 object-contain opacity-50 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}