"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  title?: string;
  className?: string;
}>;

export default function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-4">
        {title && (
          <h2 className="mb-6 text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        )}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}