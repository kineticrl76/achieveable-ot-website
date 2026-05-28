import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | AchieveAble OT',
  description: 'Photos from AchieveAble OT — a peek inside our warm, child-friendly therapy spaces.',
};

const placeholders = [
  { label: 'Sensory Gym', emoji: '🌀', bg: 'bg-violet-100' },
  { label: 'Fine Motor Activities', emoji: '✏️', bg: 'bg-amber-50' },
  { label: 'Summer Camp Fun', emoji: '☀️', bg: 'bg-yellow-50' },
  { label: 'Feeding Therapy', emoji: '🥗', bg: 'bg-green-50' },
  { label: 'Group Sessions', emoji: '🤸', bg: 'bg-blue-50' },
  { label: 'Handwriting Station', emoji: '📝', bg: 'bg-pink-50' },
  { label: 'Sensory Play', emoji: '🎨', bg: 'bg-orange-50' },
  { label: 'Therapy Equipment', emoji: '🪁', bg: 'bg-teal-50' },
  { label: 'Our Clinic', emoji: '🏥', bg: 'bg-violet-50' },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Take a Look Inside</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-violet-100 text-lg max-w-2xl">
            A peek inside our warm, vibrant, child-friendly therapy spaces — where the real work (and fun!) happens.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-10 text-sm text-amber-800 text-center">
            📸 <strong>Note for site owner:</strong> Replace the placeholder cards below with real photos. Each card maps to a category — just swap in <code className="bg-amber-100 px-1 rounded">{'<Image>'}</code> components with your actual photos.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map(({ label, emoji, bg }) => (
              <div
                key={label}
                className={`${bg} rounded-2xl aspect-video flex flex-col items-center justify-center gap-2 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer`}
              >
                <span className="text-5xl">{emoji}</span>
                <span className="text-sm font-semibold text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
