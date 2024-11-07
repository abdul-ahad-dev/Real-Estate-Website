'use client';
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const cities = [
  {
    id: 1,
    name: "New York",
    properties: 8,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Chicago",
    properties: 2,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Los Angeles",
    properties: 1,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Miami",
    properties: 2,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Florida",
    properties: 3,
    image: "/placeholder.svg?height=400&width=300",
  },
]

export function CityProperties() {
  return (
    (<section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Find Properties in These Cities</h2>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex w-full space-x-4 pb-4">
          {cities.map((city) => (
            <Card
              key={city.id}
              className="relative overflow-hidden rounded-lg shrink-0 cursor-pointer transition-transform hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-[300px] w-[240px]">
                  {/* Background Image */}
                  <img
                    src={city.image}
                    alt={`${city.name} cityscape`}
                    className="h-full w-full object-cover" />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{city.name}</h3>
                    <p className="text-sm text-white/90">{city.properties} Properties</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="hidden sm:flex" />
      </ScrollArea>
    </section>)
  );
}