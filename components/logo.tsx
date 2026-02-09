import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  width?: number
  height?: number
  className?: string
  withGradient?: boolean
}

const sizeClasses = {
  xs: "w-3 h-3 sm:w-4 sm:h-4",
  sm: "w-4 h-4 sm:w-5 sm:h-5",
  md: "w-5 h-5 sm:w-6 sm:h-6",
  lg: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8",
  xl: "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
}

export function Logo({ size, width, height, className, withGradient = true }: LogoProps) {
  const useResponsive = size && !width && !height
  const sizeClass = size ? sizeClasses[size] : ""
  const pixelWidth = width || 20
  const pixelHeight = height || 20

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="font-bold text-slate-900">J</span>
      <div
        className={cn("relative mx-1", useResponsive && sizeClass)}
        style={!useResponsive ? { width: `${pixelWidth}px`, height: `${pixelHeight}px` } : undefined}
      >
        <Image
          src="/qubit.png"
          alt="Qubit"
          fill={useResponsive}
          width={!useResponsive ? pixelWidth : undefined}
          height={!useResponsive ? pixelHeight : undefined}
          className={cn("object-contain", withGradient ? "brightness-0" : "")}
          priority
        />
        {withGradient && (
          <div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
            style={{
              maskImage: `url('/qubit.png')`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskImage: `url('/qubit.png')`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
            }}
          />
        )}
      </div>
    </span>
  )
}
