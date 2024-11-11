import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"


const cities = [
	{
		id: 1,
		name: "Karachi",
		properties: 8,
		image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1544&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		name: "Lahore",
		properties: 2,
		image: "https://images.unsplash.com/photo-1536989231345-2e581accf43b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		name: "Islamabad",
		properties: 1,
		image: "https://images.unsplash.com/photo-1496871455396-14e56815f1f4?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 4,
		name: "Quetta",
		properties: 2,
		image: "https://images.unsplash.com/photo-1506914477279-2a70d901e5d6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 5,
		name: "Multan",
		properties: 3,
		image: "https://images.unsplash.com/photo-1539136831565-c85f368448a3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
]


export default function CityProperties() {
	return (
		<section className="container md:w-11/12 mx-auto px-6 pt-32">
			<div className="text-center mb-10">
				<h2 className="text-3xl font-bold mb-2">Find Properties in These Cities</h2>
				<p className="text-muted-foreground">
					Lorem ipsum dolor sit amet{','} consectetur adipisicing elit.
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

									<Image
										src={city.image}
										alt={`${city.name} cityscape`}
										fill={true}
										className="h-full w-full object-cover"
									/>

									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />

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
	)
};