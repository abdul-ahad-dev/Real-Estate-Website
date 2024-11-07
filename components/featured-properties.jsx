'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bath, BedDouble, MapPin, MoveRight, Square } from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Luxury Family Home",
    address: "1800 19th 78th St",
    price: 395000,
    isFeatured: true,
    image: "/placeholder.svg?height=400&width=600",
    beds: 4,
    baths: 1,
    area: 400,
  },
  {
    id: 2,
    title: "Skyper Pool Apartment",
    address: "1086 Bloomingdale Ave",
    price: 280000,
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
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
    image: "/placeholder.svg?height=400&width=600",
    beds: 4,
    baths: 2,
    area: 500,
  },
]

export function FeaturedProperties() {
  return (
    (<div className="container mx-auto px-4 py-16">
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
            <CardHeader className="p-0 relative">
              <img
                alt={property.title}
                className="w-full h-[240px] object-cover"
                src={property.image} />
              <div className="absolute top-4 left-4 flex gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    property.isRent
                      ? "bg-green-600 text-white"
                      : "bg-primary text-primary-foreground"
                  }`}>
                  {property.isRent ? "FOR RENT" : "FOR SALE"}
                </span>
                {property.isFeatured && (
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-500 text-white">
                    FEATURED
                  </span>
                )}
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
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="outline" className="gap-2">
          See All Listing
          <MoveRight className="w-4 h-4" />
        </Button>
      </div>
    </div>)
  );
}