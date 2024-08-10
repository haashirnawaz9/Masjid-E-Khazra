import Head from 'next/head';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-white">
        <div className="z-10 w-full max-w-6xl flex flex-col items-center justify-center font-medium text-sm text-black bg-white py-12 rounded-xlg text-center shadow-lg mb-8 mx-auto mt-8 p-4 sm:p-6 md:p-8 lg:p-12 animate-fadeInUp">
          <div className="flex flex-col items-center max-w-screen-lg mx-auto">
            <p className="flex flex-col w-[340px] items-center justify-center text-center">
              Assalaam Alaikum wa Rahmatullahu wa Barakatu
              السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
          </div>

          <div className="mt-5">
            <p>Welcome to the official website of</p>
            <h1 className="font-semibold text-4xl mb-5">Masjid-E-Khazra</h1>
            <h4 className="mb-3 max-w-screen-md mx-auto p-2">
              Masjid-E-Khazra is a Sunni mosque located in Queens, New York. It is known 
              for offering prayer services in both English and Urdu languages, making it accessible to a diverse group of worshippers. 
              The mosque provides separate prayer spaces for women, ensuring a comfortable and inclusive environment for female worshippers. 
              It also offers facilities for ablution (Odhu), a ritual cleansing before prayer.
            </h4>

            <h4 className="mb-3 max-w-screen-md mx-auto p-2">
              Masjid-E-Khazra holds the five daily prayers as well as the Jumu&apos;ah prayers, allowing 
              the Muslim community to come together in prayer and reflection. The mosque&apos;s commitment to 
              creating a welcoming space for worshippers of different languages and its inclusion of 
              separate prayer areas for women make it a place of unity and diversity.
            </h4>
          </div>

          <div>
            <h3 className="font-bold">Location: 23-38 81st St, Flushing, NY 11370, United States</h3>
            <Image 
              alt="Musjid E Khazra"
              src="/images/musjid-front.jpeg"
              width={700}
              height={200}
              className="rounded-lg shadow-2xl mt-8 animate-fadeInUp"
            />
            <Image 
              alt="Musjid E Khazra"
              src="/images/musjid-inside.png"
              width={700}
              height={200}
              className="rounded-lg shadow-2xl mt-8 animate-fadeInUp"
            />
          </div>

          <Button className="mt-8 bg-green-800 w-36 h-12 animate-fadeInUp">
            <Link href="/donation">Donate To Us</Link>
          </Button>
        </div>
      </main>
    </>
  );
}
