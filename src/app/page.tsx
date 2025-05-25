import Link from 'next/link';
import Image from 'next/image';
import { Place } from './types';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const res = await fetch('https://airbnb-backend-qwox.onrender.com/houses', {
    next: { revalidate: 86400 },
  })
  const places = await res.json();

  return (
    <div className='
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-4 
      [@media(min-width:1640px)]:grid-cols-5 
      [@media(min-width:1880px)]:grid-cols-6
      gap-y-10 
      gap-x-6 
      px-6 
      md:px-[40px] 
      mt-6 
      md:mt-4'
    >
      {places.map((place: Place) => (
        <Link 
          href={`/places/${place._id}`}
          key={place._id}
        >
          <div className='w-[250px] h-[250px] relative mb-3'>
          <Image
            src={place.images[0]}
            alt={place.title}
            fill
            className='rounded-xl object-cover mb-3'
          />
          </div>
          <div className='text-sm'>
            <h2 className='font-medium'>{place.title}</h2>
            <p><span className='font-medium'>{place.price}$</span> night</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
