import Container from "./Container";
import MeditatingTiger from "./MeditatingTiger";

const TigerInterlude = () => (
    <section className="bg-hero-background">
        <Container>
            <div className="grid items-center gap-8 border-y border-black/15 py-12 sm:py-16 md:grid-cols-[1.2fr_.8fr]">
                <h2 className="max-w-3xl text-4xl font-extrabold leading-[.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                    Always learning.
                    <br />
                    Always improving.
                </h2>
                <div className="mx-auto w-full max-w-xs" aria-label="Meditating tiger">
                    <MeditatingTiger />
                </div>
            </div>
        </Container>
    </section>
);

export default TigerInterlude;
