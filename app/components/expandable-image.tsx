"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ExpandableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export function ExpandableImage({
  src,
  alt,
  width,
  height,
  className,
}: ExpandableImageProps) {
  const [expanded, setExpanded] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLImageElement>(null);

  const close = useCallback(() => setExpanded(false), []);

  useEffect(() => {
    if (!expanded) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      triggerRef.current?.focus();
    };
  }, [expanded, close]);

  return (
    <>
      <Image
        ref={triggerRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        className={`w-auto cursor-zoom-in ${className ?? ""}`}
        onClick={() => setExpanded(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setExpanded(true);
          }
        }}
      />
      {expanded && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${alt}`}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out backdrop-blur-md bg-gray-100/60"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === "Tab") e.preventDefault();
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg ${
              className ?? ""
            }`}
            onClick={close}
          />
        </div>
      )}
    </>
  );
}
