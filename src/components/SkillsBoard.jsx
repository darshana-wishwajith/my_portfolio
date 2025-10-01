import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SecondaryBtn from "./SecondaryBtn";
import { skills, filterBtns } from "../assets";

export default function SkillsBoard() {
  const [activeFilter, setActiveFilter] = useState("All Skills");
  const [cell, setCell] = useState(65);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCell(65 / 2);
      } else {
        setCell(65);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cols = 15;
  const rows = 6;

  const firstInnerRow = 1;
  const lastInnerRow = rows - 2;
  const firstInnerCol = 1;
  const lastInnerCol = cols - 2;

  let iconIdx = 0;
  let innerCounter = 0;

  const match = s =>
    activeFilter === "All Skills" ||
    (activeFilter === "UI/UX"
      ? ["Figma", "Photoshop", "Illustrator"].includes(s.name)
      : s.tags.includes(activeFilter));

  return (
    <section className="text-white">
      <div className="mb-4 flex flex-wrap gap-3">
        {filterBtns.map(btn => (
          <SecondaryBtn
            key={btn}
            text={btn}
            active={activeFilter === btn}
            onClick={() => setActiveFilter(btn)}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, ${cell}px))`,
          gridAutoRows: `${cell}px`,
        }}
      >
        {Array.from({ length: rows * cols }, (_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;

          const isInner =
            row >= firstInnerRow &&
            row <= lastInnerRow &&
            col >= firstInnerCol &&
            col <= lastInnerCol;

          let content = null;
          let tileClass = "";
          let title = "";

          if (isInner) {
            const placeHere = innerCounter % 2 === 0 && iconIdx < skills.length;
            innerCounter += 1;

            if (placeHere) {
              const icon = skills[iconIdx++];
              const isActive = match(icon);

              tileClass = isActive
                ? "rounded-[10px] bg-[#4071C5]/25 shadow-lg shadow-blue-500/50 transition"
                : "bg-[#4071C5]/10";

              title = icon.name;

              content = (
                <img
                  src={icon.src}
                  alt={icon.name}
                  className={`w-10 h-10 object-contain transition ${
                    isActive ? "filter-none" : "grayscale opacity-60"
                  }`}
                />
              );
            }
          }

          return (
            <motion.div
              key={i}
              className={`relative group grid place-items-center border border-dashed border-white/5 ${tileClass}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ scale: 1.12 }}
            >
              {content}

              {/* tooltip */}
              {title && (
                <motion.div
                  className="
                    pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                    px-3 py-1 rounded-md text-xs text-white
                    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg
                    opacity-0 translate-y-1
                    group-hover:opacity-100 group-hover:translate-y-0
                    transition
                  "
                >
                  {title}
                  {/* tiny arrow */}
                  <span
                    className="
                      absolute left-1/2 top-full -translate-x-1/2
                      w-2 h-2 rotate-45
                      bg-white/10 border-r border-b border-white/20 backdrop-blur-md
                    "
                  />
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}

  
