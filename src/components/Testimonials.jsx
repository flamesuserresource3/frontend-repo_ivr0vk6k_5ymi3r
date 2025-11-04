export default function Testimonials() {
  const items = [
    {
      name: 'Ava M.',
      quote:
        'Fitney helped me build a routine I actually love. Down 8kg and feeling stronger every week!',
      role: 'Runner & Foodie',
      color: 'bg-yellow-100',
    },
    {
      name: 'Jordan P.',
      quote:
        'The challenges keep me accountable. I close my rings before dinner now!',
      role: 'Busy Parent',
      color: 'bg-yellow-50',
    },
    {
      name: 'Sam R.',
      quote: 'Clear, simple, motivating. My sleep and energy are finally aligned.',
      role: 'Designer',
      color: 'bg-yellow-100',
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-yellow-50/40 to-white" />
      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Real people, real progress</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Stories from the Fitney community.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className={`rounded-3xl ${t.color} p-6 shadow-sm ring-1 ring-gray-100`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-white shadow-sm ring-1 ring-gray-100 flex items-center justify-center text-yellow-600 font-bold">
                  {t.name.split(' ')[0][0]}
                </div>
                <div>
                  <figcaption className="font-semibold text-gray-900">{t.name}</figcaption>
                  <div className="text-xs text-gray-600">{t.role}</div>
                </div>
              </div>
              <blockquote className="text-gray-800">“{t.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
