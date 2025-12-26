import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number
  height?: number
  className?: string
  withGradient?: boolean
}

export function Logo({ width = 20, height = 20, className, withGradient = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="font-bold text-slate-900">J</span>
      <div className="relative mx-1" style={{ width: `${width}px`, height: `${height}px` }}>
        <Image
          src="/qubit.png"
          alt="Qubit"
          width={width}
          height={height}
          className={cn(withGradient ? "brightness-0" : "")}
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
