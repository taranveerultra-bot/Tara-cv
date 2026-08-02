import Image from "next/image";
import Link from "next/link";

const CornerCat = () => (
    <Link
        href="/#about"
        aria-label="Go to About me"
        className="fixed bottom-0 right-0 z-40 w-20 select-none transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground sm:w-28 lg:w-36"
    >
        <Image
            src="/images/cat-corner.png"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 639px) 80px, (max-width: 1023px) 112px, 144px"
            className="h-auto w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
        />
    </Link>
);

export default CornerCat;
