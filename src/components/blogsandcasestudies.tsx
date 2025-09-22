// import Image from "next/image";
// import Link from "next/link";

// type Post = {
//   id: number;
//   title: string;
//   excerpt: string;
//   href: string;
//   site: string;
//   imageSrc: string;
//   imageAlt: string;
// };

// const POSTS: Post[] = [
//   {
//     id: 1,
//     title: "Why Financial Planning Matters More Than Ever?",
//     excerpt:
//       "In today’s fast-paced world, financial planning is not just for the wealthy—it’s essential for everyone. Planning your finances helps you set realistic goals, reduce stress, and build a secure future.",
//     href: "/blogs/why-financial-planning-matters",
//     site: "www.reallygreatsite.com",
//     imageSrc: "/blog-sample.png",
//     imageAlt: "Charts and graphs with a pen on a desk",
//   },
//   {
//     id: 2,
//     title: "Why Financial Planning Matters More Than Ever?",
//     excerpt:
//       "In today’s fast-paced world, financial planning is not just for the wealthy—it’s essential for everyone. Planning your finances helps you set realistic goals, reduce stress, and build a secure future.",
//     href: "/blogs/why-financial-planning-matters",
//     site: "www.reallygreatsite.com",
//     imageSrc: "/blog-sample.png",
//     imageAlt: "Charts and graphs with a pen on a desk",
//   },
//   {
//     id: 3,
//     title: "Why Financial Planning Matters More Than Ever?",
//     excerpt:
//       "In today’s fast-paced world, financial planning is not just for the wealthy—it’s essential for everyone. Planning your finances helps you set realistic goals, reduce stress, and build a secure future.",
//     href: "/blogs/why-financial-planning-matters",
//     site: "www.reallygreatsite.com",
//     imageSrc: "/blog-sample.png",
//     imageAlt: "Charts and graphs with a pen on a desk",
//   },
//   {
//     id: 4,
//     title: "Why Financial Planning Matters More Than Ever?",
//     excerpt:
//       "In today’s fast-paced world, financial planning is not just for the wealthy—it’s essential for everyone. Planning your finances helps you set realistic goals, reduce stress, and build a secure future.",
//     href: "/blogs/why-financial-planning-matters",
//     site: "www.reallygreatsite.com",
//     imageSrc: "/blog-sample.png",
//     imageAlt: "Charts and graphs with a pen on a desk",
//   },
// ];

// export default function BlogsAndCaseStudies() {
//   return (
//     <div className="w-full">
//       {/* Section container */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
//         {/* Heading */}
//         <h1 className="text-center text-3xl md:text-4xl font-semibold">
//           Blogs and Case Studies
//         </h1>

//         {/* Carousel */}
//         <div className="mt-8 overflow-x-auto scrollbar-hide">
//           <div className="flex space-x-6 snap-x snap-mandatory scroll-smooth">
//             {POSTS.map((post) => (
//               <article
//                 key={post.id}
//                 className="flex-shrink-0 w-72 md:w-80 snap-start bg-white rounded-xl shadow hover:shadow-lg transition p-4"
//               >
//                 {/* Image */}
//                 <Link href={post.href} className="block">
//                   <div className="relative w-full h-40 md:h-44 lg:h-48 rounded-md overflow-hidden">
//                     <Image
//                       src={post.imageSrc}
//                       alt={post.imageAlt}
//                       fill
//                       className="object-cover"
//                       sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
//                       priority={post.id === 1}
//                     />
//                   </div>
//                 </Link>

//                 {/* Text */}
//                 <div className="mt-3">
//                   <Link href={post.href} className="block">
//                     <h3 className="font-semibold leading-snug text-lg">
//                       {post.title}
//                     </h3>
//                   </Link>

//                   <p className="mt-2 text-sm leading-relaxed text-black/80 line-clamp-3">
//                     {post.excerpt}
//                   </p>
//                 </div>

//                 {/* Footer row */}
//                 <div className="mt-3 flex items-center justify-between text-sm font-medium">
//                   <Link href={post.href} className="underline">
//                     Read More
//                   </Link>
//                   <span className="text-black/80">{post.site}</span>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  href: string;
  site: string;
  imageSrc: string;
  imageAlt: string;
};

const POSTS: Post[] = [
  {
    id: 1,
    title: "Why Financial Planning Matters More Than Ever?",
    excerpt:
      "In today’s fast-paced world, financial planning is not just for the wealthy—it’s essential for everyone. Planning your finances helps you set realistic goals, reduce stress, and build a secure future.",
    href: "/blogs/why-financial-planning-matters",
    site: "www.reallygreatsite.com",
    imageSrc: "/blog-sample.png",
    imageAlt: "Charts and graphs with a pen on a desk",
  },
  {
    id: 2,
    title: "Another Blog",
    excerpt: "Short excerpt...",
    href: "/blogs/another",
    site: "www.reallygreatsite.com",
    imageSrc: "/blog-sample.png",
    imageAlt: "Charts and graphs with a pen on a desk",
  },
  {
    id: 3,
    title: "Third Blog",
    excerpt: "Short excerpt...",
    href: "/blogs/third",
    site: "www.reallygreatsite.com",
    imageSrc: "/blog-sample.png",
    imageAlt: "Charts and graphs with a pen on a desk",
  },
  {
    id: 4,
    title: "Fourth Blog",
    excerpt: "Short excerpt...",
    href: "/blogs/fourth",
    site: "www.reallygreatsite.com",
    imageSrc: "/blog-sample.png",
    imageAlt: "Charts and graphs with a pen on a desk",
  },
];

export default function BlogsAndCaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 320; // adjust to your card width
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full relative">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Heading */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold mb-8">
          Blogs and Case Studies
        </h1>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        >
          →
        </button>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex space-x-6 snap-x snap-mandatory">
            {POSTS.map((post) => (
              <article
                key={post.id}
                className="flex-shrink-0 w-72 md:w-80 snap-start bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                {/* Image */}
                <Link href={post.href} className="block">
                  <div className="relative w-full h-40 md:h-44 lg:h-48 rounded-md overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      priority={post.id === 1}
                    />
                  </div>
                </Link>

                {/* Text */}
                <div className="mt-3">
                  <Link href={post.href} className="block">
                    <h3 className="font-semibold leading-snug text-lg">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-sm leading-relaxed text-black/80 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer row */}
                <div className="mt-3 flex items-center justify-between text-sm font-medium">
                  <Link href={post.href} className="underline">
                    Read More
                  </Link>
                  <span className="text-black/80">{post.site}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

