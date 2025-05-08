import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Gamify Work",
    description: "Revolutionizing repetitive tasks into an interactive experience! Our innovative robotic system empowers users to control industrial automation through engaging games—work smart, play creatively!",
    image: "/gamifywork.jpg",
    techStack: ["C++", "MediaPipe", "Numpy", "React", "Tailwind CSS", "OpenCV"],
    githubUrl: "https://github.com/AnishPandey1944/HACK_NJIT_REPO",
    demoUrl: "https://gamify-work.vercel.app/",
  },
  {
    id: 2,
    title: "Stock Insights",
    description: "Web App that provides advanced stock analysis, sentiment analysis from news articles, and predictions for stock prices using historical data and an LSTM model.",
    image: "/stock-insights.png",
    techStack: ["pandas", "numpy", "beautifulsoup", "sklearn", "streamlit", "tensorflow"],
    githubUrl: "https://github.com/PrashantKhatiwada/stock-insights",
    demoUrl: "/",
  },
  {
    id: 3,
    title: "PulsePoint",
    description:
      "PulsePoint is a crisis response web app built to help users report and track real-time emergencies, combining interactive maps, crowd-sourced data, and smart alerts to improve community safety.",
    image: "/pulsepoint.png",
    techStack: ["React", "tailwind", "node", "express", "mongodb"],
    githubUrl: "https://github.com/PrashantKhatiwada/pulsePoint",
    demoUrl: "/",
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden transition-all duration-500 hover:shadow-lg card-hover group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
