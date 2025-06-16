"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code2, FileText, Sparkles } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import LinkPreviewDemo from "./linksection";
import Link from "next/link";
import ResumeComponents from "../resume";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Hero() {
  const words = [
    { text: "Build." },
    { text: "Design." },
    { text: "Create." },
    { text: "Innovate." },
  ];

  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center relative overflow-hidden">
      <div className="flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="container relative grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-sm md:text-base text-muted-foreground">
                <Code2 className="h-5 w-5" />
                <span>Welcome to my digital space</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight flex flex-col items-start gap-4">
                  Hi, I'm
                  <span className="text-primary relative">
                   Indrani Barui
                    <Sparkles className="absolute -top-8 -right-8 h-6 w-6 text-yellow-500 animate-pulse" />
                  </span>
                </h1>
                <div className="h-16">
                  <TypewriterEffect
                    words={words}
                    className="text-2xl md:text-3xl"
                  />
                </div>
              </div>

              <LinkPreviewDemo />

              <div className="flex gap-4">
                <Button size="lg" variant="outline">
                  <Link className="flex items-center gap-2" href={"#projects"}>
                    View Projects
                    <motion.span
                      className="ml-2"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </motion.span>
                  </Link>
                </Button>
                <ResumeComponents />
              </div>
            </div>
            <div className="flex justify-center items-center my-6">
              <div className="h-[300px]">
                <img
                  className="object-cover h-full"
                  src="/image/Indrani.jpg"
                  alt="Hero Image"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
