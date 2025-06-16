"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Delostyle studio Pvt Ltd",
    period: "April 2023 - Present",
    description:
      "I specialize in developing and managing end-to-end front-end functionalities for modern web applications. Proficient in Next.js and React, I build interactive, responsive user interfaces with clean and maintainable code using HTML, CSS, and JavaScript (ES6+). I excel in API integration for seamless data handling and leverage Material UI and Tailwind CSS to design visually appealing and consistent components.",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "digitalocean",
      "cloudeflare",
    ],
    achievements: [
      "Developed and managed end-to-end front-end functionalities for various web applications.",
      "Utilized  React and React native to build interactive and responsive user interfaces.",
      "Implemented clean and maintainable code using HTML, CSS, and JavaScript (ES6+).",
      "Handled API integration for seamless data fetching and manipulation.",
      "Using Material UI and Tailwind CSS to create consistent and visually appealing components.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Metavy Opc",
    period: "November 2022 - March 2023",
    description:
      "I specialize in developing and managing end-to-end front-end functionalities for modern web applications. Proficient in Next.js and React, I build interactive, responsive user interfaces with clean and maintainable code using HTML, CSS, and JavaScript (ES6+). I excel in API integration for seamless data handling and leverage Material UI and Tailwind CSS to design visually appealing and consistent components.",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Tailwind Css",
      "digitalocean",
      "cloudeflare",
    ],
    achievements: [
      "Developed and managed end-to-end front-end functionalities for various web applications.",
      "Utilized  React and React native to build interactive and responsive user interfaces.",
      "Implemented clean and maintainable code using HTML, CSS, and JavaScript (ES6+).",
      "Handled API integration for seamless data fetching and manipulation.",
      "Using Material UI and Tailwind CSS to create consistent and visually appealing components.",
    ],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-[1fr,auto] gap-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-4 space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + i * 0.1,
                        }}
                        className="flex items-center gap-2"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="group-hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
