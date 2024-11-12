import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'

export default function HeroSection() {
	return (
		<div>
			<div className="relative h-[75vh] w-full overflow-hidden mb-24">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
					style={{
						backgroundImage: "url('https://images.unsplash.com/photo-1540266947548-74a00563e834?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					}}
				>
					<div className="absolute inset-0 bg-black/20" />
				</div>

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
		</div>
	)
}