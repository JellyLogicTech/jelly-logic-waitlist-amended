// import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header: logo left, link right */}
      <header className="flex items-center justify-between px-8 py-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/JellyLogic.png"
            alt="App Logo"
            width={140}
            height={40}
            priority
          />
        </Link>
        <Link
          href="/blogs"
          className="text-base font-semibold text-[#1d1d1d] hover:text-[#fd5526] transition-colors"
        >
          Blogs &amp; Case Studies
        </Link>
      </header>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center text-center px-4">
        <div className="mb-8">
          <SplitText className="text-5xl sm:text-6xl font-semibold tracking-tight text-[#1d1d1d]">
            Not sure where to start with AI?
          </SplitText>

          <SplitText className="mt-6 tracking-tight text-xl font-poppins font-semibold text-[#1d1d1d]">
            We find the tasks AI can do for your business
            <br /> and run them automatically
          </SplitText>

          <SplitText className="mt-6 text-sm text-[#1d1d1d]">
            Join hundreds of other businesses who want to use AI to improve their performance.
          </SplitText>
        </div>

        {/* Pill note (optional, matches screenshot) */}
        <span className="mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold text-[#1d1d1d] ring-1 ring-[#fd5526] bg-[#fd5526]/10">
          Secure your spot on our waitlist for a free AI workflow setup when we launch
        </span>

        {/* Waitlist form */}
        <div className="mt-8 w-full flex justify-center">
          <WaitlistForm />
        </div>

        <div className="mt-4">
          {/* <Counter /> */}
          <FAQ/>
        </div>
      </main>

      {/* Footer social */}
      <footer className="sticky top-[100vh] flex gap-6 justify-center p-4">
        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.linkedin.com/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={40} />
          </Link>
        </Button>
        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
            <FaInstagram size={40} />
          </Link>
        </Button>
        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook">
            <FaFacebook size={40} />
          </Link>
        </Button>
      </footer>
    </div>
  );
}
