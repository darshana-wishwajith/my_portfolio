import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Full-Stack Software Engineer",
  "Entrepreneur",
  "Web Designer",
  "Web Developer",
  "Front-End Developer",
  "Back-End Developer",
  "UI/UX Designer",
  "Graphic Designer",
];

export default function RotatingTypewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let current = 0;
    const fullText = roles[index];
    const interval = setInterval(() => {
      setText(fullText.slice(0, current + 1));
      current++;
      if (current === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 2000); // pause before next role
      }
    }, 70); // typing speed

    return () => clearInterval(interval);
  }, [index]);

  return (
    <h1 className="!text-[40px] lg:!text-[50px] font-extrabold bg-gradient-to-r from-priamry to-priamry/25 text-transparent bg-clip-text leading-20">
      {text}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1 inline-block w-[2px] h-[1em] align-[-0.1em] bg-current"
      />
    </h1>
  );
}
