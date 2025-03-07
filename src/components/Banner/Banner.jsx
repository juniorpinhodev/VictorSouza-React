import React from 'react';
import House from '../../assets/house.png';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';


const Banner = () => {
  return (
    <section>
      <div className="container py-6">
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
                Transforme Leilões em Oportunidades de Investimento
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
                Descubra como investir de forma inteligente e segura em imóveis através de leilões. Com nossa expertise, você terá acesso a propriedades com alto potencial de valorização, suporte completo em todo o processo e estratégias comprovadas para maximizar seus resultados no mercado imobiliário.
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