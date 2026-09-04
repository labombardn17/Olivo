import type { Device } from "@/content/devices";

/**
 * Abstract device silhouettes as SVG paths in a 400x500 box. Deliberately
 * generic: a console, an articulated arm, a handpiece, a chair, a bed, a
 * tower. Never a drawing of a trademarked product. Concepts style the fill,
 * stroke and background to their own placeholder treatment.
 */
export const silhouettes: Record<Device["shape"], string> = {
  console: "M120 470 L120 150 Q120 110 160 110 L250 110 Q290 110 290 150 L290 470 Z M150 150 h110 v70 h-110 Z M60 470 h290 v16 h-290 Z",
  arm: "M90 470 h120 v-260 Q210 160 260 160 L330 110 Q350 96 356 118 L300 190 Q262 200 240 230 L240 470 Z M60 470 h180 v16 h-180 Z",
  handpiece: "M170 60 h60 l14 130 h-88 Z M160 190 h80 v130 h-80 Z M180 320 h40 l6 150 h-52 Z",
  chair: "M110 300 h180 v40 h-180 Z M110 340 v130 h20 v-130 Z M270 340 v130 h20 v-130 Z M120 120 h160 q30 0 30 30 v150 h-220 v-150 q0 -30 30 -30 Z",
  bed: "M40 300 h320 v30 h-320 Z M60 330 v140 h16 v-140 Z M324 330 v140 h16 v-140 Z M60 260 h120 v40 h-120 Z",
  tower: "M150 470 L150 90 Q150 60 180 60 h40 Q250 60 250 90 L250 470 Z M170 110 h60 v40 h-60 Z M170 170 h60 v6 h-60 Z M170 190 h60 v6 h-60 Z M100 470 h200 v16 h-200 Z",
};

export function DeviceSilhouette({ shape, className = "", fill = "currentColor" }: { shape: Device["shape"]; className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 400 500" className={className} aria-hidden="true" focusable="false">
      <path d={silhouettes[shape]} fill={fill} fillRule="evenodd" />
    </svg>
  );
}
