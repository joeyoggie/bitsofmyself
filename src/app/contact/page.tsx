import Link from 'next/link'

export default function ContactPage() {
    return (
        <div className="min-h-[70vh] flex flex-col justify-center max-w-4xl mx-auto py-12 px-4">
            <div className="space-y-12">
                <section className="animate-fade-in-up">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                        Let's start a <br />
                        <a
                            href="mailto:hello@bitsofmyself.com"
                            className="text-brand-500 animate-underline-grow hover:text-brand-400 transition-colors"
                        >
                            conversation.
                        </a>
                    </h1>
                </section>

                <section className="space-y-8 animate-fade-in-up delay-200">
                    <div>
                        <a
                            href="mailto:hello@bitsofmyself.com"
                            className="text-xl md:text-2xl font-medium text-white hover:text-brand-400 transition-colors border-b border-white/20 hover:border-brand-400 pb-1"
                        >
                            hello@bitsofmyself.com
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 border-t border-dark-border">
                        <a
                            href="https://instagram.com/joeyoggie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-dark-muted hover:text-white transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://facebook.com/joeyoggie"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-dark-muted hover:text-white transition-colors"
                        >
                            Facebook
                        </a>
                        <a
                            href="https://www.linkedin.com/in/youssefwagieh/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg text-dark-muted hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}
