import { motion } from 'framer-motion'
export default function MotionCard({ children }) {
return (
<motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-xl border border-black/10 dark:border-white/10">
{children}
</motion.div>
)
}