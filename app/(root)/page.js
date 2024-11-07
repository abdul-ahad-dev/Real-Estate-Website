import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ArrowRight, House, HousePlus, ShieldCheck, Bath, BedDouble, MapPin, MoveRight, Square } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const cities = [
    {
      id: 1,
      name: "Karachi",
      properties: 8,
      image: "https://plus.unsplash.com/premium_photo-1670992114662-1f102c1cec79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Lahore",
      properties: 2,
      image: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Islamabad",
      properties: 1,
      image: "https://plus.unsplash.com/premium_photo-1674309438579-587b58d8486e?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Quetta",
      properties: 2,
      image: "https://plus.unsplash.com/premium_photo-1680284197425-4bd125d75cab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Multan",
      properties: 3,
      image: "https://plus.unsplash.com/premium_photo-1681746821512-c3a8fa6cb5e5?q=80&w=1358&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]
  const workUsSection = [
    {
      title: "Wide Range of Properties",
      description: "We offer expert legal help for all related property",
      icon: <HousePlus size={80} />
    },
    {
      title: "Buy or Rent Homes",
      description: "We sell your home at the best market price and very quickly as well.",
      icon: <House size={80} />
    },
    {
      title: "Trusted by Thousands",
      description: "We offer you free consultancy to get a loan for your new home.",
      icon: <ShieldCheck size={80} />
    },
  ]
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

  return (
    <>
      <div className="relative flex flex-col">
        <div
          className="relative w-full min-h-[720px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="text-center z-10">
              <div className="text-gray-200 flex flex-wrap justify-center gap-4 mb-4">
                <span>5 Beds</span>
                <span>2 Baths</span>
                <span>180 sqft</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-wide">
                Office Space at<br />Northwest
              </h1>
              <h2 className="text-lg text-white font-medium mb-4 sm:mb-6">
                $250 <span className="text-sm">/month</span>
              </h2>
              <div className="flex justify-center p-2">
                <Button className="bg-accent text-black font-medium hover:cursor-pointer hover:bg-accent/90 flex items-center">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto absolute -bottom-12">
          <FilterBar />
        </div>
      </div>


      {/* <div className="md:w-11/12 mx-auto py-28">
        <h1 className="text-4xl my-2 px-4 font-semibold text-center">Find Properties in These Cities</h1>
        <p className="text-sm text-center px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="flex justify-evenly flex-wrap gap-6 py-10">
          {findProperty.map((item, index) => (
            <figure key={index} className="relative max-w-sm transition-all duration-300 cursor-pointer">
              <div className="w-[200px] h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1730812393789-a7d15960029d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Image description"
                  fill={true}
                  className="rounded-xl brightness-75"
                />
              </div>
              <figcaption className="absolute px-6 text-xl text-white top-6">
                <p className="font-semibold">Karachi</p>
                <p className="text-sm">2 Properties</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div> */}

      <section className="container mx-auto px-6 pt-32">
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
                className="relative overflow-hidden rounded-lg shrink-0 cursor-pointer transition-transform hover:scale-105"
              >
                <CardContent className="p-0">
                  <div className="relative h-[300px] w-[240px]">
                    {/* Background Image */}
                    <img
                      src={city.image}
                      alt={`${city.name} cityscape`}
                      className="h-full w-full object-cover"
                    />
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
      </section>


      <div className="md:w-11/12 mx-auto py-24">
        <h1 className="text-4xl my-2 px-4 font-semibold text-center">
          Why You Should Work With Us
        </h1>
        <p className="text-sm text-center px-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="md:w-11/12 mx-auto flex justify-evenly flex-wrap py-6">
          {workUsSection.map((item, index) => (
            <div key={index} className="w-1/3 p-4">
              <div className="mx-auto flex justify-center">
                {item.icon}
              </div>
              <h1 className="mt-4 text-xl md:text-2xl font-semibold text-center">{item.title}</h1>
              <h1 className="mt-2 text-xs md:text-sm text-center text-gray-800">{item.description}</h1>
            </div>
          ))}

        </div>


      </div>


      <div className="pb-24">
        <div className="md:w-11/12 mx-auto py-16 px-6 flex justify-between items-center rounded-xl bg-secondary-foreground">
          <div className="w-1/2 px-6">
            <h1 className="text-white text-2xl font-medium mb-2">
              Sign in to streamline your search
            </h1>
            <p className="text-white text-xs">
              Save properties, create alerts and keep track of the enquiries you send to agents.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Button className="bg-accent text-foreground hover:text-accent active:scale-95">
              Sign in or create an account <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
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
                  className="w-full h-[240px] object-cover brightness-50"
                  src={property.image}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold cursor-pointer ${property.isRent
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-primary text-primary-foreground"
                      }`}
                  >
                    {property.isRent ? "FOR RENT" : "FOR SALE"}
                  </span>
                  {property.isFeatured && (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white">
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



      <div className="relative h-[75vh] w-full overflow-hidden mb-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: "url('https://plus.unsplash.com/premium_photo-1676823570926-238f23020786?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
              Discover a place you&apos;ll love to live
            </h1>
            <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
              quam, feugiat vitae.
            </p>
            <Button
              className="bg-accent text-foreground mx-auto hover:bg-foreground hover:text-accent transition-colors active:scale-95 flex items-center "
              size="lg"
            >
              View Properties
              <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}
