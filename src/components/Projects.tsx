import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Студия 28 м²",
    category: "Студия",
    location: "Этажи 3–12 · от 2 850 000 ₽",
    year: "Сдача 2026",
    image: "https://cdn.poehali.dev/projects/d8d5e7a5-0a92-4cba-afea-56ddbd0833d0/files/a490053f-aafe-4a2a-a494-029d838a176f.jpg",
  },
  {
    id: 2,
    title: "1-комнатная 42 м²",
    category: "1-комнатная",
    location: "Этажи 2–14 · от 4 200 000 ₽",
    year: "Сдача 2026",
    image: "https://cdn.poehali.dev/projects/d8d5e7a5-0a92-4cba-afea-56ddbd0833d0/files/5a662acc-f254-429e-8630-89e873771069.jpg",
  },
  {
    id: 3,
    title: "2-комнатная 62 м²",
    category: "2-комнатная",
    location: "Этажи 2–14 · от 5 900 000 ₽",
    year: "Сдача 2026",
    image: "https://cdn.poehali.dev/projects/d8d5e7a5-0a92-4cba-afea-56ddbd0833d0/files/98bb22c9-3ddb-4912-b96e-99c6017cb809.jpg",
  },
  {
    id: 4,
    title: "3-комнатная 85 м²",
    category: "3-комнатная",
    location: "Этажи 4–14 · от 7 800 000 ₽",
    year: "Сдача 2026",
    image: "https://cdn.poehali.dev/projects/d8d5e7a5-0a92-4cba-afea-56ddbd0833d0/files/d412eca6-6757-4a6e-837f-d369905673a5.jpg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Выбор планировок</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Квартиры в ЖК «Друг»</h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Узнать о наличии
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {project.category} · {project.location}
                  </p>
                </div>
                <span className="text-muted-foreground/60 text-sm">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}