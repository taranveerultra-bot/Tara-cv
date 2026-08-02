import Image from "next/image";

const CornerCat = () => (
    <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 z-40 w-20 select-none sm:w-28 lg:w-36"
    >
        <Image
            src="/images/cat-corner.png"
            alt=""
            width={1254}
            height={1254}
            sizes="(max-width: 639px) 80px, (max-width: 1023px) 112px, 144px"
            className="h-auto w-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]"
        />
    </div>
);

export default CornerCat;
