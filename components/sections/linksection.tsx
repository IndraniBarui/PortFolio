"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

export default function LinkPreviewDemo() {
  return (
    <div className="flex justify-center flex-col my-4">
      <p className="text-neutral-500 dark:text-neutral-400">
        I intend to shape my career through challenging and rewarding
        opportunities in esteemed organizations. I aim to grow through
        challenging roles that utilize my technical skills while driving
        meaningful impact. I developed{" "}
        {/* <LinkPreview url="https://jobspring.org" className="font-bold"> */}
         CareerHub
        {/* </LinkPreview> */}
        , a job-hunting platform with advanced filters and location-based
        search, showcasing my full-stack expertise.
        <br />
        Explore more on{" "}
        <LinkPreview
          url="https://github.com/IndraniBarui"
          className="font-bold"
        >
          github
        </LinkPreview>
        .
      </p>
    </div>
  );
}
