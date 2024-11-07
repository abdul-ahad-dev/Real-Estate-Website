import FilterBar from "@/components/FilterBar";
import { Button } from "@/components/ui/button";
import { ArrowRight, House, HousePlus, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Home() {

  const findProperty = ['', '', '', '', ''];
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


      <div className="md:w-11/12 mx-auto py-28">
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
      </div>


      <div className="md:w-11/12 mx-auto pb-24">
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
            <h1 className="text-white text-xl font-medium mb-2">
              Sign in to streamline your search
            </h1>
            <p className="text-white text-sm">
              Save properties, create alerts and keep track of the enquiries you send to agents.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Button className="bg-accent text-foreground hover:text-accent">
              Sign in or create an account <ArrowRight />
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}
