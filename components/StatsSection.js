import { Button } from "@/components/ui/button"
import { MoveRight } from "lucide-react"
import Image from "next/image"


export default function StatsSection() {
    return (
        <section className="container md:w-11/12 mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            We Use Real Estate to Show Our Appreciation of The World
                        </h2>
                        <p className="text-muted-foreground">
                            Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nish eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">

                        <div className="space-y-2">
                            <div className="text-3xl font-bold">$18M</div>
                            <div className="text-sm text-muted-foreground">
                                Owned From Properties Transactions
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">15K+</div>
                            <div className="text-sm text-muted-foreground">
                                Properties For Sell
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">26K+</div>
                            <div className="text-sm text-muted-foreground">
                                Properties For Buy
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-3xl font-bold">890</div>
                            <div className="text-sm text-muted-foreground">
                                Daily Completed Transactions
                            </div>
                        </div>
                    </div>

                    <Button className="bg-foreground hover:bg-foreground active:scale-95">
                        Learn More
                        <MoveRight className="ml-2" />
                    </Button>
                </div>


                <div className="relative h-[500px] rounded-2xl overflow-hidden">
                    <Image
                        fill={true}
                        src="https://images.unsplash.com/photo-1521674685714-2446ff917fbc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Modern white house with glass windows and beautiful landscaping"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}