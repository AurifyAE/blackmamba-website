'use client'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

type ProductCardProps = {
  imageSrc: string
  imageAlt?: string
  price: string
  title: string
  location: string
  beds: number | string
  baths: number | string
  area: string
  href?: string
  onClick?: () => void
  className?: string
}

export default function ProductCard({
  imageSrc, 
  imageAlt = '', 
  price, 
  title, 
  location, 
  beds, 
  baths, 
  area, 
  href, 
  onClick, 
  className
}: ProductCardProps) {
  const content = (
    <div className={clsx('relative aspect-square overflow-hidden group', className)} onClick={onClick}>
      <Image 
        src={imageSrc} 
        alt={imageAlt} 
        fill 
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 flex items-end justify-between gap-2 sm:gap-3">
        <div className="text-white flex-1 min-w-0">
          <div className="text-base sm:text-lg font-bold leading-tight">{price}</div>
          <div className="text-xs sm:text-sm leading-tight opacity-95 truncate">{title}</div>
          <div className="text-xs sm:text-sm leading-tight opacity-80 truncate">{location}</div>
        </div>
        <div className="shrink-0 text-[10px] sm:text-xs text-white/90">
          <div className="flex gap-1 sm:gap-2 text-center">
            <div className="pr-1 border-r border-white/30">
              <div className="leading-tight">{beds}</div>
              <div className="leading-tight">Beds</div>
            </div>
            <div className="px-1 border-r border-white/30">
              <div className="leading-tight">{baths}</div>
              <div className="leading-tight">Baths</div>
            </div>
            <div className="pl-1">
              <div className="leading-tight">{area}</div>
              <div className="leading-tight">Sq. Ft.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return href ? (
    <Link href={href} className="block focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl">
      {content}
    </Link>
  ) : content
}
