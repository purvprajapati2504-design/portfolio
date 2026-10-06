"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Brain,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  Layers3,
  LinkIcon,
  Mail,
  MapPin,
  MonitorSmartphone,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Wand2,
} from "lucide-react";

type Certification = {
  name: string;
  href: string;
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "Scikit-Learn",
  "Mysql",
  "Next.js",
  "Node.js",
  "Supabase",
  "Windows",
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Communication",
  "Presentation",
  "AI Enthusiast",
];

const projects = [
  {
    title: "Online Game Store",
    icon: <Globe className="h-5 w-5" />,
    description:
      "A web-based store concept for purchasing games, managing wishlists, and supporting multiple payment flows.",
    tags: ["Web App", "E-commerce", "Wishlist", "Payments"],
  },
  {
    title: "Integrated AI System",
    icon: <Brain className="h-5 w-5" />,
    description:
      "An academic project focused on face detection, image classification, and voice recognition.",
    tags: ["Face Detection", "Image Classification", "Voice Recognition"],
  },
];

const education = [
  {
    degree: "Master of Computer Application (Pursuing)",
    school: "Ganpat University, Kherva (Mahesana)",
    year: "2025 - 2027",
  },
  {
    degree: "Computer Applications - Graduation",
    school: "Sankalchand Patel University, Visnagar (8.32 CGPA)",
    year: "2022 - 2025",
  },
  {
    degree: "Higher Secondary Commerce",
    school: "Shri B. N. High School, Vadnagar",
    year: "2022",
  },
];

const certifications: Certification[] = [
  {
    name: "Infosys Springboard / Navigate Your Next - Machine Learning with Scikit-learn",
    href: "/ml sklit learn.pdf",
  },
  {
    name: "Infosys Springboard / Navigate Your Next - Beginning PHP",
    href: "/infosys being php.pdf",
  },
  {
    name: "L&T EduTech Certificate",
    href: "/L&T.pdf",
  },
  {
    name: "Infosys Springboard / Navigate Your Next - Python",
    href: "/enfocyspython.pdf",
  },
  {
    name: "Infosys Springboard / Navigate Your Next - Kotlin",
    href: "/enfocys2kotalin.pdf",
  },
  {
    name: "Infosys Springboard / Navigate Your Next - AI & ML",
    href: "/enfocysAi_Ml.jpeg",
  },
  {
    name: "IBM SkillBuild Certificate",
    href: "/SkillBuild.jpeg",
  },
  {
    name: "IBM SkillBuild Advanced Certificate",
    href: "/SkillBuild1.jpeg",
  },
  {
    name: "Quiz Competition Certificate",
    href: "/quiz.png",
  },
  {
    name: "NASSCOM Certificate",
    href: "/nasscom.jpeg",
  },
  {
    name: " FUNDAMENTAL & CLOUDCOMPUTING Certificate",
    href: "/fundamental.png",
  },
  {
    name: "SQL & NOSQL FOR BEGINERS Certificate",
    href: "/sql_nosql.png",
  },
];

const languages = ["English", "Hindi", "Gujarati"];

const softSkills = [
  "Group Discussion",
  "Time Management",
  "Presentation Skills",
  "Team Collaboration",
  "Problem Solving",
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_28%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-12" id="top">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-lg font-bold shadow-lg shadow-indigo-500/20">
              P
            </div>
            <div>
              <p className="text-sm text-white/60">Portfolio</p>
              <h1 className="text-base font-semibold tracking-wide">
                Purvakumar Prajapati
              </h1>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#projects"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Contact
            </a>
          </div>
        </motion.header>

        <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              MCA Student • Web Developer • AI Enthusiast
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Building clean digital experiences with{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                creativity
              </span>{" "}
              and precision.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Motivated MCA student with hands-on exposure to web development,
              computer applications, and academic projects in AI-based systems.
              Strong in communication, teamwork, time management, and problem
              solving.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:purvaprajapati2504@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/purv-prajapati-bb995b363"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <LinkIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Projects", value: "2+" },
                { label: "Certifications", value: `${certifications.length}+` },
                { label: "Languages", value: "3" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-lg shadow-black/10"
                >
                  <p className="text-3xl font-black">{item.value}</p>
                  <p className="mt-1 text-sm text-white/60">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/50">
                    Profile Card
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">
                    Purvakumar Prajapati
                  </h3>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 text-3xl font-black shadow-lg shadow-indigo-500/20">
                  PP
                </div>
                <div className="space-y-3 text-sm text-white/75">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                    Vadnagar, Gujarat, India
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-cyan-300" />
                    8735818304
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-cyan-300" />
                    purvaprajapati2504@gmail.com
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { icon: <Code2 className="h-4 w-4" />, label: "Frontend" },
                  { icon: <Cpu className="h-4 w-4" />, label: "AI Projects" },
                  {
                    icon: <MonitorSmartphone className="h-4 w-4" />,
                    label: "Responsive UI",
                  },
                  { icon: <Wand2 className="h-4 w-4" />, label: "Creative Design" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                  >
                    <div className="mb-2 inline-flex rounded-xl bg-white/10 p-2">
                      {item.icon}
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <UserRound className="h-5 w-5 text-cyan-300" />
              <h3 className="text-2xl font-bold">About Me</h3>
            </div>
            <p className="mt-5 leading-8 text-white/70">
              I am a motivated computer applications student who enjoys turning
              ideas into practical, user-friendly web experiences. My focus is
              on clean UI, smooth interaction, and building strong foundations
              in modern development.
            </p>
            <p className="mt-4 leading-8 text-white/70">
              I also enjoy AI-related academic work and continuously learning
              new tools to improve both my technical and creative abilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-fuchsia-300" />
              <h3 className="text-2xl font-bold">Core Strengths</h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="py-16" id="skills">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-indigo-300" />
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/[0.12]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="pb-16">
          <div className="mb-6 flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5 text-cyan-300" />
            <h3 className="text-2xl font-bold">Project Experience</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-3 text-slate-950 shadow-lg shadow-indigo-500/20">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <p className="text-sm text-white/50">
                        Featured Academic Project
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 leading-8 text-white/70">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-emerald-300" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="mt-6 space-y-5">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-lg font-semibold">{item.degree}</p>
                  <p className="mt-1 text-sm text-white/65">{item.school}</p>
                  <p className="mt-2 text-sm text-cyan-200">{item.year}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-fuchsia-300" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="mt-6 space-y-3">
              {certifications.map((cert) => (
                <a
                  key={cert.name}
                  href={encodeURI(cert.href)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-300" />
                    <span className="text-sm text-white/80">{cert.name}</span>
                  </div>
                  <span className="text-xs text-white/50">Open</span>
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="py-16">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-cyan-300" />
                <h3 className="text-2xl font-bold">Languages</h3>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Available For
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Web Development, Frontend Projects, Academic Projects, and
                  Entry-Level Opportunities
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-300" />
                <h3 className="text-2xl font-bold">Contact</h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:purvaprajapati2504@gmail.com"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-sm text-white/50">Email</p>
                  <p className="mt-2 break-all font-medium">
                    purvaprajapati2504@gmail.com
                  </p>
                </a>

                <a
                  href="tel:+918735818304"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-sm text-white/50">Phone</p>
                  <p className="mt-2 font-medium">8735818304</p>
                </a>

                <a
                  href="https://linkedin.com/in/purv-prajapati-bb995b363"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                >
                  <p className="text-sm text-white/50">LinkedIn</p>
                  <p className="mt-2 break-all font-medium">
                    linkedin.com/in/purv-prajapati-bb995b363
                  </p>
                </a>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/50">Location</p>
                  <p className="mt-2 font-medium">Vadnagar, Gujarat, India</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:purvaprajapati2504@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  <Mail className="h-4 w-4" />
                  Hire / Contact
                </a>
                <a
                  href="#top"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
                >
                  <ArrowRight className="h-4 w-4 rotate-[-90deg]" />
                  Back to Top
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-center text-sm text-white/45">
          © {new Date().getFullYear()} Purvakumar Prajapati • Crafted with
          Next.js
        </footer>
      </div>
    </main>
  );
}