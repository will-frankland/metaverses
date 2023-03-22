'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >

    </motion.div>
  </section>
);

export default Feedback;
