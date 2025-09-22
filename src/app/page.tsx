import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import FAQ from "@/components/faq";
import BlogsAndCaseStudies from "@/components/blogsandcasestudies";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 🔹 Header */}
      <header className="w-full flex items-center justify-between px-8 py-4">
        {/* Logo (Left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/JellyLogic.png"
            alt="App Logo"
            width={120}
            height={120}
            priority
          />
        </Link>

        {/* Blogs & Case Studies (Right) */}
        <nav className="flex space-x-6 text-lg font-semibold">
          <Link href="/blogs" className="hover:text-[#fd5526]">
            Blogs and Case Studies
          </Link>
        </nav>
      </header>

      {/* 🔹 Main Content */}
      <main className="flex flex-col flex-grow justify-center items-center text-center px-4">
        <div className="mb-8">
          <SplitText className="text-5xl font-semibold tracking-tight text-[#fd5526]">
            Not sure where to start with AI?
          </SplitText>

          <SplitText className="tracking-tight text-xl font-poppins font-semibold text-[#1d1d1d]">
            We're building the simplest way for small businesses to reach their
            goals with automation.
          </SplitText>

          <SplitText className="tracking-tight text-xl font-poppins font-semibold text-[#1d1d1d]">
            Join our waitlist for early access!
          </SplitText>
        </div>

        <WaitlistForm />

        <div className="mt-4">
          <Counter />
        </div>
        <FAQ />

        <div className="mt-8 space-y-6 text-left max-w-3xl mx-auto font-normal text-base leading-relaxed">
          <p>
            The waitlist is growing with founders from a wide range of
            industries such as; food and beverage, e-commerce, retail,
            manufacturing, real estate, fitness, and hospitality.
          </p>

          <p>
            They’re here because what’s out there right now doesn’t help them
            connect AI clearly to the business goals they care about most.
          </p>

          <p>
            Our waitlist is still open, reserve your spot and see AI simplify
            your business.
          </p>
        </div>
        <BlogsAndCaseStudies/>
      </main>

      {/* 🔹 Footer */}
      <footer className="flex gap-6 justify-center p-4">
        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin size={40} />
          </Link>
        </Button>

        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.instagram.com/" target="_blank">
            <FaInstagram size={40} />
          </Link>
        </Button>

        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.facebook.com/" target="_blank">
            <FaFacebook size={40} />
          </Link>
        </Button>
      </footer>
    </div>
  );
}
