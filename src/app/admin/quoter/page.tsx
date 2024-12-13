"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    name: z.string(),
    pieces: z.number().int().positive(),
    filament: z.string(),
    weightGrams: z.number().positive(),
    timeHours: z.number().int().positive(),
    timeMinutes: z.number().int().positive(),
    cleaning: z.string(),
    service: z.string()
});

export default function Quoter() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });
    
    const openPDFWindow = () => {
        const quoterURL = new URL("/admin/quoter/quote", window.location.origin);
        const quoterParams = new URLSearchParams();
        for (const [key, value] of Object.entries(form.getValues())) quoterParams.append(key, value.toString());
        quoterURL.search = quoterParams.toString();
        window.open(quoterURL, "_blank");
    }

    return (
        <div>
            <h1>Quoter</h1>

            <Form {...form}>
                <form onSubmit={() => console.log("submit")}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Project name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Modelo 3d" {...field}></Input>
                                </FormControl>
                                <FormDescription>
                                    The name of the project.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="pieces"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pieces</FormLabel>
                                <FormControl>
                                    <Input placeholder="1" {...field}></Input>
                                </FormControl>
                                <FormDescription>
                                    The amount of pieces in the print.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="filament"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Filament</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Filament"></SelectValue>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="basic">Basic</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                        <SelectItem value="industrial">Industrial</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The Filament the print was printed with.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="weightGrams"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Weight (grams)</FormLabel>
                                <FormControl>
                                    <Input placeholder="1" {...field}></Input>
                                </FormControl>
                                <FormDescription>
                                    The total weight of the print.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="timeHours"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Time (hours)</FormLabel>
                                <FormControl>
                                    <Input placeholder="1" {...field}></Input>
                                </FormControl>
                                <FormDescription>
                                    The total whole hours time of the print.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="timeMinutes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Time (minutes)</FormLabel>
                                <FormControl>
                                    <Input placeholder="1" {...field}></Input>
                                </FormControl>
                                <FormDescription>
                                    The total whole minutes time of the print.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="cleaning"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cleaning</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Hom much cleaning / post processing was done?"></SelectValue>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="none">None</SelectItem>
                                        <SelectItem value="little">Little</SelectItem>
                                        <SelectItem value="medium">Medium</SelectItem>
                                        <SelectItem value="high">High</SelectItem>
                                        <SelectItem value="full">Full</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The post processing that was done to the print.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>

                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Service complexity"></SelectValue>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="basic">Basic</SelectItem>
                                        <SelectItem value="advanced">Advanced</SelectItem>
                                        <SelectItem value="industrial">Industrial</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormDescription>
                                    The complexity of the service offered.
                                </FormDescription>
                            </FormItem>
                        )}
                    ></FormField>
                </form>
            </Form>

            <Button onClick={openPDFWindow}>Quote</Button>
        </div>
    )
}