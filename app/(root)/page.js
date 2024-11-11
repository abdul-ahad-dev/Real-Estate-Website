import StatsSection from "@/components/StatsSection";
import CityProperties from "@/components/CityProperties";
import HeroSection from "@/components/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import SignInCTA from "@/components/SignInCTA";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import FeaturedProperty from "@/components/FeaturedProperty";
import TestimonialsSection from "@/components/TestimonialsSection";
import RecentArticles from "@/components/RecentArticles";
import DownloadApp from "@/components/DownloadApp";
import NewsletterSubscription from "@/components/NewsletterSubscription";


export default function Home() {
	return (
		<>

			<FeaturedProperty />


			<CityProperties />


			<WhyWorkWithUs />


			<SignInCTA />


			<FeaturedProperties />


			<HeroSection />


			<StatsSection />


			<TestimonialsSection />


			{/* <RecentArticles /> */}


			<DownloadApp />


			<NewsletterSubscription />

		</>
	);
}
