'use client';

import { motion } from 'framer-motion';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import Bio from './Bio';

export const LandingComponent = () => {
    const data = usePortfolioData();

    return (
        <div className="mb-2">
            <div className='h-[calc(100vh-15vh)] grid grid-cols-12 gap-2'>
                <div className='col-span-8 border rounded-md flex items-end justify-center'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/ppixel.png" alt='Parthiv Menon' width={400} />
                </div>
                <div className='col-span-4 border rounded-md'><Bio /></div>
            </div>
            <div className='h-screen border rounded-md mt-2'></div>
        </div>
    );
};
