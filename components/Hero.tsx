import Image from "next/image";

export default function Hero() {
    return (
        <section className="max-w-2xl mx-auto pt-32">
            <div className="flex flex-row justify-between items-center md:justify-start md:items-baseline md:gap-2">
                <div className="w-[72%] md:w-auto">
                    <h1 className="text-2xl md:text-3xl">Vaibhav Singh Takuli</h1>
                </div>
                <Image 
                    src="/pfp.png"
                    alt="Profile"
                    width={180}
                    height={180}
                    className="w-20 h-28 object-cover rounded-xl md:w-[180px] md:h-[180px] md:rounded-lg"
                    unoptimized
                />
            </div>

            <p className="mt-4 text-2xl md:text-3xl">
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