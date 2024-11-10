import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"


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


export default function CityProperties() {
	return (
		<section className="container md:w-11/12 mx-auto px-6 pt-32">
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

									<img
										src={city.image}
										alt={`${city.name} cityscape`}
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