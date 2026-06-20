type GalleryRow = {
    layout: "full" | "half";
    images: string[];
};

type ProjectCardProps = {
    year: string;
    title: string;
    description: string;
    link?: string;
    status: string;
    tools: string[];
    role: string;
    outcomes: string[];
    gallery:
        | { type: "phone"; images: string[] }
        | { type: "desktop"; rows: GalleryRow[] };
};

export default function ProjectCard({
    year,
    title,
    description,
    link,
    status,
    tools,
    role,
    outcomes,
    gallery,
}: ProjectCardProps) {
    return (
        <div className="mb-32">
            <article className="max-w-2xl mx-auto">
                <p className="text-zinc-500 text-xl">{year}</p>
                <h3 className="text-3xl mt-1">{title}. {description}</h3>

                <div className="mt-8">
                    {link && (
                        <div className="grid grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                            <span>Link</span>
                            <a
                                href={`https://${link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {link}
                            </a>
                        </div>
                    )}
                    <div className="grid grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                        <span>Status</span>
                        <span>{status}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                        <span>Tools</span>
                        <span>{tools.join(", ")}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                        <span>Role</span>
                        <span>{role}</span>
                    </div>
                    <div className="grid grid-cols-[140px_1fr] border-t border-zinc-300 py-4">
                        <span>Outcomes</span>
                        <ul className="list-disc pl-5 space-y-2">
                            {outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </article>

            <div className="mt-12">
                {gallery.type === "phone" ? (
                    <div className="grid grid-cols-3 gap-4 max-w-screen-2xl mx-auto px-6">
                        {gallery.images.map((image, i) => (
                            <div key={i} className="bg-gray-200 rounded-xl p-6">
                                <img
                                    src={image}
                                    alt={`${title} screenshot ${i + 1}`}
                                    className="w-full"
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4 max-w-screen-2xl mx-auto px-4">
                        {gallery.rows.map((row, i) =>
                            row.layout === "full" ? (
                                <div key={i} className="bg-gray-200 rounded-xl p-8">
                                    <img
                                        src={row.images[0]}
                                        alt={`${title} screenshot ${i + 1}`}
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            ) : (
                                <div key={i} className="flex gap-4">
                                    {row.images.map((image, j) => (
                                        <div key={j} className="bg-gray-200 rounded-xl p-8 flex-1">
                                            <img
                                                src={image}
                                                alt={`${title} screenshot ${i + 1}-${j + 1}`}
                                                className="w-full rounded-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}