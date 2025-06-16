"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";
import { PinContainer } from "../ui/3d-pin";
import Image from "next/image";

// const projects = [
//   {
//     name: "Snapdeal Clone",
//     link: "https://snapdeal-clone-pi.vercel.app/",
//     technologies: ["ReactJs", "CSS", "Bootstrap", "HTML "],
//     description:
//       " Snapdeal Clone is a feature-rich web application that replicates the popular e-commerce platform Snapdeal, offering a seamless online shopping experience.",
//     github: "https://github.com/githubsouvick7/Snapdeal_Clone.git",
//   },
//   {
//     name: "YouTube Clone",
//     link: "https://youtube-clone-nine-nu.vercel.app/",
//     technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML "],
//     description:
//       " Experience the ultimate video-sharing platform with our React-based YouTube clone. Seamlessly watch, upload, and engage with content in a familiar and dynamic user interface..",
//     github: "https://github.com/githubsouvick7/Youtube-Clone",
//   },
//   {
//     name: "IMDB Clone",
//     link: "https://imdb-clone-in-react.netlify.app/",
//     technologies: ["ReactJs", "CSS", "Bootstrap", "HTML "],
//     description:
//       "This is an IMDB (Internet Movie Database) clone, a web application that allows users to browse and search for movies, view movie details. The application aims to replicate the core features and functionality of the popular IMDB website.",
//     github: "https://github.com/githubsouvick7/IMDB_CLONE.git",
//   },
//   {
//     name: "Movie Search website",
//     link: "https://monumental-kangaroo-d68116.netlify.app/",
//     technologies: ["ReactJs", "CSS", "Bootstrap", "HTML "],
//     description:
//       "As the name suggests, this cloning project aims to create a Movie search website using React. Where you can find more information about your movie.",
//     github:
//       "https://github.com/githubsouvick7/Movie-Search-Website-Using-React.git",
//   },
//   {
//     name: "Reddit Clone",
//     link: "https://reddit-clone-in-react-by-souvick.netlify.app/",
//     technologies: ["ReactJs", "CSS", "Bootstrap", "HTML "],
//     description:
//       "As the name suggests, this clone project aims to create a Reddit clone using React.",
//     github: "https://github.com/githubsouvick7/Reddit-Clone-Using-React.git",
//   },
//   {
//     name: "Advance Notes Application",
//     link: "https://velvety-moxie-cbe2fc.netlify.app/",
//     technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML "],
//     description:
//       "Advance notes App for creating note with search functionality",
//     github: "https://github.com/githubsouvick7/JsToDoList.git",
//   },
//   {
//     name: "Coding site template engine",
//     link: "https://code-with-us-souvick.netlify.app/",
//     technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML "],
//     description: "Coding school template using HTML, CSS, Telwind, Telblocks ",
//     github: "https://github.com/githubsouvick7/CodeWithUs-website.git",
//   },
//   {
//     name: "booking site template website",
//     link: "https://hotelbooking-by-souvick.netlify.app",
//     technologies: ["CSS", "Tailwind CSS", "HTML "],
//     description: "Hotel booking design clone project",
//     github: "https://github.com/githubsouvick7/Hotel-Booking-Desgin.git",
//   },
//   {
//     name: "Tesla Clone",
//     link: "https://fantastic-clafoutis-887f52.netlify.app/",
//     technologies: ["CSS", "Tailwind CSS", "HTML "],
//     description: "Tesla Clone using HTML, CSS and Bootstrap",
//     github: "https://github.com/githubsouvick7/Tesla-Clone-.git",
//   },
// ];

const projects = [
  {
    title: "CareerHub",
    description:
      "A modern job search platform that connects talented professionals with their dream careers. Features include advanced job filtering, company profiles, application tracking, and real-time notifications.",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    technologies: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind Css",
      "digitalocean",
      "cloudeflare",
    ],
    github: "https://github.com/IndraniBarui/CareerHub",
    live: "https://jobspring.org/",
    stars: 64,
  },
  {
    title: "CodeBlog",
    description:
      "CodeBlog – Developed a personal blogging platform to share code snippets and programming tutorials. Built with React and Node.js, featuring syntax highlighting, markdown support, and a clean, developer-friendly UI.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80",
    technologies: ["Next js", "Tailwind Css", "HTML"],
    github: "https://github.com/IndraniBarui/CodeBlog",
    live: "https://code-blog-d534-h2rp3kpy0-indranis-projects-4a1af97c.vercel.app/",
    stars: 45,
  },
  {
    title: "PinRest",
    description:
      "Pinterest Clone – Built a fully responsive Pinterest-style image-sharing app using React and Node.js. Implemented features like image upload, user authentication, infinite scroll, and dynamic grid layout to mimic the original platform’s UI and UX.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML"],
    github: "https://github.com/IndraniBarui/PinrestFrontend",
    live: "https://youtube-clone-nine-nu.vercel.app/",
    stars: 52,
  },
  {
    title: "Recipe Finder",
    description:
      "Recipe Finder – Created a user-friendly web app to search and discover recipes based on ingredients or meal types. Built with React and integrated with a public recipe API to display detailed cooking instructions, images, and nutritional info.",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    technologies: ["ReactJs", "CSS", "Bootstrap", "HTML"],
    github: "https://github.com/IndraniBarui/RecipeFinder",
    live: "https://recipe-finder-mu-six.vercel.app/",
    stars: 38,
  },
  {
    title: "E-commerce app",
    description:
      "E-commerce App – Designed and developed a full-stack e-commerce application with user authentication, product listings, cart management, and secure checkout.",
    image:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80",
    technologies: ["React Native", "Node js", "MongoDb", "Express js"],
    github:
      "https://github.com/IndraniBarui/NewApp",
    // live: "https://monumental-kangaroo-d68116.netlify.app/",
    stars: 41,
  },
  // {
  //   title: "Reddit Clone",
  //   description:
  //     "As the name suggests, this clone project aims to create a Reddit clone using React.",
  //   image:
  //     "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&q=80",
  //   technologies: ["ReactJs", "CSS", "Bootstrap", "HTML"],
  //   github: "https://github.com/githubsouvick7/Reddit-Clone-Using-React.git",
  //   live: "https://reddit-clone-in-react-by-souvick.netlify.app/",
  //   stars: 35,
  // },
  // {
  //   title: "Advance Notes Application",
  //   description:
  //     "Advance notes App for creating note with search functionality",
  //   image:
  //     "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
  //   technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML"],
  //   github: "https://github.com/githubsouvick7/JsToDoList.git",
  //   live: "https://velvety-moxie-cbe2fc.netlify.app/",
  //   stars: 29,
  // },
  // {
  //   title: "Coding Site Template Engine",
  //   description: "Coding school template using HTML, CSS, Telwind, Telblocks",
  //   image:
  //     "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
  //   technologies: ["ReactJs", "CSS", "Tailwind CSS", "HTML"],
  //   github: "https://github.com/githubsouvick7/CodeWithUs-website.git",
  //   live: "https://code-with-us-souvick.netlify.app/",
  //   stars: 33,
  // },
  // {
  //   title: "Hotel Booking Template",
  //   description: "Hotel booking design clone project",
  //   image:
  //     "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  //   technologies: ["CSS", "Tailwind CSS", "HTML"],
  //   github: "https://github.com/githubsouvick7/Hotel-Booking-Desgin.git",
  //   live: "https://hotelbooking-by-souvick.netlify.app",
  //   stars: 31,
  // },
  // {
  //   title: "Tesla Clone",
  //   description: "Tesla Clone using HTML, CSS and Bootstrap",
  //   image:
  //     "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
  //   technologies: ["CSS", "Tailwind CSS", "HTML"],
  //   github: "https://github.com/githubsouvick7/Tesla-Clone-.git",
  //   live: "https://fantastic-clafoutis-887f52.netlify.app/",
  //   stars: 37,
  // },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div className="w-full flex items-center justify-center">
              <PinContainer title={project.title} href={project.live}>
                <div className="flex basis-full flex-col justify-start gap-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] ">
                  <div className="flex flex-col w-full h-[150px] object-contain">
                    <img
                      src={project?.image}
                      alt={project.title}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold capitalize text-base ">
                      {project.title}
                    </h3>
                    <div className="text-xs !m-0 !p-0 font-normal">
                      <span className="text-slate-500 ">
                        {project.description}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 my-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="group-hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
