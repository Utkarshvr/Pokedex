import { motion } from "framer-motion";

import Search from "./Search";
import SelectFilterType from "./SelectFilterType";

export default function Filters() {
  return (
    <div className="flex items-center justify-between gap-3">
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
        style={{ width: "100%" }}
      >
        <Search placeholder={"Search"} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: "100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <SelectFilterType />
      </motion.div>
    </div>
  );
}
