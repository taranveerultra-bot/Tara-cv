"use client";

import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

const MeditatingTiger = () => {
    const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

    useEffect(() => {
        if (!dotLottie) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateAnimationPreference = () => {
            if (reducedMotion.matches) {
                dotLottie.pause();
            } else {
                dotLottie.setLoop(true);
                dotLottie.play();
            }
        };

        updateAnimationPreference();
        dotLottie.addEventListener("load", updateAnimationPreference);
        reducedMotion.addEventListener("change", updateAnimationPreference);

        return () => {
            dotLottie.removeEventListener("load", updateAnimationPreference);
            reducedMotion.removeEventListener("change", updateAnimationPreference);
        };
    }, [dotLottie]);

    return (
        <div className="aspect-square w-full max-w-xl" role="img" aria-label="A meditating tiger animation">
            <DotLottieReact
                src="/animations/meditating-tiger.lottie"
                autoplay={false}
                loop
                dotLottieRefCallback={setDotLottie}
                className="h-full w-full"
            />
        </div>
    );
};

export default MeditatingTiger;
