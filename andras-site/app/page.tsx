"use client";


import { useState } from "react";
import { motion } from "framer-motion";
import {
    Leaf,
    Sparkles,
    ArrowRight,
    Mail,
    MapPin,
    Drum,
    Dumbbell,
    BookOpenText,
    Briefcase,
    Swords,
    Gamepad2,
    Code2,
    Github,
    Linkedin,
    Music2,
    Trophy,
    Bird,
    ShieldCheck,
    ChevronRight,
    GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FadeIn = ({ children, delay = 0, className = "" }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay }}
    >
        {children}
    </motion.div>
);

const Section = ({ id, eyebrow, title, desc, children }) => (
    <section id={id} className="relative mx-auto w-full max-w-7xl px-4 py-20 md:py-28">
        <FadeIn>
            <div className="mb-10 flex flex-col gap-3 text-center">
                {eyebrow && (
                    <span className="mx-auto inline-block rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                        {eyebrow}
                    </span>
                )}
                {title && (
                    <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                        {title}
                    </h2>
                )}
                {desc && (
                    <p className="mx-auto max-w-2xl text-muted-foreground">{desc}</p>
                )}
            </div>
        </FadeIn>
        {children}
    </section>
);

const Pill = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4" /> {children}
    </span>
);

export default function AndrasBackPersonalEN() {
    const [email, setEmail] = useState("");
    const [dark, setDark] = useState(false);

    // simple dark-mode toggle without extra deps
    if (typeof window !== "undefined") {
        const html = document.documentElement;
        if (dark) html.classList.add("dark");
        else html.classList.remove("dark");
    }

    const palette = [
        { name: "Emerald", sample: "bg-emerald-500" },
        { name: "Teal", sample: "bg-teal-500" },
        { name: "Lime", sample: "bg-lime-500" },
        { name: "Amber", sample: "bg-amber-500" },
        { name: "Sky", sample: "bg-sky-500" },
    ];

    const tech = [
        "Python", "Docker", "Git", "Postman", "REST", "gRPC/Protobuf",
        "Unity", "C#", "C++", "OpenXR", "Linux/WSL2", "Jira/Xray",
    ];

    const certs = [
        "ISTQB CTFL", "ISTQB Agile Extension", "CT-AI (in progress)",
    ];

    const experience = [
        {
            company: "Vartid",
            role: "Software Test Engineer",
            period: "2024 — present",
            desc: "Testing a surgical planning desktop app and a Magic Leap 2‑based intraoperative AR navigation app. Focus on functional, regression, exploratory, API and usability testing.",
            chips: ["Unity", "OpenXR", "Magic Leap 2", "DICOM", "gRPC", "REST", "Docker"],
        },
        {
            company: "DMG MORI Heitec",
            role: "QA / Software Testing",
            period: "Jan 2022 — Jul 2024",
            desc: "Industrial/engineering software QA and testing contributions across projects.",
            chips: ["QA", "Industrial SW"],
        },
        {
            company: "Pontsystems",
            role: "Manual Software Tester",
            period: "~2.5 years",
            desc: "Member of a 4‑person test team, parallel projects under a project manager. This is where my IT career started.",
            chips: ["Functional", "Regression", "Team collaboration"],
        },
        {
            company: "Police (Hungary)",
            role: "Border hunter & patrol officer",
            period: "Earlier",
            desc: "Discipline, responsibility and real‑world teamwork that still shape how I work.",
            chips: ["Discipline", "Teamwork", "Resilience"],
        },
    ];

    const hobbies = [
        { icon: <Drum className="h-5 w-5" />, title: "Drumming", text: "Advanced drummer, practicing ~2× weekly near my workplace." },
        { icon: <Dumbbell className="h-5 w-5" />, title: "Training", text: "P/RR/S split, 4×/week – goal: preserve muscle while cutting to ~80 kg." },
        { icon: <Gamepad2 className="h-5 w-5" />, title: "MTG Deck", text: "Green‑black Elves with Ghalta, Lathril, Genesis Wave, Doubling Season." },
        { icon: <Swords className="h-5 w-5" />, title: "D&D", text: "Nordakus (human druid), Oumuamua (dwarf fighter), Zykiss (dragonborn ranger)." },
        { icon: <BookOpenText className="h-5 w-5" />, title: "Writing", text: "The War of the Ants – epic trilogy with tech‑myth and moral dilemmas." },
        { icon: <Bird className="h-5 w-5" />, title: "Bátor Sir Robin", text: "My canary – the golden boss of my music corner." },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-background to-background">
            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15">
                            <Leaf className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-lg font-semibold">András Bäck</span>
                    </a>
                    <nav className="hidden items-center gap-6 md:flex">
                        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
                        <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground">Experience</a>
                        <a href="#hobbies" className="text-sm text-muted-foreground hover:text-foreground">Interests</a>
                        <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" onClick={() => setDark(!dark)}>
                            {dark ? "Light" : "Dark"} mode
                        </Button>
                        <Button asChild>
                            <a href="#contact" className="inline-flex items-center gap-2">Get in touch <ArrowRight className="h-4 w-4" /></a>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero with your drumming photo */}
            <section id="home" className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(50rem_40rem_at_top_right,theme(colors.emerald/20),transparent)]" />
                <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28">
                    <FadeIn>
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex items-center gap-2 self-start rounded-full border px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                                <Sparkles className="h-4 w-4" /> Budapest, Hungary
                            </div>
                            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                                Test Engineer, Drummer, Maker.
                                <span className="block text-emerald-600">Stability + creativity.</span>
                            </h1>
                            <p className="max-w-xl text-lg text-muted-foreground">
                                Manual software tester at <strong>Vartid</strong> — building surgical AR solutions. In my free time I drum, train, and build stories and apps.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <Pill>ISTQB CTFL, Agile</Pill>
                                <Pill>Unity • OpenXR • ML2</Pill>
                                <Pill>Python • Docker • Git</Pill>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-3">
                                <Button asChild size="lg">
                                    <a href="#experience" className="inline-flex items-center gap-2">Experience <ChevronRight className="h-4 w-4" /></a>
                                </Button>
                                <Button asChild size="lg" variant="outline">
                                    <a href="#contact" className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> Contact</a>
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-emerald-100 to-background p-0 shadow-xl">
                            <CardContent className="p-0">
                                {/* Replace the src paths with your real public/ filenames: andras-drum.jpg */}
                                <img
                                    src="/andras-drum.jpg"
                                    alt="András drumming"
                                    className="mx-auto aspect-[4/5] w-full max-w-[520px] rounded-2xl object-cover shadow-xl ring-1 ring-border"
                                />
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </section>

            {/* About */}
            <Section
                id="about"
                eyebrow="About"
                title="Precision in testing, flow in music, endurance in motion."
                desc="I believe the best results come from the balance of well‑designed process and playful creativity."
            >
                <div className="grid gap-6 md:grid-cols-2">
                    <FadeIn>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Briefcase className="h-5 w-5" /> What I do</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm text-muted-foreground">
                                <p>Software Test Engineer at <strong>Vartid</strong>: testing a surgical planning desktop app and a Magic Leap 2‑based intraop navigation app.</p>
                                <ul className="ml-4 list-disc space-y-1">
                                    <li>Focus: functional, regression, exploratory, API & usability testing</li>
                                    <li>Tools: {tech.join(" • ")}</li>
                                    <li>Standards: IEC 62304, IEC 62366‑1, ISO 14971, ISO 13485</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </FadeIn>
                    <FadeIn delay={0.05}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><GraduationCap className="h-5 w-5" /> Education & Certs</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-3 text-sm text-muted-foreground md:grid-cols-2">
                                <div>
                                    <p className="mb-2"><strong>University studies</strong></p>
                                    <p>History major (attended) — curiosity for systems & narratives started here.</p>
                                </div>
                                <div className="flex flex-wrap items-start gap-2 self-start">
                                    {certs.map((c, i) => (
                                        <Badge key={i} className="bg-emerald-600/10 text-emerald-700">{c}</Badge>
                                    ))}
                                </div>
                                <div className="md:col-span-2">
                                    {/* second image */}
                                    <img
                                        src="/andras-chill.jpg"
                                        alt="András smiling at a table"
                                        className="mt-2 w-full rounded-xl object-cover ring-1 ring-border"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </Section>

            {/* Experience */}
            <Section
                id="experience"
                eyebrow="Experience"
                title="Where I've been"
                desc="From public service to industrial QA to medical AR — each step added discipline, empathy, and technical depth."
            >
                <div className="grid gap-6 lg:grid-cols-2">
                    {experience.map((e, i) => (
                        <FadeIn key={i} delay={i * 0.05}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10 text-emerald-700"><Briefcase className="h-5 w-5" /></span>
                                        {e.company}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-sm text-muted-foreground">
                                        <p className="mb-1"><strong>{e.role}</strong> · {e.period}</p>
                                        <p>{e.desc}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {e.chips.map((chip, idx) => (
                                                <span key={idx} className="rounded-full border px-3 py-1 text-xs">{chip}</span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Hobbies */}
            <Section
                id="hobbies"
                eyebrow="Interests"
                title="The green zone: where I recharge"
                desc="Music, sports, games — all teach rhythm, precision and focus."
            >
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {hobbies.map((h, i) => (
                        <FadeIn key={i} delay={i * 0.04}>
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10 text-emerald-700">{h.icon}</span>
                                        {h.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{h.text}</p>
                                </CardContent>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={0.2} className="mt-8 text-center text-sm text-muted-foreground">
                    <p><Music2 className="mr-1 inline h-4 w-4" /> Music taste: rock/metal (Slipknot, Nightwish, Metallica) — with love for blues to funk‑rock too.</p>
                </FadeIn>
            </Section>

            {/* Training */}
            <Section
                id="training"
                eyebrow="Active lifestyle"
                title="Football 2–3× weekly, strength training 4×"
                desc="Goal: ~80 kg bodyweight with muscle preserved. Nutrition leaning plant‑forward and flexible."
            >
                <div className="grid items-start gap-6 md:grid-cols-2">
                    <FadeIn>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5" /> Plan</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                <ul className="ml-4 list-disc space-y-1">
                                    <li>P/RR/S split — 9‑week cycles with rotating exercise selection</li>
                                    <li>Recovery: deloads and sleep priority</li>
                                    <li>Mobility: shoulder/hip focus, ball & foam rolling</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </FadeIn>
                    <FadeIn delay={0.05}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2"><Leaf className="h-5 w-5" /> Nutrition note</CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                                Flexible macros; protein sources I like: pumpkin, hemp, pea and chickpea (e.g., Nutrend 60% vegan blend).
                            </CardContent>
                        </Card>
                    </FadeIn>
                </div>
            </Section>

            {/* Contact (Formspree-ready) */}
            <Section
                id="contact"
                eyebrow="Contact"
                title="Let's talk"
                desc="Open to collaborations, jam sessions, or testing/QA brainstorming. Drop me a line!"
            >
                <FadeIn>
                    <Card className="mx-auto max-w-3xl">
                        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
                            <form
                                className="contents"
                                action="https://formspree.io/f/movkwrdb" // TODO: replace with your Formspree endpoint
                                method="POST"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-medium" htmlFor="name">Name</label>
                                    <Input id="name" name="name" placeholder="Your name" />

                                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="andras@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <label className="text-sm font-medium" htmlFor="subject">Subject</label>
                                    <Input id="subject" name="subject" placeholder="How can we work together?" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-sm font-medium" htmlFor="msg">Message</label>
                                    <Textarea id="msg" name="message" className="min-h-[140px]" placeholder="Write a few lines…" />
                                    <Button className="mt-4 self-start" size="lg" type="submit">
                                        <Mail className="mr-2 h-4 w-4" /> Send
                                    </Button>
                                    <div className="mt-4 flex gap-2">
                                        <Button variant="outline" asChild>
                                            <a href="https://github.com/backand-prog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><Github className="h-4 w-4" /> GitHub</a>
                                        </Button>
                                        <Button variant="outline" asChild>
                                            <a href="https://www.linkedin.com/in/andr%C3%A1s-b%C3%A4ck-9b26751a3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"><Linkedin className="h-4 w-4" /> LinkedIn</a>
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 inline h-4 w-4" /> Based in Budapest, Hungary — available for remote collaboration.
                    </p>
                </FadeIn>
            </Section>

            {/* Footer */}
            <footer className="border-t py-10">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 md:flex-row">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15">
                            <Leaf className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm">© {new Date().getFullYear()} András Bäck</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                        <a href="#about" className="hover:text-foreground">About</a>
                        <a href="#experience" className="hover:text-foreground">Experience</a>
                        <a href="#hobbies" className="hover:text-foreground">Interests</a>
                        <a href="#contact" className="hover:text-foreground">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
