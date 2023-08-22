import { motion } from "framer-motion";

export default function StatChart({ base_stat, color }) {
  const duration = base_stat <= 50 ? 1 : 2;
  return (
    <div className="w-full rounded-lg overflow-hidden bg-neutral-400 h-1">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        style={{ height: "100%" }}
        transition={{ duration, delay: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          style={{
            width: `${base_stat}%`,
            backgroundColor: color,
            height: "100%",
          }}
        />
      </motion.div>
    </div>
  );
}
