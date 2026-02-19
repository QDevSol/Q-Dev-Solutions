import Image from "next/image";

const technologies = [
  // Cloud
  { title: "AWS", name: "AWS", logo: "/stack/aws.svg" },
  {
    title: "Google Cloud",
    name: "Google Cloud",
    logo: "/stack/google-cloud.svg",
  },
  { title: "Azure", name: "Azure", logo: "/stack/azure.svg" },
  { title: "Vercel", name: "Vercel", logo: "/partners/vercel-white.svg" },
  // Frontend
  { title: "React", name: "React", logo: "/stack/react.svg" },
  { title: "Next.js", logo: "/stack/nextjs.svg" },
  { title: "Vue.js", name: "Vue.js", logo: "/stack/vue.svg" },
  { title: "Angular", name: "Angular", logo: "/stack/angular.svg" },
  {
    title: "Tailwind CSS",
    name: "Tailwind CSS",
    logo: "/stack/tailwindcss.svg",
  },
  { title: "TypeScript", name: "TypeScript", logo: "/stack/typescript.svg" },
  { title: "JavaScript", name: "JavaScript", logo: "/stack/javascript.svg" },
  // Backend
  { title: "Node.js", logo: "/stack/nodejs.svg" },
  { title: "Python", name: "Python", logo: "/stack/python.svg" },
  { title: "Go", name: "Go", logo: "/stack/go.svg" },
  { title: "Java", name: "Java", logo: "/stack/java.svg" },
  { title: "PHP", name: "PHP", logo: "/stack/php.svg" },
  { title: "C#", name: "C#", logo: "/stack/csharp.svg" },
  { title: ".NET", name: ".NET", logo: "/stack/dotnet.svg" },
  { title: "GraphQL", name: "GraphQL", logo: "/stack/graphql.svg" },
  // CMS
  { title: "WordPress", name: "WordPress", logo: "/stack/wordpress.svg" },
  { title: "Strapi", name: "Strapi", logo: "/stack/strapi.svg" },
  { title: "Drupal", name: "Drupal", logo: "/stack/drupal.svg" },
  // Mobile
  {
    title: "React Native",
    name: "React Native",
    logo: "/stack/react-native.svg",
  },
  { title: "Flutter", name: "Flutter", logo: "/stack/flutter.svg" },
  { title: "Swift", name: "Swift", logo: "/stack/swift.svg" },
  { title: "Kotlin", name: "Kotlin", logo: "/stack/kotlin.svg" },
  // Database
  { title: "MongoDB", name: "MongoDB", logo: "/stack/mongodb.svg" },
  { title: "PostgreSQL", name: "PostgreSQL", logo: "/stack/postgresql.svg" },
  { title: "MySQL", name: "MySQL", logo: "/stack/mysql.svg" },
  { title: "Redis", name: "Redis", logo: "/stack/redis.svg" },
  { title: "Firebase", name: "Firebase", logo: "/stack/firebase.svg" },
  { title: "SQLite", name: "SQLite", logo: "/stack/sqlite.svg" },
  // DevOps & Tools
  { title: "Docker", logo: "/stack/docker.svg" },
  { title: "Kubernetes", name: "Kubernetes", logo: "/stack/kubernetes.svg" },
  { title: "Git", name: "Git", logo: "/stack/git.svg" },
  { title: "Jenkins", name: "Jenkins", logo: "/stack/jenkins.svg" },
  { title: "Terraform", name: "Terraform", logo: "/stack/terraform.svg" },
  { title: "Nginx", name: "Nginx", logo: "/stack/nginx.svg" },
  // Design & AI
  { title: "Figma", name: "Figma", logo: "/stack/figma.svg" },
  { title: "OpenAI", logo: "/stack/openai.svg" },
];

// Duplicate for seamless loop
const allTechs = [...technologies, ...technologies];

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="py-20 bg-[#0D0A1A] relative overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">
              Our Stack
            </span>
            <div className="w-8 h-px bg-amber-400" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
        </div>
      </div>

      {/* Marquee row 1 */}
      <div className="marquee-wrapper relative overflow-hidden mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0A1A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap">
          {allTechs.map((tech, i) => (
            <div
              key={`row1-${i}`}
              className="inline-flex flex-shrink-0 items-center gap-3 mx-3 px-5 py-3 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-300 cursor-default group"
            >
              <div className="relative h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={tech.logo}
                  alt={tech.name || tech.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-6 w-auto object-contain"
                />
              </div>
              {tech?.name && (
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
                  {tech?.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 (reverse) */}
      <div className="marquee-wrapper relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0D0A1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0D0A1A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee2 whitespace-nowrap">
          {[...allTechs].reverse().map((tech, i) => (
            <div
              key={`row2-${i}`}
              className="inline-flex flex-shrink-0 items-center gap-3 mx-3 px-5 py-3 rounded-xl bg-[#1A1330] border border-[#2D2050] hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 cursor-default group"
            >
              <div className="relative h-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={tech.logo}
                  alt={tech.name || tech.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-6 w-auto object-contain"
                />
              </div>
              {tech.name && (
                <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
