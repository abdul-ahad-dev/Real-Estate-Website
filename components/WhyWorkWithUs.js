import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HousePlus, House, ShieldCheck } from "lucide-react"


const workUsSection = [
    {
        title: "Wide Range of Properties",
        description: "We offer expert legal help for all related property",
        icon: HousePlus,
    },
    {
        title: "Buy or Rent Homes",
        description: "We sell your home at the best market price and very quickly as well.",
        icon: House,
    },
    {
        title: "Trusted by Thousands",
        description: "We offer you free consultancy to get a loan for your new home.",
        icon: ShieldCheck,
    },
]


export default function WhyWorkWithUs() {
    return (
        <section className="container md:w-11/12 mx-auto py-24">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold">
                    Why You Should Work With Us
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {workUsSection.map((item, index) => (
                    <Card key={index} className="text-center">
                        <CardHeader>
                            <div className="mx-auto mb-4">
                                <item.icon size={80} className="text-primary" />
                            </div>
                            <CardTitle className="text-xl md:text-2xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
};