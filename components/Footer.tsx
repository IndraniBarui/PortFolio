"use client";
import ResumeComponents from "./resume";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-6">Indrani Barui</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Kolkata, West Bengal
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91 8617565583
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a
                  href="indranibarui9@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  indranibarui9@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:items-end"
          >
            <div className="space-y-6">
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  asChild
                >
                  <a
                    href="https://github.com/githubsouvick7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  asChild
                >
                  <a
                    href="https://linkedin.com/in/mesouvickchakraborty"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                  asChild
                >
                  <a href="mailto:hellosouvickk@gmail.com">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              {/* <ResumeComponents /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
