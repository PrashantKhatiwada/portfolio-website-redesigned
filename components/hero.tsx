import Link from "next/link"
import { Button } from "@/components/ui/button"
import ParallaxEffect from "@/components/parallax-effect"
import ThreeDModel from "@/components/3d-model"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 opacity-80 z-0">
        <ThreeDModel />
      </div>

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-start text-left space-y-6 max-w-3xl">
          <ParallaxEffect speed={0.03}>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter animate-fade-up">
              <span className="text-gradient">Prashant</span> Khatiwada
            </h1>
          </ParallaxEffect>

          <ParallaxEffect speed={0.05}>
            <p className="text-xl md:text-3xl text-muted-foreground max-w-[700px] animate-fade-up animation-delay-100">
              Transforming data into insight, and insight into action
            </p>
          </ParallaxEffect>

          <ParallaxEffect speed={0.07}>
            <p className="text-lg text-muted-foreground max-w-[600px] animate-fade-up animation-delay-200">
              Turning ideas into interactive experiences.
            </p>
          </ParallaxEffect>

          <ParallaxEffect speed={0.09}>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up animation-delay-300">
              <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
                <Link href="#projects" className="flex items-center gap-2">
                  <span className="relative z-10">View Projects</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 group-hover:translate-y-full transition-transform duration-300"></span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-2 hover:bg-primary/10">
                <a href="/Prashant-Resume.pdf" download className="flex items-center gap-2">
                  Download Resume
                </a>
              </Button>
            </div>
          </ParallaxEffect>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  )
}
