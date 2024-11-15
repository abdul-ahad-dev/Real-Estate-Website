import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Bath, BedDouble, MapPin, MoveRight, Square } from "lucide-react"
import Image from "next/image"


const properties = [
    {
        id: 1,
        title: "Luxury Family Home",
        address: "1800 19th 78th St",
        price: 395000,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 1,
        area: 400,
    },
    {
        id: 2,
        title: "Skyper Pool Apartment",
        address: "1086 Bloomingdale Ave",
        price: 280000,
        image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 2,
        area: 450,
    },
    {
        id: 3,
        title: "North Dillard Street",
        address: "4530 Bell Shoals Rd",
        price: 250,
        isRent: true,
        image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 2,
        area: 490,
    },
    {
        id: 4,
        title: "Eaton Garth Penthouse",
        address: "7922 18th Ave, Brooklyn",
        price: 180000,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 2,
        area: 450,
    },
    {
        id: 5,
        title: "New Apartment Nice View",
        address: "45 Avenue Q Brooklyn",
        price: 850,
        isRent: true,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1638541420159-cadd0634f08f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 1,
        area: 460,
    },
    {
        id: 6,
        title: "Diamond Manor Apartment",
        address: "7602 20th Ave, Brooklyn",
        price: 259000,
        isFeatured: true,
        image: "https://images.unsplash.com/photo-1621293954908-907159247fc8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        beds: 4,
        baths: 2,
        area: 500,
    },
]


export default function FeaturedProperties() {

    return (
        <div className="container md:w-11/12 mx-auto px-4 py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
                <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>

            <Tabs defaultValue="all" className="mb-8">
                <TabsList className="grid w-full max-w-[600px] mx-auto grid-cols-4">
                    <TabsTrigger value="all">All Properties</TabsTrigger>
                    <TabsTrigger value="villa">Villa</TabsTrigger>
                    <TabsTrigger value="apartments">Apartments</TabsTrigger>
                    <TabsTrigger value="office">Office</TabsTrigger>
                </TabsList>
            </Tabs>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <Card key={property.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <div className="relative h-60">
                                <Image
                                    alt={property.title}
                                    src={property.image}
                                    layout="fill"
                                    objectFit="cover"
                                    className="brightness-90"
                                />
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <Badge
                                        variant={property.isRent ? "secondary" : "default"}
                                        className="cursor-pointer"
                                    >
                                        {property.isRent ? "FOR RENT" : "FOR SALE"}
                                    </Badge>
                                    {property.isFeatured && (
                                        <Badge variant="outline" className="bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600">
                                            FEATURED
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                            <div className="flex items-center text-muted-foreground mb-4">
                                <MapPin className="w-4 h-4 mr-1" />
                                <span className="text-sm">{property.address}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-1">
                                    <BedDouble className="w-4 h-4" />
                                    <span>{property.beds}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Bath className="w-4 h-4" />
                                    <span>{property.baths}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Square className="w-4 h-4" />
                                    <span>{property.area} sqft</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 border-t">
                            <div className="w-full flex items-center justify-between">
                                <div className="font-semibold">
                                    ${property.price.toLocaleString()}
                                    {property.isRent && <span className="text-sm">/month</span>}
                                </div>
                                <Button variant="ghost" size="sm" className="active:scale-95">
                                    View Details
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            

            <div className="flex justify-center mt-10">
                <Button variant="outline" className="gap-2 bg-accent hover:text-accent hover:bg-foreground transition-colors active:scale-95">
                    See All Listing
                    <MoveRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
};