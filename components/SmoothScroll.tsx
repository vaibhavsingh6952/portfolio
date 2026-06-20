"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll() {
    useEffect(() => {
        const smoother = ScrollSmoother.create({
            smooth: 1.2,
            effects: false,
            smoothTouch: 0.1,
        });

        return () => {
            smoother.kill();
        };
    }, []);

    return null;
}
