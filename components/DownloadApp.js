import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import Image from "next/image"

export default function DownloadApp() {
    return (
        <section className="">
            <div className="container md:w-11/12 mx-auto rounded-xl bg-[#1B4D3E] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="px-10 md:px-16 py-16 lg:py-24 space-y-6">
                        <div className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                            Start today
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white">
                            Download the App
                        </h2>

                        <p className="text-white text-lg max-w-md">
                            Take classes on the go with the just home app. Stream or download to watch on the plane{','} the subway{','} or wherever you learn best.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                variant="outline"
                                className="bg-white text-black hover:bg-white/90 space-x-2"
                                size="lg"
                                asChild
                            >
                                <a href="#" className="flex items-center">
                                    <Apple className="h-5 w-5" />
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-xs">Download on the</span>
                                        <span className="text-base font-semibold">Apple Store</span>
                                    </div>
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                className="bg-white text-black hover:bg-white/90 space-x-2"
                                size="lg"
                                asChild
                            >
                                <a href="#" className="flex items-center">
                                    <Play className="h-5 w-5 fill-current" />
                                    <div className="flex flex-col items-start text-left">
                                        <span className="text-xs">Get it on</span>
                                        <span className="text-base font-semibold">Google Play</span>
                                    </div>
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-full">
                        <Image
                            fill={true}
                            src="https://images.unsplash.com/photo-1730407363563-a2edc1db7deb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Person using real estate app on phone"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}