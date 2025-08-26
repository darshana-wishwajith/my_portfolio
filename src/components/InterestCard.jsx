import { motion } from "framer-motion";

const InterestCard = (props) => {
    return(
      
    <motion.div
      className="flex justify-center items-center rounded-[10px] bg-interest-bg md:w-[150px] md:h-[150px] w-[180x] h-[180px] text-center border border-stroke shadow shadow-black "
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 28px rgba(64,113,197,0.45), 0 0 60px rgba(64,113,197,0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      tabIndex={0}
    >
      <p className="!text-[15px] font-semibold bg-gradient-to-r from-priamry to-priamry/50 text-transparent bg-clip-text">
        {props.name}
      </p>
    </motion.div>

    )
}

export default InterestCard