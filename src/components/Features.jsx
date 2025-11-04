import { Activity, HeartPulse, Salad, Trophy } from 'lucide-react';

const features = [
  {
    title: 'Track Workouts',
    desc: 'Log runs, lifts, and classes with automatic insights and progress trends.',
    icon: Activity,
  },
  {
    title: 'Monitor Health',
    desc: 'Stay on top of heart rate, sleep, and recovery with friendly reminders.',
    icon: HeartPulse,
  },
  {
    title: 'Plan Meals',
    desc: 'Balanced meal plans and macros made simple with smart suggestions.',
    icon: Salad,
  },
  {
    title: 'Join Challenges',
    desc: 'Compete with friends, unlock badges, and celebrate milestones.',
    icon: Trophy,
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to feel great</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          A clean, focused toolkit to keep you consistent and energized.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-600 shadow-sm">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
