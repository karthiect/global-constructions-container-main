import React, { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
  titleClassName?: string;
}

export const Section = ({
  id,
  children,
  className,
  containerClassName,
  title,
  subtitle,
  dark = false,
  centered = false,
  titleClassName
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "section-padding scroll-mt-24",
        dark ? "bg-navy-gradient text-white" : "bg-white text-navy",
        className
      )}
    >
      <div className={cn("max-w-7xl mx-auto", containerClassName)}>
        {(title || subtitle) && (
          <div className={cn("mb-16", centered ? "text-center" : "max-w-xl")}>
            {subtitle && (
              <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className={cn(
                "text-4xl md:text-5xl font-bold",
                dark ? "text-white" : "text-navy",
                titleClassName
              )}>
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
