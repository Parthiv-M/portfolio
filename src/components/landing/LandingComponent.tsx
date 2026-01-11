import Bio from './Bio';
import Stack from './Stack';

export const LandingComponent = () => {
    return (
        <div className="mb-2">
            <div className='min-h-[calc(100vh-15vh)] flex flex-col md:grid md:grid-cols-12 gap-2'>
                <div className='flex-1 md:col-span-8 border rounded-md flex items-end justify-center min-h-[400px] md:min-h-0'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/ppixel.png" alt='Parthiv Menon' className="w-full max-w-[300px] md:max-w-[400px]" />
                </div>
                <div className='md:col-span-4 border rounded-md'><Bio /></div>
            </div>
            <div className='h-[50vh] md:h-screen border rounded-md mt-2'>
                <Stack />
            </div>
        </div>
    );
};
