"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import DefaultLoader from "@/components/default_loader"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { addToWaitlist } from "@/actions/sendWelcomeEmail"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Check, Copy, Link } from "lucide-react"
import { AppConfig } from "@/lib/config"

const FormSchema = z.object({
    email: z.string().email(),

    name: z.string(),
    employmentStatus: z.string(),
    linkedin: z.string(),
    refId: z.string(),
})

export default function FormClient(
    { refId, config }:
        { refId: string, config: AppConfig },
) {
    const [isLoading, setIsLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [newRefId, setNewRefId] = useState("")

    const employedOptions = ["Self Employed", "Employed", "Contractor", "Part Time", "Not Employed"]

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            employmentStatus: "Employed",
            linkedin: "",
            refId: refId,
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // send the request
        setIsLoading(true)
        try {
            const id = await addToWaitlist(
                data.email,
                data.name,
                data.employmentStatus,
                data.linkedin,
                refId,
            )
            setNewRefId(id)
            setIsOpen(true)
            form.reset({ email: "", name: "", employmentStatus: "Employed", linkedin: "", refId: refId })
        } catch (e) {
            toast({
                variant: "destructive",
                title: "There was an error",
                description: <p>Please try again. If this error persists, then please contact us as support@aithing.co</p>
            })

        }
        setIsLoading(false)
    }

    const setClipboard = async () => {
        await navigator.clipboard.writeText(`${config.url}?refId=${newRefId}`);
        toast({
            title: "Successfully copied referal link to the clipboard.",
        })
    }

    return <div className="w-full space-y-4">
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Successfully Enlisted!</AlertDialogTitle>
                    <AlertDialogDescription asChild>
                        <div className="space-y-2">
                            <p>You have successfully joined the waitlist! An email confirming your enrollment will be sent to your inbox shortly.</p>
                            <p>Feel free to refer your friends and connections to boost your spot in the waitlist!</p>
                            <div className="flex items-center space-x-4">
                                <p>My Referal ID:</p>
                                <p className="bg-slate-200 rounded-md px-4 py-2 text-slate-500 text-lg">{newRefId}</p>
                            </div>
                        </div>
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Close</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setClipboard()}>
                        <div className="flex items-center space-x-2">
                            <Copy size={18} />
                            <p>Copy Referal Link</p>
                        </div>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        <div className="w-full mx-auto">
            <Card className="w-full max-w-md mx-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <CardContent className="grid gap-4 pt-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            <div className="flex items-start space-x-1">
                                                <p className="text-red-400">*</p>
                                                <p>Email</p>
                                            </div>
                                        </FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="me@email.com" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            A good email to keep you updated. We will not use this Email for any marketing purpose.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center space-x-2">
                                <div className="w-full"><Separator /></div>
                                <p className="text-sm font-light opacity-30">Optional</p>
                                <div className="w-full"><Separator /></div>
                            </div>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="name" placeholder="(My name)" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="employmentStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Employment Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Employed" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {employedOptions.map((item, i) => <SelectItem key={i} value={item}>{item}</SelectItem>)}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="linkedin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>LinkedIn Profile</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="https://linkedin.com/..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="refId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Referal ID</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="<referal code>" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                {isLoading ? <div className="pr-2"><DefaultLoader /></div> : <></>}
                                Join The Waitlist
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    </div>
}