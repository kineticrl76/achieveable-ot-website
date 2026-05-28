import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | AchieveAble OT',
  description: 'Photos from AchieveAble OT — a peek inside our warm, child-friendly therapy spaces.',
};

const sensoryGym = [
  { src: '/images/gym/1Sensory-Gym1-scaled-640x640_c.jpg', alt: 'Sensory Gym' },
  { src: '/images/gym/1Sensory-Gym2-scaled-640x640_c.jpg', alt: 'Sensory Gym' },
  { src: '/images/gym/1Sensory-Gym3-scaled-640x640_c.jpg', alt: 'Sensory Gym' },
  { src: '/images/gym/Gym-office-side3-scaled-640x640_c.jpg', alt: 'Clinic Space' },
  { src: '/images/gym/Gym-office-side4-scaled-640x640_c.jpg', alt: 'Clinic Space' },
  { src: '/images/gym/Gym-office-side-scaled-640x640_c.jpg', alt: 'Clinic Space' },
  { src: '/images/gym/Gym-office-side2-640x640_c.jpg', alt: 'Clinic Space' },
  { src: '/images/gym/IMG_3634-scaled-640x640_c.jpeg', alt: 'Therapy Session' },
  { src: '/images/gym/IMG_3635-scaled-640x640_c.jpeg', alt: 'Therapy Session' },
  { src: '/images/gym/IMG_3797-640x640_c.jpeg', alt: 'Therapy Session' },
  { src: '/images/gym/IMG_3755-1024x652-640x640_c.jpg', alt: 'Therapy Session' },
  { src: '/images/gym/IMG_3786-scaled-640x640_c.jpeg', alt: 'Therapy Session' },
  { src: '/images/gym/IMG_4225-scaled-640x640_c.jpeg', alt: 'Therapy Session' },
];

const littleChamps = [
  { src: '/images/champs/IMG_0037-768x1024-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_1131-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_1582-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2539-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2033-1024x768-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/Keva-1024x768-640x640_c.jpg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_9162-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_3511-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_0358-768x1024-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2028-768x1024-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2434-768x1024-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_4740-769x1024-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_4707-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2129-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_2235-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_3279-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_3580-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_3615-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_3620-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_4484-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_6094-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_9102-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/IMG_9120-scaled-640x640_c.jpeg', alt: 'Little Champ' },
  { src: '/images/champs/1Kevin-new-766x1024-640x640_c.jpg', alt: 'Little Champ' },
];

function PhotoGrid({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {photos.map((photo, i) => (
        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-violet-50 group">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Take a Look Inside</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            A peek inside our warm, vibrant, child-friendly therapy spaces — where the real work (and fun!) happens.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🌀</span>
            <h2 className="text-2xl font-extrabold text-gray-900">Sensory Gym &amp; Clinic</h2>
          </div>
          <PhotoGrid photos={sensoryGym} />
        </div>
      </section>

      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl font-extrabold text-gray-900">Our Little Champs @ AchieveAble OT</h2>
          </div>
          <PhotoGrid photos={littleChamps} />
        </div>
      </section>
    </>
  );
}
