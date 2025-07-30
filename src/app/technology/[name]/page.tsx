import { NavBar } from '@/components/NavBar';
import { TechnologyList } from '@/components/TechnologyList';
import { barlow, barlow_condensed, bellefair } from '@/lib/fonts';
import { technologyRepository } from '@/repositories/technology';
import Image from 'next/image';

type TechnologyPageProps = {
    params: Promise<{ name: string }>;
};

export default async function TechnologyPage({ params }: TechnologyPageProps) {
    const { name } = await params;

    const technology = await technologyRepository.findByTechnologyName(name);

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] overflow-x-hidden">
            <NavBar onPage='technology' />
            <main className='flex flex-col items-center sm:p-10'>
                <h2
                    className={`pb-6 gap-6 flex text-white text-md ${barlow_condensed.className} sm:text-xl sm:self-start lg:pb-10 lg:text-3xl`}
                >
                    <span className='opacity-25'>03</span> SPACE LAUNCH 101
                </h2>
                <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-evenly'>
                    <div className='relative w-screen h-[258px] mt-16 lg:hidden'>
                        <Image
                            alt={technology.name}
                            src={technology.images.landscape}
                            fill
                            className='object-cover'
                            priority
                            sizes='100vw'
                        />
                    </div>

                    <div className='relative h-[650px] w-[45%] mt-16 hidden lg:block lg:order-3'>
                        <Image
                            alt={technology.name}
                            src={technology.images.portrait}
                            fill
                            className='object-cover'
                            priority
                            sizes='(min-width: 768px) 40vw'
                        />
                    </div>

                    <div className='mt-8 mb-10'>
                        <TechnologyList technology={technology} />
                    </div>
                    <div className='flex flex-col gap-4 items-center w-[80%] mb-12 lg:items-start lg:w-[35%]'>
                        <h2
                            className={`text-white/50 ${bellefair.className} text-lg lg:text-[32px]`}
                        >
                            THE TERMINOLOGY…
                        </h2>
                        <h1
                            className={`text-white text-2xl ${bellefair.className} lg:text-[56px]`}
                        >
                            {technology.name.toUpperCase()}
                        </h1>
                        <p
                            className={`text-blue-300 text-md ${barlow.className} text-center lg:text-start lg:text-lg`}
                        >
                            {technology.description}
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
