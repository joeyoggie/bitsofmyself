export default function AboutPage() {
    return (
        <div className="max-w-2xl mx-auto prose prose-invert prose-brand">
            <h1 className="text-white">About Me</h1>
            <p className="text-dark-muted">
                Hello! I'm a software engineer with a passion for coding. My journey in software started with my mom's encouragement...
            </p>
            <p className="text-dark-muted">
                This is where I share my thoughts on technology, coding, and occasionally, life itself.
            </p>
            <p className="text-dark-muted">
                Feel free to reach out if you'd like to connect! <a href="mailto:hello@bitsofmyself.com" className="text-brand-500 hover:text-brand-400 transition-colors">hello@bitsofmyself.com</a>
            </p>
        </div>
    )
}
