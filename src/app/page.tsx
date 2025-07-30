import { Container } from '@/components/Container';
import { ExplorerButton } from '@/components/ExplorerButton';
import { NavBar } from '@/components/NavBar';
import { barlow, barlow_condensed, bellefair } from '@/lib/fonts';

export default function Home() {
    return (
        <Container>
            <NavBar onPage='home'/>
            <main className='flex flex-col items-center justify-center p-6 h-full md:flex-row md:mt-36 md:justify-between md:max-w-[1110px] md:mx-auto'>
                <div className='flex flex-col gap-4 justify-center items-center sm:max-w-[512px] md:justify-start md:items-start'>
                    <h6
                        className={`text-blue-300 text-md ${barlow_condensed.className} sm:text-[28px]`}
                    >
                        SO, YOU WANT TO TRAVEL TO
                    </h6>
                    <h1
                        className={`text-[80px] text-white ${bellefair.className} sm:text-[144px]`}
                    >
                        SPACE
                    </h1>
                    <p
                        className={`text-blue-300 text-sm ${barlow.className} text-center sm:text-md md:text-start md:text-lg`}
                    >
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <ExplorerButton />
            </main>
        </Container>
    );
}
