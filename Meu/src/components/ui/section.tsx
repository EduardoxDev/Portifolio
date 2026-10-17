import { AnimatedContent } from "./animated-content";
import { Container } from "./container";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16 md:py-20">
      <Container>
        <AnimatedContent>
          <h2 className="text-xl font-semibold tracking-tight text-fg">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-secondary">{subtitle}</p>}
          <div className="mt-8">{children}</div>
        </AnimatedContent>
      </Container>
    </section>
  );
}
