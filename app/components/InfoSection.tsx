"use client";
import { useRouter } from 'next/navigation';

const InfoSection = () => {
    const router = useRouter();
    return (
        <section className="px-4 sm:px-5 md:px-15 py-8 sm:py-12 sm:pt-24">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-black">A Short Glimpse through the Properties</h2>
                <p className="mt-3 text-black/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">1, 2 & 3 Bedroom Luxurious and Modern Interiors Apartments with Stunning Views to buy, rent or for short stay In Dubai</p>
            </div>
            <div className="mt-6 sm:mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div
                    // onClick={() => router.push('/buy')} 
                    className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg sm:text-xl font-medium text-white">To Buy</h3>
                        <p className="text-white/70 text-sm sm:text-base">Starting From AED 500,000</p>
                    </div>
                </div>
                <div onClick={() => router.push('/rental')} className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg sm:text-xl font-medium text-white">To Rent</h3>
                        <p className="text-white/70 text-sm sm:text-base">Starting From AED 110,000</p>
                    </div>
                </div>
                <div onClick={() => router.push('/shortstays')} className="bg-black p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] sm:col-span-2 lg:col-span-1 cursor-pointer">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-lg sm:text-xl font-medium text-white">To Short Stay</h3>
                        <p className="text-white/70 text-sm sm:text-base">Starting From AED 800/night</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoSection;