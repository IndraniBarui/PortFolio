"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  languages: [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    // {
    //   name: "Java",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    // },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
  ],
  frontend: [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://portfollio-souvick.vercel.app/images/tailwind.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
  ],
};

const SkillCard = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4 w-32 h-32">
            <div className="w-16 h-16 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-lg font-medium text-center">{skill.name}</h3>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillSection = ({ title, skills, inView }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-8 text-center">{title}</h3>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-muted/50"
      id="skills"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Technical Skills
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across
              different domains of software development.
            </p>
          </div>

          <div className="space-y-16">
            <SkillSection
              title="Programming Languages"
              skills={skills.languages}
              inView={inView}
            />
            <SkillSection
              title="Frontend Development"
              skills={skills.frontend}
              inView={inView}
            />
            <SkillSection
              title="Backend Development"
              skills={skills.backend}
              inView={inView}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
