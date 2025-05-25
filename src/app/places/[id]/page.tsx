import Link from "next/link"
import Image from 'next/image';

interface PlacePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PlacePage({ params }: PlacePageProps) {
  const resolvedParams = await params;
  console.log(resolvedParams)

  const res = await fetch(`https://airbnb-backend-qwox.onrender.com/houses/${resolvedParams.id}`, {
    next: { revalidate: 86400 },
  })
  if (!res.ok) {
    return <h1>House not found</h1>
  }

  const place = await res.json()

  return (
    <main className='p-6 max-w-4xl mx-auto'>
      <Link href='/' className='text-blue-600 mb-4 inline-block'>
        ← Back
      </Link>

      <h1 className='text-3xl font-bold mb-4'>{place.title}</h1>

      <Image
        src={place.images[0]}
        alt={place.title}
        width={600}
        height={400}
        className='rounded-lg object-cover mb-6'
      />

      <p className='mb-2 font-semibold text-lg'>Price: {place.price}$ night</p>
      <p className='mb-4'>{place.description}</p>

    </main>
  )
}