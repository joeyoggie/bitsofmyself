import Link from 'next/link'

export const metadata = {
    title: 'About | BitsOfMyself',
    description: 'About Youssef Wagieh - Software Engineering Lead & Mobile Architect.',
}

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-12 py-4">
            {/* Header & Bio */}
            <section className="space-y-6">
                <div className="inline-block">
                    <h1 className="text-3xl sm:text-4xl font-bold text-white animate-underline-grow m-0">About Me</h1>
                </div>

                <div className="space-y-4 text-dark-text leading-relaxed animate-fade-in-up delay-100">
                    <p className="text-lg text-white/90">
                        Hello! My name is <span className="text-white font-semibold">Youssef Wagieh</span>. I'm a Software Engineering Lead and Mobile Architect based in Cairo, Egypt.
                    </p>
                    <p className="text-dark-muted">
                        I'm a father and husband by day, and a software craftsman by night. My fascination with technology began as a kid—encouraged by my mom to tinker with electronics and build things (and occasionally break a few along the way). That hands-on curiosity evolved into a lifelong passion for using technology to solve real-world problems and make people's lives easier.
                    </p>
                    <p className="text-dark-muted">
                        With over 8 years of professional engineering experience, I specialize in architecting resilient Android and multiplatform mobile applications, leading high-performing teams, and scaling products used by millions of users across the MENA region.
                    </p>
                </div>
            </section>

            {/* Core Expertise */}
            <section className="space-y-6 animate-fade-in-up delay-200">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="text-brand-500">#</span> Core Expertise
                </h2>

                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all">
                        <h3 className="text-base font-semibold text-white mb-2">Mobile & Multiplatform</h3>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Modern Android, Compose Multiplatform, Kotlin Multiplatform (KMM), Kotlin, Java, Jetpack Compose, Coroutines & Flow.
                        </p>
                    </div>
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all">
                        <h3 className="text-base font-semibold text-white mb-2">Architecture & Design</h3>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Clean Architecture, MVI & MVVM patterns, Domain-Driven Design (DDD), modularization, and reusable SDK platforms.
                        </p>
                    </div>
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all">
                        <h3 className="text-base font-semibold text-white mb-2">Leadership & DevOps</h3>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Technical leadership, team mentorship, rigorous code reviews, and automated CI/CD pipelines (GitLab, GitHub Actions, Jenkins).
                        </p>
                    </div>
                </div>
            </section>

            {/* Experience Journey */}
            <section className="space-y-6 animate-fade-in-up delay-300">
                <div className="flex items-baseline justify-between">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                        <span className="text-brand-500">#</span> Experience Highlights
                    </h2>
                    <Link href="/projects" className="text-xs text-brand-500 hover:text-brand-400 transition-colors">
                        View detailed projects →
                    </Link>
                </div>

                <div className="space-y-4">
                    {/* Jahez */}
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div>
                                <span className="font-semibold text-white text-base">Software Engineering Lead</span>
                                <span className="text-dark-muted text-sm sm:ml-2">@ Jahez International Company</span>
                            </div>
                            <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20 w-fit">
                                Oct 2022 – Present
                            </span>
                        </div>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Leading the Android development team across core consumer and merchant applications (Jahez, Jahez Restaurant, Pik). Driving architectural initiatives including extracting key application modules into reusable SDKs across the ecosystem, setting code quality standards, and managing CI/CD automation.
                        </p>
                    </div>

                    {/* Lean Business Services */}
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div>
                                <span className="font-semibold text-white text-base">Lead Android Developer</span>
                                <span className="text-dark-muted text-sm sm:ml-2">@ Lean Business Services</span>
                            </div>
                            <span className="text-xs font-mono text-dark-muted bg-dark-bg px-2 py-0.5 rounded border border-dark-border w-fit">
                                June 2020 – Oct 2022
                            </span>
                        </div>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Led Android development for <span className="text-white">Sehhaty</span>, Saudi Arabia's official Ministry of Health nationwide application. Maintained codebase integrity, established CI/CD pipelines, and rolled out vital healthcare features including telehealth, appointment bookings, and COVID-19 health tracking.
                        </p>
                    </div>

                    {/* Aqwas */}
                    <div className="p-5 bg-dark-surface border border-dark-border rounded-lg hover:border-brand-500/40 transition-all space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <div>
                                <span className="font-semibold text-white text-base">Android Engineer</span>
                                <span className="text-dark-muted text-sm sm:ml-2">@ Aqwas</span>
                            </div>
                            <span className="text-xs font-mono text-dark-muted bg-dark-bg px-2 py-0.5 rounded border border-dark-border w-fit">
                                Dec 2019 – Nov 2024
                            </span>
                        </div>
                        <p className="text-sm text-dark-muted leading-relaxed">
                            Delivered and supported scalable applications across diverse domains, including e-commerce for Jarir Bookstore, car rental solutions for Theeb, and community forums for Hawaa World.
                        </p>
                    </div>

                    {/* Earlier Experience Summary */}
                    <div className="p-5 bg-dark-surface/50 border border-dark-border/70 rounded-lg space-y-2 text-sm text-dark-muted">
                        <div className="flex items-center justify-between">
                            <span className="font-semibold text-white/90">Earlier Experience (2017 – 2019)</span>
                            <span className="text-xs font-mono text-dark-muted">Kuwait & Egypt</span>
                        </div>
                        <p className="leading-relaxed">
                            Engineered mobile applications across IoT & smart home automation (RonixTech units with MQTT), on-demand delivery (Mongez with live worker tracking), medical consultations (BeSure), and enterprise mobile systems.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education & Personal */}
            <section className="grid gap-6 sm:grid-cols-2 animate-fade-in-up delay-400">
                <div className="p-5 bg-dark-surface border border-dark-border rounded-lg space-y-3">
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-brand-500">#</span> Education
                    </h2>
                    <div>
                        <div className="text-white font-medium text-sm">B.Sc. in Computer Engineering</div>
                        <div className="text-dark-muted text-xs">Helwan University (2016)</div>
                        <p className="text-xs text-dark-muted mt-2 leading-relaxed">
                            Graduation Project: <span className="text-white/90">OnTime Messenger</span> (Mobile messaging platform with custom geolocation & scheduling) — Grade: Excellent (A).
                        </p>
                    </div>
                </div>

                <div className="p-5 bg-dark-surface border border-dark-border rounded-lg space-y-3">
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                        <span className="text-brand-500">#</span> Beyond Coding
                    </h2>
                    <div className="space-y-2 text-xs text-dark-muted leading-relaxed">
                        <p>
                            When I'm not in an IDE or reviewing code, you can find me cycling, reading, following TV series, or tinkering with home automation and IoT hardware.
                        </p>
                        <p>
                            <span className="text-white/90 font-medium">Languages:</span> Arabic (Native), English (Fluent).
                        </p>
                    </div>
                </div>
            </section>

            {/* Connect CTA */}
            <section className="pt-4 border-t border-dark-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in-up delay-500">
                <p className="text-dark-muted text-sm">
                    Want to discuss engineering, architecture, or collaboration?
                </p>
                <div className="flex gap-4 text-sm font-medium">
                    <Link href="/projects" className="text-dark-muted hover:text-white transition-colors">
                        Explore Projects →
                    </Link>
                    <Link href="/contact" className="text-brand-500 hover:text-brand-400 transition-colors">
                        Get in touch →
                    </Link>
                </div>
            </section>
        </div>
    )
}
