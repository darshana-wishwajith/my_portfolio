import { motion } from "framer-motion";

const EduTimeline = ({details}) => {
  return (
      // <div className="flex items-center gap-10">
      //   <div className="relative">
      //       <div className="w-px h-[50px] border border-stroke ms-1"></div>
      //       <div className="w-4 h-4 rounded-full bg-priamry outline-4 outline-priamry/50 absolute left-0"></div>
      //       <div className="w-px h-[50px] border border-stroke ms-1"></div>
      //   </div>
      //   <div>
      //       <p>{details.period}</p>
      //       <h5 className="text-priamry font-semibold">{details.title}</h5>
      //       <small className="!text-[12px] text-font-light">{details.place}</small>
      //   </div>
      // </div>

      <motion.div
      className="flex items-center gap-10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* left track with glowing dot */}
      <div className="relative">
        <div className="w-px h-[50px] border border-stroke ms-1" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          {/* pulsing ring */}
          <motion.span
            className="absolute inset-[-8px] rounded-full border border-[#4071C5]/50"
            animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
          />
          {/* solid dot */}
          <span className="block w-4 h-4 rounded-full bg-[#4071C5]" />
        </div>
        <div className="w-px h-[50px] border border-stroke ms-1" />
      </div>

      {/* content */}
      <div>
        <p className="text-white/80">{details.period}</p>
        <h5 className="text-[#4071C5] font-semibold">{details.title}</h5>
        <small className="!text-[12px] text-white/60">{details.place}</small>
      </div>
    </motion.div>
  );
};

export default EduTimeline;
