import { useEffect, useState } from 'react';

const TypewriterText = () => {
  const fullText = `I build and maintain full-stack applications using tools like HTML, CSS, JavaScript, Node.js, React, MySQL, MongoDB, React Native, Git, Tailwind CSS, and Bootstrap. Currently, I’m expanding my kit with powerful tools like Docker, Apache Kafka, and Kubernetes — constantly exploring technologies that help me scale better, build faster, and deploy smarter.`;

  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 25); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <p className="font-robotoMono text-xs md:text-sm text-white text-justify m-2">
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypewriterText;
