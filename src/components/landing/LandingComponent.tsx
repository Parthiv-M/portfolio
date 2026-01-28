import Bio from './Bio';
import Photo from './Photo';
import Stack from './Stack';

export const LandingComponent = () => {
    return (
        <div className="mb-2">
            <div className='min-h-[calc(100vh-15vh)] flex flex-col md:grid md:grid-cols-12 gap-2'>
                <div className='flex-1 md:col-span-6 lg:col-span-8 border rounded-md min-h-[400px] md:min-h-0'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Photo />
                </div>
                <div className='flex-1 md:col-span-6 lg:col-span-4 border rounded-md'><Bio /></div>
            </div>
            <div className='lg:h-screen border rounded-md mt-2'>
                <Stack />
            </div>
        </div>
    );
};
