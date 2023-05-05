import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container mx-auto px-8 md:px-16">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -90,
          borderRadius: "100%",
        }}
      >
      <div className="bg-red">hellow</div>
      </motion.div>
    </div>
  );
}
