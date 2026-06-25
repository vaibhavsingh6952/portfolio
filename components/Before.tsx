type BeforeEntryProps = {
    company: string;
    companyUrl: string;
    description: string;
    role: string;
    date: string;
    outcomes: string[];
};

function BeforeEntry({ company, companyUrl, description, role, date, outcomes }: BeforeEntryProps) {
    return (
        <div className="mb-16">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                    <span className="text-zinc-500"></span>
                    <div>
                        <a
                            href={companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline font-semibold"
                        >
                            {company}
                        </a>
                        <span className="text-zinc-600">. {description}</span>
                    </div>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                    <span className="text-zinc-500">{role}</span>
                    <span>{date}</span>
                </div>
                <div className="flex flex-col md:grid md:grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                    <span className="text-zinc-500"></span>
                    <ul className="list-disc pl-5 space-y-2">
                        {outcomes.map((outcome) => (
                            <li key={outcome}>{outcome}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default function Before() {
    return (
        <section className="mt-40">
            <h1 className="max-w-2xl mx-auto text-2xl text-gray-500 mb-12">Before</h1>

            <BeforeEntry
                company="MNNIT Allahabad"
                companyUrl="https://mnnit.ac.in"
                description="DRDO funded project designing HPC clusters using SLURM and MPI for military grade encryption and camouflage detection models."
                role="Project Intern"
                date="May 2025 – Jul 2025"
                outcomes={[
                    "Modified AI models to distributed Python scripts using TensorFlow Horovod and PyTorch DDP Lightning",
                    "Reduced model training time to 100 epochs in 25 minutes, significantly accelerating experimentation cycles",
                ]}
            />

            <BeforeEntry
                company="UN Space Generation Advisory Council"
                companyUrl="https://spacegeneration.org"
                description="Global space tech projects contributing to the United Nations space program initiatives."
                role="Member"
                date="Nov 2024 – Present"
                outcomes={[
                    "Contributed to 2 ML models and a website for UN SGAC space tech projects",
                    "Collaborated in cross-functional teams to deliver technical solutions for global projects",
                ]}
            />

            <BeforeEntry
                company="VIT Chennai"
                companyUrl="https://vit.ac.in"
                description="Research on designing a layered LLM security framework addressing prompt injection, jailbreaking, and data leakage vulnerabilities."
                role="Research Intern"
                date="Apr 2025 – Aug 2025"
                outcomes={[
                    "Designing a layered LLM security framework for prompt injection, jailbreaking, and data leakage vulnerabilities",
                ]}
            />

            <BeforeEntry
                company="Viteach, VIT"
                companyUrl="https://viteach.in/"
                description="VIT's initiative to tutor underprivileged high school students in basic computer science and math concepts."
                role="Tutor"
                date="Sep 2024 – Jul 2025"
                outcomes={[
                    "Tutored 10+ underprivileged high school students in basic computer science and math concepts weekly over 10 months",
                    "Improved academic performance and tech confidence of students",
                ]}
            />
        </section>
    );
}
