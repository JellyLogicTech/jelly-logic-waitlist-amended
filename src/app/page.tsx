import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      {/* Logo */}
      <Image
        src="/JellyLogic.png"
        alt="App Logo"
        width={300}
        height={300}
        className="mb-12"
        priority
      />

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
      <footer className="sticky top-[100vh] flex gap-6 justify-center p-4">
        <Button size="icon" variant="ghost" className="h-16 w-16">
          <Link href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin size={40} /> {/* Big icon */}
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
