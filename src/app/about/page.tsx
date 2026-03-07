export default function AboutPage() {
    return (
        <div className="max-w-2xl mx-auto prose prose-invert prose-brand space-y-6">
            <div className="inline-block mb-8">
                <h1 className="text-white animate-underline-grow m-0">About Me</h1>
            </div>

            <p className="text-dark-muted animate-fade-in-up delay-100">
                Hello! My name is Youssef Wagieh. I'm a father/husband by day, and a software engineer by night.
            </p>
            <p className="text-dark-muted animate-fade-in-up delay-200">
                I have a passion for coding and building cool stuff. I love using technology to solve real world problems and make people's lives easier.
            </p>
            <p className="text-dark-muted animate-fade-in-up delay-300">
                My journey in software started with my family's encouragement when I was a kid. My mom would always encourage me to tinker with electronics and build cool stuff. I have broken a lot of stuff at home, but I also built too many cool things.
            </p>
            <p className="text-dark-muted animate-fade-in-up delay-400">
                Feel free to reach out if you'd like to connect! <a href="mailto:hello@bitsofmyself.com" className="text-brand-500 hover:text-brand-400 transition-colors">hello@bitsofmyself.com</a>
            </p>
        </div>
    )
}
