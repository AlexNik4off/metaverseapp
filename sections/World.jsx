'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={(
          <>Track friends around you and invite them to play together in the same
            world
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px] object-cover"
      >
        <img src="/map.png" alt="map" className="w-full h-full" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[10%] w-[180px] h-[136px] p-[6px] sm:block hidden">
          <img src="people-05.png" alt="people" className="w-full h-full relative" />
          <p className="text-white text-[12px] absolute top-1/2 left-[40%]">+ 264 has joined</p>
          <h4 className="text-white text-[14px] absolute top-[70%] left-[30%]">The Upside Down</h4>
        </div>
        <div className="absolute top-[10%] right-[10%] w-[180px] h-[136px] p-[6px] sm:block hidden">
          <img src="people-06.png" alt="people" className="w-full h-full relative" />
          <p className="text-white text-[12px] absolute top-1/2 left-[40%]">+ 264 has joined</p>
          <h4 className="text-white text-[14px] absolute top-[70%] left-[40%]">Hawkins Labs</h4>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
