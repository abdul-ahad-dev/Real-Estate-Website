import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function SignInCTA() {
    return (
        <section className="container md:w-11/12 mx-auto px-4 py-24">
            <Card className="bg-secondary-foreground text-white">
                <CardContent className="p-6 sm:p-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 text-center sm:text-left">
                            <CardHeader className="p-0">
                                <CardTitle className="text-2xl font-medium">
                                    Sign in to streamline your search
                                </CardTitle>
                            </CardHeader>
                            <p className="text-sm text-white/80 max-w-md">
                                Save properties, create alerts and keep track of the enquiries you send to agents.
                            </p>
                        </div>
                        <CardFooter className="p-0">
                            <Button
                                className="bg-accent text-accent-foreground hover:bg-accent/90 active:scale-95 transition-all"
                                size="lg"
                            >
                                Sign in or create an account
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </CardFooter>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}