import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/prashant.jpg"
                alt="Prashant Khatiwada"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg">
            Hello! I'm Prashant, a dedicated web developer with a strong passion for AI and business analytics. I love building responsive, data-driven web applications that are both functional and visually engaging.
            </p>
            <p className="text-lg">
            My tech journey started with a simple curiosity about how websites work—and has grown into a mission to create smart, scalable solutions. Whether it's front-end design or backend logic, I aim to craft digital experiences that truly make a difference.
            </p>
            <p className="text-lg">
            Beyond coding, I'm constantly exploring emerging technologies, diving into datasets, and contributing to meaningful projects that push my skills and impact forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
