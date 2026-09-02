"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useState } from "react";

const MeditatingTiger = () => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const updateAnimationPreference = () => setShouldAnimate(!reducedMotion.matches);

        updateAnimationPreference();
        reducedMotion.addEventListener("change", updateAnimationPreference);

        return () => reducedMotion.removeEventListener("change", updateAnimationPreference);
    }, []);

    return (
        <div className="aspect-square w-full max-w-xl" role="img" aria-label="A meditating tiger animation">
            <DotLottieReact
                src="/animations/meditating-tiger.lottie"
                autoplay={shouldAnimate}
                loop={shouldAnimate}
                className="h-full w-full"
            />
        </div>
    );
};

export default MeditatingTiger;
