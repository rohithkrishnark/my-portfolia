// components/StatCard.jsx
const StatCard = ({ number, lines, size = "text-xs" }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-[45%] sm:w-[195px] items-center gap-2 bg-gray-700 py-5 md:py-7 px-3 rounded-md">
      <div className=" bg-green-900 text-4xl md:text-5xl font-bold text-white ">{number}</div>
      <div>
        {lines.map((line, idx) => (
          <p key={idx} className={`${size} font-robotoMono text-white text-center sm:text-start`}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
