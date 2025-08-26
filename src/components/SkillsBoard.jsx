import { useState } from "react";
import SecondaryBtn from "./SecondaryBtn";
import { skills, filterBtns } from "../assets";

export default function SkillsBoard() {
  const [activeFilter, setActiveFilter] = useState("All Skills");

  const cols = 15;
  const rows = 6;
  const cell = 65;

  const firstInnerRow = 1;
  const lastInnerRow = rows - 2;
  const firstInnerCol = 1;
  const lastInnerCol = cols - 2;

  let iconIdx = 0;
  let innerCounter = 0;

  // filter logic
  const match = (s) => {
    if (activeFilter === "UI/UX") {
      return ["Figma", "Photoshop", "Illustrator"].includes(s.name);
    }
    return activeFilter === "All Skills" || s.tags.includes(activeFilter);
  };

  return (
    <section className="text-white">
      {/* filter buttons */}
      <div className="mb-4 flex flex-wrap gap-3">
        {filterBtns.map((btn) => (
          <SecondaryBtn
            key={btn}
            text={btn}
            active={activeFilter === btn}
            onClick={() => setActiveFilter(btn)}
          />
        ))}
      </div>

      {/* grid */}
      <div
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

          if (isInner) {
            const placeHere = innerCounter % 2 === 0 && iconIdx < skills.length;
            innerCounter += 1;

            if (placeHere) {
              const icon = skills[iconIdx++];
              const isActive = match(icon);

              tileClass = isActive ? "rounded-[10px] bg-[#4071C5]/25 filter-none shadow-lg shadow-blue-500/50 transition" : "bg-[#4071C5]/10";

              content = (
                <img
                  src={icon.src}
                  alt={icon.name}
                  title={icon.name}
                  className={`w-10 h-10 object-contain transition 
                    ${isActive 
                      ? "filter-none"  // glow effect
                      : "grayscale opacity-60"}`}
                />
              );
            }
          }

          return (
            <div
              key={i}
              className={`grid place-items-center border border-dashed border-white/5 ${tileClass}`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
