import React from 'react';
import { UpdateFollower } from 'react-mouse-follower';

const BannerText = () => {
  return (
    <section className='pt-[0.1rem] pb-16 text-center font-poppins'>
        <div className='container'>
            <div className='bg-gradient-to-t from-primary to-primary/70 text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
                <UpdateFollower
                    mouseOptions={{
                        backgroundColor: 'black',
                        zIndex: 9999,
                        followSpeed: 0.5,
                        mixBlendMode: 'screen',
                        scale: 9,
                    }}
                >
                    <p className='font-bold text-4xl max-w-[700px] mx-auto leading-normal'>
                    Aprenda a investir em leilões com quem entende do assunto
                    </p>
                </UpdateFollower>
            </div>
        </div>
    </section>
  )
}

export default BannerText