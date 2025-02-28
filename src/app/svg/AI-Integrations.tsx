"use client";

import React, { useRef } from "react";
import { AnimatedBeam } from "../components/AnimatedBeam/AnimatedBeam";
import img from '../assets/images/ai-integration.png'
import Image from "next/image";
export default function Index() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-full w-full max-w-[32rem] mx-auto items-center justify-center overflow-hidden p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <div ref={div1Ref}></div>
          <div ref={div2Ref} className="p-4"></div>
          <div ref={div3Ref} className="p-4"></div>
          <div ref={div4Ref} className="p-4"></div>
          <div ref={div5Ref} className="p-4"></div>
        </div>
        <div className="flex flex-col justify-center">
          <div ref={div6Ref} className="h-16 w-16">
            <Image src={img}  alt=""/>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div ref={div7Ref}></div>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        gradientStartColor="#00ac47"
        gradientStopColor="#4fcc5d"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        gradientStartColor="#006ae3"
        gradientStopColor="#1194ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        gradientStartColor="#d948ae"
        gradientStopColor="#5b60ff"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
    </div>
  );
}
