"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Donation() {
    useEffect(() => {
        document.title = "Donations | Masjid-E-Khazra";
    }, []);

    const router = useRouter();

    const payZelle = () => {
        router.push("https://www.zellepay.com");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
            <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl mt-1 mb-8 animate-fadeInUp">
                <div className="w-full max-w-xl text-center mb-8 animate-fadeInUp">
                    <h1 className="text-lg font-semibold text-gray-700">Masjid-E-Khazra</h1>
                    <h2 className="font-bold text-4xl text-gray-900 mt-2">Donations</h2>
                </div>

                <div className="flex flex-col w-full max-w-lg justify-center text-center animate-fadeInUp">
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Email for Zelle</h2>
                        <p className="text-gray-600">masjidkhazrany@gmail.com</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-12">
                    <Button onClick={payZelle} className="bg-indigo-700" aria-label="Donate via Zelle">Donate to Zelle</Button>

                    <Image 
                        alt="Masjid E Khazra"
                        src="/images/zelle.jpeg"
                        width={1000}
                        height={600}
                        className="rounded-lg shadow-2xl mt-5 animate-fadeInUp mb-7"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default Donation;