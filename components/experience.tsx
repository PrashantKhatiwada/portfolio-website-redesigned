import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    id: 1,
    title: "Peer Tutor",
    company: "Caldwell University",
    period: "Mar 2025 - Present",
    description:
      "As a Peer Tutor at Caldwell University, I support students in Computer Science and Math courses by simplifying complex concepts, guiding problem-solving strategies, and helping them build academic confidence.",
  },
  {
    id: 2,
    title: "Frontend Developer & Executive Manager Intern",
    company: "Techmandu Computer",
    period: "Sep 2023 - Mar 2024",
    description:
      "As a Frontend Developer & Executive Manager Intern at Techmandu Computer, I developed responsive UI components, improved website performance, and coordinated client communications and project timelines to ensure smooth execution and delivery.",
  },
]

const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science & Business Analytics",
    institution: "Caldwell University",
    period: "2024 - 2028",
    description: "Undergraduate Student Majoring in Computer Science and Business Analytics.",
  },
  {
    id: 2,
    title: "IT & Communications Officer",
    institution: "NSA at Caldwell University",
    period: "2024 - Present",
    description: "Responsible for managing IT resources and communications within the NSA.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6">Work Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <Card key={exp.id} className="relative border-l-4 border-primary">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="relative border-l-4 border-primary">
                  <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-primary"></div>
                  <CardHeader>
                    <CardTitle>{edu.degree || edu.title}</CardTitle>
                    <CardDescription>
                      {edu.institution} | {edu.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
