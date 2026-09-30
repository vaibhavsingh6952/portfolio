import Image from "next/image";

export default function Hero() {
    return (
        <section className="max-w-2xl mx-auto pt-32">
            <div className="hidden md:flex items-baseline gap-2">
                <h1 className="text-3xl">Vaibhav Singh Takuli</h1>
                <Image 
                    src="/pfp.jpg"
                    alt="Profile"
                    width={180}
                    height={180}
                    className="rounded-lg"
                    unoptimized
                />
            </div>

            <div className="flex md:hidden flex-col">
                <div className="flex items-baseline gap-3">
                    <h1 className="text-xl">Vaibhav</h1>
                    <Image 
                        src="/pfp.jpg"
                        alt="Profile"
                        width={140}
                        height={140}
                        className="rounded-lg"
                        unoptimized
                    />
                </div>
                <h1 className="text-xl">Singh Takuli</h1>
            </div>
            <p className="text-gray-400 text-xl max-md:text-lg">welcooome to my space, hihi :)</p>
            <p className="mt-4 text-3xl max-md:text-xl">
                Product developer building products from 0→1. I make simple products and turn ideas into things people actually love. I care about how a product feels, from the first idea to the production. Lemme thrash your next big idea and win over users. <span className="text-gray-500">Currently building Hoode and pursuing Computer Science at VIT.</span>
            </p>
            <div className="flex gap-3 mt-8">
                <a href="https://leetcode.com/u/vaibhavsingh6952" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Leetcode</a>
                <a href="https://github.com/vaibhavsingh6952" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/vaibhavsingh6952/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                <a href="mailto:vaibhavsingh6952@gmail.com" className="hover:text-gray-400 transition-colors">Mail</a>
            </div>
        </section>
    );
}
