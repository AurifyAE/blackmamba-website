import React from 'react'
import Image from "next/image";

const ContactNavbar = () => {
  return (
    <div className='fixed bottom-4 left-1/2 -translate-x-1/2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-0 bg-black/70 py-4 sm:py-10 rounded-2xl sm:rounded-full z-50'>
        <div className="flex flex-row sm:flex-col gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              <button className="flex flex-col items-center gap-1 sm:gap-2 text-white px-3 rounded-md hover:bg-neutral-600 transition-colors text-[10px] tracking-wider">
                <Image src="/images/enquiry.svg" alt="" width={25} height={25} />
                ENQUIRY
              </button>
              <button className="flex flex-col items-center gap-1 sm:gap-2 text-white px-3 rounded-md hover:bg-neutral-600 transition-colors text-[10px] tracking-wider">
                <Image src="/images/phone.svg" alt="" width={25} height={25} />
                CALL
              </button>
              <button className="flex flex-col items-center gap-1 sm:gap-2 text-white px-3 rounded-md hover:bg-neutral-600 transition-colors text-[10px] tracking-wider">
                <Image src="/images/whatsapp.svg" alt="" width={25} height={25} />
                WHATSAPP
              </button>
            </div>
    </div>
  )
}

export default ContactNavbar