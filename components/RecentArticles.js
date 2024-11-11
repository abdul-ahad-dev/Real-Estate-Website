import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"


const articles = [
    {
        id: 1,
        title: "Housing Markets That Changed the Most This Week",
        category: "Apartment",
        date: "March 19, 2024",
        image: "https://images.unsplash.com/photo-1690987601363-83022d125159?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "housing-markets-changed",
    },
    {
        id: 2,
        title: "Read Unveils the Best Canadian Cities for Biking",
        category: "Apartment",
        date: "March 19, 2024",
        image: "https://images.unsplash.com/photo-1540266947548-74a00563e834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "best-canadian-cities-biking",
    },
    {
        id: 3,
        title: "10 Walkable Cities Where You Can Live Affordably",
        category: "Office",
        date: "March 19, 2024",
        image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "walkable-cities-affordable",
    },
    {
        id: 4,
        title: "New Apartment Nice in the Best Canadian Cities",
        category: "Shop",
        date: "March 19, 2024",
        image: "https://images.unsplash.com/photo-1449198063792-7d754d6f3c80?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        slug: "new-apartment-canadian-cities",
    },
]


export default function RecentArticles() {
    return (
        <section className="container md:w-11/12 mx-auto px-4 py-24">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl font-bold">Recent Articles & News</h2>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>

            <div className=" grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {articles.map((article) => (
                    <Card key={article.id} className="group overflow-hidden">
                        <CardHeader className="p-0">
                            <Link href={`/`}>
                                <div className="relative  aspect-[4/3] overflow-hidden">
                                    <Image
                                    fill={true}
                                        src={article.image}
                                        alt={article.title}
                                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            </Link>
                        </CardHeader>
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="rounded-full">
                                    {article.category}
                                </Badge>
                                <span className="text-sm text-muted-foreground">
                                    • {article.date}
                                </span>
                            </div>
                            <Link
                                href={`/`}
                                className="group/title"
                            >
                                <h3 className="font-semibold text-lg mb-4 line-clamp-2 group-hover/title:text-primary transition-colors">
                                    {article.title}
                                </h3>
                            </Link>
                        </CardContent>
                        <CardFooter className="px-6 pb-6">
                            <Link
                                href={`/`}
                                className="text-sm font-medium flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                            >
                                Read More
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}