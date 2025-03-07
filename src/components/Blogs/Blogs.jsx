import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';
import{ motion } from 'framer-motion';
import BlogCard1 from '../../assets/blogs/blog1.jpg';
import BlogCard2 from '../../assets/blogs/blog2.jpg';
import BlogCard3 from '../../assets/blogs/blog3.jpg';
import BlogCard4 from '../../assets/blogs/blog4.jpg';

const BlogsData = [
    {
        id: 1,
        title: 'Como identificar as melhores oportunidades em leilões da Caixa',
        desc: 'Aprenda as estratégias para encontrar imóveis com potencial de valorização em leilões bancários.',
        img: BlogCard1,
        link: '#',
    },
    {
        id: 2,
        title: 'Os 5 erros mais comuns ao investir em imóveis de leilão',
        desc: 'Evite prejuízos conhecendo as principais armadilhas que afetam investidores iniciantes.',
        img: BlogCard2,
        link: '#',
    },
    {
        id: 3,
        title: 'Guia completo: Da arrematação à reforma do imóvel',
        desc: 'Passo a passo para transformar uma propriedade arrematada em leilão em um excelente investimento.',
        img: BlogCard3,
        link: '#',
    },
    {
        id: 4,
        title: 'Como calcular o potencial de valorização de um imóvel',
        desc: 'Métodos práticos para avaliar o retorno sobre investimento em propriedades de leilão.',
        img: BlogCard4,
        link: '#',
    },
]

const Blogs = () => {
    return (
        <>
            <section className='bg-gray-100'>
                <div className='container py-14'>
                    <h1 className='text-3xl font-bold text-center font-poppins m-8'>
                        Blogs
                    </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5'>
                        {BlogsData.map((blog) => {
                           return (
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: 'black',
                                    zIndex: 999,
                                    followSpeed: 1.5,
                                    text: 'Leia',
                                    textFontSize: '3px',
                                    scale: 5,
                                }}
                            >
                                <div className='flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
                                    <img src={blog.img} alt='blog' />
                                    <div className='space-y-2'>
                                        <h2 className='text-xl font-bold line-clamp-2'>
                                            {blog.title}
                                        </h2>
                                        <p className='line-clamp-2'>{blog.desc}</p>
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={blog.link}
                                            className='text-primary'
                                        >
                                            Saiba mais
                                        </motion.a>
                                    </div>
                                </div>
                            </UpdateFollower>
                            )
                        })} 
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs