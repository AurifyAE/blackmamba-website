import React from 'react'
import Image from "next/image";

const ContactNavbar = () => {
  return (
    <div className='fixed right-1 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/70 py-10 rounded-full z-50'>
        <div className="flex flex-col gap-6 sm:gap-8">
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