import Container from "./Container";
import Section from "./Section";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => (
    <div className="bg-hero-background">
        <Container>
            <Section
                id="testimonials"
                eyebrow="Feedback"
                title="Trusted thinking, clear execution."
                description="Representative feedback structure ready for approved client and professional references."
            >
                <div className="grid gap-5 md:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <figure key={testimonial.name} className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-7">
                            <blockquote className="flex-1 text-lg leading-relaxed">
                                “{testimonial.message}”
                            </blockquote>
                            <figcaption className="mt-8 flex items-center gap-3">
                                <span className="grid h-11 w-11 place-items-center rounded-full bg-foreground text-xs font-bold text-white">
                                    {testimonial.initials}
                                </span>
                                <span>
                                    <span className="block text-sm font-semibold">{testimonial.name}</span>
                                    <span className="block text-sm text-foreground-accent">{testimonial.role}</span>
                                </span>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Section>
        </Container>
    </div>
);

export default Testimonials;
