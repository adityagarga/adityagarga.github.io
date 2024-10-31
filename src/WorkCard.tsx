type WorkCardProps = {
    companyName: string;
    jobTitle: string;
    description: string[];
    icons: string[];
}

export const WorkCard = ({ companyName, jobTitle, description, icons }: WorkCardProps) => {
    return (
        <div className="flex max-w-xl flex-col gap-3 rounded border border-black bg-orange-50 px-8 py-4">
            <div className="flex flex-wrap items-center">
                <div className="mr-2 flex items-center">
                    <div className="mr-2 h-8 w-8 bg-pink-500"></div>
                    <span className="font-space text-xl font-bold text-black">{companyName}</span>
                </div>
                <div>
                    <span className="font-space text-xl font-normal text-black">
                        {jobTitle}
                    </span>
                </div>
            </div>
            <div>
                <ul className="list-inside list-disc font-space text-base font-normal text-black">
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap gap-2">
                {icons.map((icon, index) => (
                    <div key={index} className="inline-flex h-8 w-8 items-center justify-center rounded border border-black bg-pink-50 shadow-button">
                        <div className="h-full w-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};
