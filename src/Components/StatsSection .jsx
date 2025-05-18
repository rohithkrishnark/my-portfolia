import StatCard from "./StatCard";

const StatsSection = () => {
    const stats = [
        { number: 2, lines: ["years", "Experience"], size: "text-xs" },
        { number: 4, lines: ["Projects", "Completed"], size: "text-xs" },
        { number: 7, lines: ["Year", "Coding Experience"], size: "text-xs" },
        { number: 500, lines: ["Codes", "Committed"], size: "text-xs" },
    ];

    return (
        <>
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </>
    );
};

export default StatsSection;
