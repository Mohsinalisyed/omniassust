"use client";
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { PhaseData } from "../PhaseData";
import SlideCard from "./SlideCard";
import { Fragment, useEffect, useRef, useState } from "react";
import PhaseIcon from "@/app/svg/PhseIcon";
import './style.css'
import DragBox from "@/app/hooks/DragBox";

export const PhaseSliders = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const w = useTransform(x, [0, -width], ["60%", "100%"]);

  useEffect(() => {
    if (!carousel.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (carousel.current) {
        const { scrollWidth, offsetWidth } = carousel.current;
        setWidth(scrollWidth - offsetWidth + entry.contentRect.left);
      }
    });

    resizeObserver.observe(carousel.current);
  }, []);
  return (
    <div className="relative max-w-[1440px] mx-auto overflow-hidden">
      <div className="blur-sides blur--left">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            // @ts-expect-error no type for css vars
            <div key={idx} style={{ "--index": idx }}></div>
          ))}
      </div>
      <div className="blur-sides blur--right">
        {Array(4)
          .fill(0)
          .map((_, idx) => (
            // @ts-expect-error no type for css vars
            <div key={idx} style={{ "--index": idx }}></div>
          ))}
      </div>

      <motion.div className="absolute left-20 2xl:left-30 top-16 w-[calc(100vw-160px)] 2xl:w-[calc(100vw-240px)] h-1.5 bg-[#222] rounded-full">
        <div
          className="absolute  w-2 h-[950px] left-[440px] -top-[470px]  blur-2xl rotate-90 rounded-full"
          style={{
            background: "linear-gradient(93.21deg, #FB491E 0%, #FBCA1E 100%)",
          }}
        />
        <motion.div
          className={"h-full rounded-full"}
          style={{
            width: w,
            background: "linear-gradient(93.21deg, #FB491E 0%, #FBCA1E 100%)",
          }}
        />
      </motion.div>
      <motion.div
        ref={carousel}
        className="flex pl-3 md:pl-30 will-change-transform cursor-grab active:cursor-grabbing"
        drag="x"
        dragTransition={{ bounceDamping: 30 }}
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.2}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ x }}
      >
        <div className="hidden md:block">
          <DragBox />
        </div>
        <div className="flex gap-8 md:gap-[170px] relative">
          {PhaseData.map((phase, index) => (
            <div key={index} className="w-full relative ">
              <div className="flex ml-2 gap-2 mb-[60px] justify-center items-center col-span-2">
                <span className="flex items-center">
                  <PhaseIcon />
                  Phase {index + 1}
                </span>
              </div>

              <Fragment key={index}>
                <div />
                <SlideCard
                  img={phase.img}
                  description={phase.description}
                  heading={phase.heading}
                />
              </Fragment>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
