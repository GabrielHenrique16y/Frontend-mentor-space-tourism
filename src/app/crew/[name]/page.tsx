import { CrewList } from '@/components/CrewList';
import { NavBar } from '@/components/NavBar';
import { barlow, barlow_condensed, bellefair } from '@/lib/fonts';
import { crewRepository } from '@/repositories/crew';
import Image from 'next/image';

type CrewPageProps = {
    params: Promise<{ name: string }>;
};

export default async function CrewPage({ params }: CrewPageProps) {
    const { name } = await params;
    const crew = await crewRepository.findByCrewName(name);

    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-[url('/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] md:bg-[url('/assets/crew/background-crew-desktop.jpg')]">
            <NavBar onPage='crew' />
            <main className='flex flex-col items-center p-6 sm:p-10 sm:pb-0 md:p-12'>
                <h2
                    className={`pb-6 gap-6 flex text-white text-md ${barlow_condensed.className} sm:text-xl sm:self-start md:pb-10 md:text-3xl`}
                >
                    <span className='opacity-25'>02</span> MEET YOUR CREW
                </h2>
                <div className='mt-10 flex flex-col justify-center items-center gap-6 sm:max-w-[75%] md:grid md:grid-cols-2 md:gap-8 md:max-w-full md:mt-0'>
                    <div className='flex flex-col items-center md:items-start'>
                        <div className='flex flex-col'>
                            <div className='gap-2 flex flex-col'>
                                <h2
                                    className={`text-white/50 text-lg text-center ${bellefair} sm:text-2xl md:text-start`}
                                >
                                    {crew.role.toUpperCase()}
                                </h2>
                                <h1
                                    className={`text-white text-2xl text-center ${bellefair.className} sm:text-[40px] md:text-start`}
                                >
                                    {crew.name.toUpperCase()}
                                </h1>
                            </div>
                            <div>
                                <p
                                    className={`text-blue-300 ${barlow.className} text-[15px] text-center md:text-start`}
                                >
                                    {crew.bio}
                                </p>
                            </div>
                        </div>
                        <div className='mt-8'>
                            <CrewList crew={crew} />
                        </div>
                    </div>
                    <div className='w-fit p-4'>
                        <Image
                            src={crew.images.png}
                            alt={crew.name}
                            width={300}
                            height={400}
                            className='
                            w-[272px] h-[340px] sm:w-[447px] sm:h-[560px] md:h-[676px] md:w-[540px] 
            object-contain
            [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]
            mask-size-full
            mask-repeat-no-repeat
          '
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
