"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string({ required_error: "Name is required." }).min(2, "Please enter your full name."),
  email: z.string({ required_error: "Email address is required." }).email("Please enter a valid email address."),
});
type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "" },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const text = await res.text();
      const body = text ? JSON.parse(text) : {};
      if (!res.ok) throw new Error(body?.message || `Request failed: ${res.status}`);
      toast.success(body?.message || "Successfully joined the waitlist!");
      form.reset();
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full flex-col items-center gap-3"
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, type: "spring" }}
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Name"
                  type="text"
                  autoComplete="name"
                  className="h-10 w-64 sm:w-72 px-4 text-center text-sm font-semibold
                             bg-[#CCCC00	]/10 border border-[#CCCC00	]
                             placeholder-[#1d1d1d] text-[#1d1d1d]
                             focus:outline-none focus:ring-2 focus:ring-[#CCCC00	]
                             rounded-lg"
                  aria-label="Full name for waitlist"
                  aria-invalid={!!form.formState.errors.name}
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute pt-1 text-xs text-red-600 dark:text-red-500" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormControl>
                <Input
                  placeholder="Email"
                  type="email"
                  autoComplete="email"
                  className="h-10 w-64 sm:w-72 px-4 text-center text-sm font-semibold
                             bg-[#CCCC00]/10 border border-[#CCCC00]
                             placeholder-[#1d1d1d] text-[#1d1d1d]
                             focus:outline-none focus:ring-2 focus:ring-[#CCCC00]
                             rounded-lg"
                  aria-label="Email address for waitlist"
                  aria-invalid={!!form.formState.errors.email}
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute pt-1 text-xs text-red-600 dark:text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 w-48 rounded-lg font-poppins font-bold
                     border-2 border-[#1d1d1d] text-[#1d1d1d] bg-transparent
                     hover:bg-[#fd5526] hover:border-[#fd5526] hover:text-white
                     transition-colors"
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "JOIN WAITLIST"
          )}
        </Button>
      </motion.form>
    </Form>
  );
}
