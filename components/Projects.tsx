import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section className="mt-40">
            <h1 className="max-w-2xl mx-auto text-2xl text-gray-500 mb-12">Recent Projects</h1>

            <ProjectCard
                year="2025 to present"
                title="Hoode"
                description="Group-based social discovery app focused on helping people connect through shared activities and moods."
                link="hoode.in"
                status="Holding launch until the waitlist hits a threshold sufficient for a strong early experience."
                tools={["Expo React Native", "Next.js", "Convex", "Cloudflare R2"]}
                role="Co-Founder, Product Engineer"
                outcomes={[
                    "2,000+ waitlist signups before public launch",
                    "Built full mobile app and marketing site from zero: auth, feeds, real-time updates, content moderation",
                    "Designed app core algorithm and personalized feed from scratch",
                ]}
                gallery={{
                    type: "phone",
                    images: [
                        "/projects/hoode/s1.png",
                        "/projects/hoode/s2.png",
                        "/projects/hoode/s3.png",
                    ],
                }}
            />

            <ProjectCard
                year="2025"
                title="Structra"
                description="SaaS platform for Indian interior design studios to manage projects, automate GST invoices, and streamline vendor purchases."
                link="structra-roan.vercel.app"
                status="Currently researching market fit and an underserved wedge before deciding on public launch."
                tools={["Next.js", "Tailwind CSS", "Supabase", "Prisma", "Razorpay"]}
                role="Founder, Product Engineer"
                outcomes={[
                    "Built full SaaS platform: dashboard, auth, Razorpay payments, and multi-tier subscription pricing",
                    "Implemented India-first workflows: GST invoice generation and WhatsApp-ready client portals",
                    "Researching competitive landscape and studio demand before public launch",
                ]}
                gallery={{
                    type: "desktop",
                    rows: [
                        { layout: "full", images: ["/projects/structra/s1.png"] },
                        { layout: "full", images: ["/projects/structra/s2.png"] },
                        { layout: "full", images: ["/projects/structra/s3.png"] },
                        { layout: "half", images: ["/projects/structra/s4.png", "/projects/structra/s5.png"] },
                        { layout: "half", images: ["/projects/structra/s6.png", "/projects/structra/s7.png"] },
                        { layout: "full", images: ["/projects/structra/s8.png"] },
                    ],
                }}
            />

            <ProjectCard
                year="2025"
                title="Clariwo"
                description="Turns content into action. Share reels, videos, or posts and Clariwo extracts key ideas into a structured plan tailored to your context."
                link="clariwo.vercel.app"
                status="Built from a problem I ran into myself. Currently in waitlist phase while working on initial distribution."
                tools={["Expo React Native", "Supabase", "React Query", "NativeWind"]}
                role="Founder, Product Engineer"
                outcomes={[
                    "Designed and built AI pipeline that extracts structured plans from social content",
                    "Built onboarding, auth, and context-setting flow",
                    "Collecting waitlist signups ahead of beta launch",
                ]}
                gallery={{
                    type: "phone",
                    images: [
                        "/projects/clariwo/s1.png",
                        "/projects/clariwo/s2.png",
                        "/projects/clariwo/s3.png",
                    ],
                }}
            />

            <ProjectCard
                year="2026"
                title="US Warrant Search"
                description="Public warrant lookup across every US county and state. Aggregates data currently scattered across thousands of sheriff and court websites into a single searchable index."
                link="warrantsearchus.com"
                status="A search-driven content product targeting recurring organic demand around public records."
                tools={["Next.js", "Python", "PostgreSQL"]}
                role="Builder"
                outcomes={[
                    "Mapping and collecting warrant data across 3,000+ US counties",
                    "Building scraper pipeline and data normalization layer",
                    "Designing county-browse and search UX",
                ]}
                gallery={{
                    type: "desktop",
                    rows: [
                        { layout: "full", images: ["/projects/warrantsearchus/s1.png"] },
                        { layout: "full", images: ["/projects/warrantsearchus/s2.png"] },
                        { layout: "full", images: ["/projects/warrantsearchus/s3.png"] },
                    ],
                }}
            />
        </section>
    );
}