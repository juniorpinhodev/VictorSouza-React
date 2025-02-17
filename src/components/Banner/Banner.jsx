import React from 'react';
import House from '../../assets/house.png';
import { motion } from 'framer-motion';


const Banner = () => {
  return (
    <section>
      <div className="container py-14">
        <div className="flex flex-row items-center gap-12">
          {/* Banner house img */}
          <div>
            <motion.img 
            initial={{ opacity: 0, x: -100,}}
            animate={{ opacity: 1, x: 0, rotate: 0}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut"}}
            src={House} alt="House" className="w-[300px] md:w-[400px]" 
            />
          </div>

          {/* Banner text */}
          <div className="flex-1">
            <div className="text-left space-y-4">
              <h1 className="text-3xl lg:text-4xl font-semibold font-poppins">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
                quos minima quia unde quo suscipit delectus, commodi iure, ipsam
                iste distinctio accusamus sequi rerum doloremque perferendis
                veniam totam, dolorem impedit?
              </p>
              <button className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white">
                Clique
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;