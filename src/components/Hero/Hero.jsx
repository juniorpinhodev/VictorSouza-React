import React from 'react';
import { motion } from 'framer-motion';
import { UpdateFollower } from 'react-mouse-follower';
import { FaArrowRight } from 'react-icons/fa';
import BgImageCasa from '../../assets/BgImage.jpg';
import VictorPng from '../../assets/Victor.png';

const bgImage = {
    backgroundImage: `url(${BgImageCasa})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

const Hero = () => {
  return (
    <main style={bgImage}>
        <div className='bg-gradient-to-r from-primary to bg-primaryDark/90'>
            <div className='container text-white'>
                {/* Layout para desktop (visível apenas em telas médias e grandes) */}
                <section className='hidden md:grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px]'>
                    {/* Texto */}
                    <div className='space-y-8'>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.4,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='space-y-8'
                        >
                            <h1 className='text-5xl lg:text-7xl font-bold leading-tight uppercase'>
                                Victor <br /> {" "}<span className='text-transparent text-outline'>Souza</span>
                            </h1>

                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 1000,
                                    followSpeed: 1.6,
                                    scale: 5,
                                    mixBlendMode: 'soft-light',
                                }}
                            >
                                <button className='outline-btn flex justify-center items-center gap-2 group'>
                                    Explore
                                    <FaArrowRight className='group-hover:translate-x-2 transition'/>  
                                </button>
                            </UpdateFollower>
                        </motion.div>

                        {/* Investidor imobiliário */}
                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.8,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='bg-black/40 p-6 space-y-2 lg:max-w-[350px] !mt-[60px]'
                        >
                            <h1 className='text-xl uppercase'>Investidor Imobiliário</h1>
                            <p className='text-xs leading-loose'>
                                Victor Souza é um investidor imobiliário especializado em leilões de casas. Com experiência no mercado, ele identifica excelentes oportunidades para investimento e revenda. Além disso, compartilha seu conhecimento, ensinando estratégias para quem deseja lucrar com leilões, desde a arrematação até a valorização e venda dos imóveis.
                            </p>
                        </motion.div>
                    </div>

                    {/* Imagem */}
                    <div className='relative'>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: 'white',
                                zIndex: 1000,
                                followSpeed: 1.6,
                                scale: 5,
                                mixBlendMode: 'soft-light',
                            }}
                        >
                            <motion.img 
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ opacity: 1, x: 7, scale: 1 }}
                                transition={{ duration: 1 }}
                                src={VictorPng} 
                                alt="Victor Souza" 
                                className="w-full max-w-[360px] relative z-30 h-auto"
                                style={{
                                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 83%)',
                                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)'
                                }} 
                            />
                        </UpdateFollower>

                        {/* Círculo com sombras */}
                        <motion.div 
                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.2,
                                damping: 10,
                                delay: 0.8,
                            }}
                            className='border-[20px] border-cyan-200 rounded-full h-[180px] w-[180px] md:h-[300px] md:w-[300px] absolute top-3 left-1/4 glowing-shadow glowing-shadow-inset' 
                        />

                        {/* Texto de fundo */}
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.8,
                                damping: 10,
                                delay: 1.4,
                            }}
                            className='absolute -top-40 left-0 z-[1]'
                        >
                            <h1 className='text-[180px] font-bold text-cyan-200/10 leading-none'>Victor</h1>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, x: 227, y: 106 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.8,
                                damping: 10,
                                delay: 1.6,
                            }}
                            className='absolute -top-40 left-0 z-[1]'
                        >
                            <h1 className='text-[180px] font-bold text-cyan-200/10 leading-none'>Souza</h1>
                        </motion.div>
                    </div>
                </section>

                {/* Layout para mobile (visível apenas em telas pequenas) */}
                <section className='md:hidden grid grid-cols-1 min-h-[800px]'>
                    {/* Texto no topo esquerdo */}
                    <div className='pt-12'>
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                type: 'spring',
                                delay: 1,
                                duration: 0.4,
                                stiffness: 100,
                                damping: 7,
                            }}
                            className='space-y-8'
                        >
                            <h1 className='text-5xl font-bold leading-tight uppercase'>
                                Victor <br /> {" "}<span className='text-transparent text-outline'>Souza</span>
                            </h1>

                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'white',
                                    zIndex: 1000,
                                    followSpeed: 1.6,
                                    scale: 5,
                                    mixBlendMode: 'soft-light',
                                }}
                            >
                                <button className='outline-btn flex justify-center items-center gap-2 group'>
                                    Explore
                                    <FaArrowRight className='group-hover:translate-x-2 transition'/>  
                                </button>
                            </UpdateFollower>
                        </motion.div>
                    </div>
                    
                    {/* Imagem no topo direito */}
                    <div className='relative mt-6 flex justify-end'>
                        <motion.img 
                            initial={{ opacity: 0, x: 200 }}
                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 1 }}
                            src={VictorPng} 
                            alt="Victor Souza" 
                            className="max-w-[200px] w-auto h-auto relative z-30 object-contain"
                            style={{
                                WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 83%)',
                                maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%)'
                            }} 
                        />
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                type: 'spring',
                                stiffness: 100,
                                duration: 0.2,
                                damping: 10,
                                delay: 0.8,
                            }}
                            className='border-[15px] border-cyan-200 rounded-full h-[160px] w-[160px] absolute top-0 right-[20px] glowing-shadow glowing-shadow-inset' 
                        />
                    </div>
                    
                    {/* Investidor imobiliário abaixo do texto */}
                    <motion.div 
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ 
                            type: 'spring',
                            delay: 1,
                            duration: 0.8,
                            stiffness: 100,
                            damping: 7,
                        }}
                        className='bg-black/40 p-6 space-y-2'
                    >
                        <h1 className='text-xl uppercase'>Investidor Imobiliário</h1>
                        <p className='text-xs leading-loose'>
                            Victor Souza é um investidor imobiliário especializado em leilões de casas. Com experiência no mercado, ele identifica excelentes oportunidades para investimento e revenda. Além disso, compartilha seu conhecimento, ensinando estratégias para quem deseja lucrar com leilões, desde a arrematação até a valorização e venda dos imóveis.
                        </p>
                    </motion.div>
                </section>
            </div>
        </div>
    </main>
  );
};

export default Hero;