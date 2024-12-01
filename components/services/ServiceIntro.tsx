'use client';
import React from 'react';
import { motion } from 'framer-motion';
import WordPullUp from '../ui/word-pull-up';
import FlickeringGrid from '../ui/flickering-grid';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const ServiceIntro = () => {
  return (
    <div className="mt-14">
      <div className="bg-white p-8  py-20 relative overflow-hidden">
      <FlickeringGrid
         className="z-0 absolute inset-0 size-full"
         squareSize={20}
         gridGap={6}
         maxOpacity={0.05}
         flickerChance={0.1}/>
        <div
          className="absolute inset-1 bg-gradient-to-t from-primary/10 to-transparent opacity-40 animate-pulse rounded-lg"
          style={{ filter: 'blur(120px)' }}
        ></div>
        <div className="relative max-w-6xl m-auto">
        <WordPullUp
      className="text-4xl tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
      words="Welcome to"
    />
       <WordPullUp
      className="text-4xl tracking-[-0.02em] text-primary font-sans font-bold md:text-7xl md:leading-[5rem]"
      words="Tash-keel Express"
    />
          <motion.p
            className="text-xs md:text-base font-sans text-justify"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            At Tash-keel Express, we are your trusted partner in navigating the
            complexities of business setup, legal formalities, and government
            processes in the UAE. With years of experience and a dedicated team
            of professionals, we take pride in offering customized solutions for
            entrepreneurs, businesses, and individuals.
          </motion.p>
          <motion.p
            className="text-xs md:text-base font-sans mt-6 text-justify"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Whether you’re looking to establish a new business, secure essential
            approvals, or streamline personal and corporate services, we are
            here to simplify every step. Our comprehensive portfolio is designed
            to save you time, reduce stress, and ensure your goals are met
            efficiently and effectively.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;
