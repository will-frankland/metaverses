'use client';

import { motion } from "framer-motion";

import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Insight" textStyles="text-center"/>
      <TitleText title="Insight about metaverse" textStyles="text-center" />
    </motion.div>
  </section>
);

export default Insights;
