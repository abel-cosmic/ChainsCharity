import { motion } from "framer-motion";
const PlaceHolder = ({ text }) => {
  return (
    <motion.div
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-row items-center px-4 py-2 bg-primary bg-opacity-10 text-secondary font-semibold rounded-full max-md:text-sm"
    >
      {text.toUpperCase()}
    </motion.div>
  );
};

export default PlaceHolder;
