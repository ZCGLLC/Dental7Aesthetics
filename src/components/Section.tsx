import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

/** Consistent page width + horizontal padding for clean alignment */
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`px-5 md:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
