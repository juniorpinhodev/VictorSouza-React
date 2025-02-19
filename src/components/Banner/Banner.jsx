import React from 'react';
import House from '../../assets/house.png';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';


const Banner = () => {
  return (
    <section>
      <div className="container py-14">
        <div className="flex flex-row items-center gap-12">
          {/* Banner house img */}
          <div>
            <motion.img 
            initial={{ opacity: 0, x: -100,}}
            whileInView={{ opacity: 1, x: 0, rotate: 0}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
            src={House} alt="House" className="w-[300px] md:w-[400px]" 
            />
          </div>

          {/* Banner text */}
          <div className="flex-1">
            <div className="text-left space-y-4">
              <motion.h1 
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                  type: 'spring',
                  delay: 0.8,
                  duration: 0.8,
                  stiffness: 20,
                  damping: 6,
              }}
              className="text-3xl lg:text-4xl font-semibold font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </motion.h1>
              <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                  type: 'spring',
                  delay: 0.8,
                  duration: 0.8,
                  stiffness: 20,
                  damping: 6,
              }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                quos minima quia unde quo suscipit delectus, commodi iure, ipsam
                iste distinctio accusamus sequi rerum doloremque perferendis
                veniam totam, dolorem impedit?
              </motion.p>
             
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: 'white',
                  zIndex: 1000,
                  followSpeed: 1.6,
                  scale: 5,
                  mixBlendMode: 'soft-light',
                }}
              >
                <motion.button 
                initial={{ opacity: 0, x: -100,}}
                whileInView={{ opacity: 1, x: 0, rotate: 0}}
                transition={{ duration: 0.8, delay: 1, ease: "easeInOut"}}
                className= "font-varela border-2 border-[#2b9de6] text-[#2b9de6] px-6 py-2 rounded-md hover:bg-[#2b9de6] hover:text-white"
                >
                  Clique
                </motion.button>
              </UpdateFollower>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;