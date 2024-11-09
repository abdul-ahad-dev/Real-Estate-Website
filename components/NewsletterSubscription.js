"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"


const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

export default function NewsletterSubscription() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <section className="container mx-auto px-4 py-32">
            <div className="max-w-xl mx-auto text-center space-y-8">
                {/* Icon */}
                <div className="mx-auto w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <Send className="h-6 w-6 text-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Stay Up to Date</h2>
                    <p className="text-muted-foreground">
                        Subscribe to our newsletter to receive our weekly feed.
                    </p>
                </div>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex gap-3 max-w-md mx-auto">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormControl>
                                            <Input
                                                placeholder="Your e-mail"
                                                type="email"
                                                {...field}
                                                className="h-12"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" size="lg" className="px-8">
                                Send
                                <Send className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}