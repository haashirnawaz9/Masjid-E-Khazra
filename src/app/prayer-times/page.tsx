import axios from 'axios';
import { FC } from 'react';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  [key: string]: string;
}

async function fetchPrayerTimes(): Promise<PrayerTimes | null> {
  try {
    const response = await axios.get('https://api.aladhan.com/v1/timingsByCity', {
      params: {
        city: 'Queens',
        country: 'United States',
        method: 2,
      },
    });
    return response.data.data.timings as PrayerTimes;
  } catch (error) {
    console.error('Error fetching prayer times:', error);
    return null;
  }
}

const Page: FC = async () => {
  const prayerTimes = await fetchPrayerTimes();
  const date = new Date().toDateString();

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl mt-8 mb-8 animate-fadeInUp">
        <h1 className="text-2xl font-bold mb-4 text-center">Today&apos;s Date: {date}</h1>
        <div className="border border-gray-300 bg-white rounded-lg overflow-hidden">
          <div className="grid grid-cols-2 bg-green-800 text-white font-semibold">
            <div className="p-4 border-r border-gray-300">Prayer Name</div>
            <div className="p-4">Prayer Time</div>
          </div>
          <div>
            {prayerTimes ? (
              Object.entries(prayerTimes).map(([name, time]) => (
                <div key={name} className="grid grid-cols-2 border-b border-gray-300 animate-fadeInUp">
                  <div className="p-4 border-r border-gray-300">{name}</div>
                  <div className="p-4 text-right">{time}</div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">No prayer times available.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
