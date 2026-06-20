import Image from "next/image";

export default function Hero() {
    return (
        <section className="max-w-2xl mx-auto pt-32">
            <div className="flex items-baseline gap-2">
                <h1 className="text-3xl">Vaibhav Singh Takuli</h1>
                <Image 
                    src="/pfp.png"
                    alt="Profile"
                    width={180}
                    height={180}
                    className="rounded-lg"
                    unoptimized
                />
            </div>

            <p className="mt-4 text-3xl">
                Product Developer building products from 0→1. Across consumer applications, developer tools, AI systems, and distributed computing, built full-stack products, developed production-ready systems, and worked across infrastructure, backend, and user experience. 
                <span className="text-gray-500"> Currently building Hoode and pursuing Computer Science at VIT.</span>
            </p>
            <div className="flex gap-3 mt-8">
                <a href="https://github.com/vaibhavsingh6952" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/vaibhavsingh6952/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                <a href="mailto:vaibhavsingh6952@gmail.com" className="hover:text-gray-400 transition-colors">Mail</a>
            </div>
        </section>
    );
}