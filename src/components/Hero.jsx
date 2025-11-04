import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-yellow-50/70 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-700 px-4 py-1 text-sm font-medium shadow-sm">
            <Rocket className="h-4 w-4" />
            Introducing Fitney
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Find your healthiest you with
            <span className="block text-yellow-500">Fitney</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-gray-600">
            Track workouts, monitor health, plan meals, and stay motivated. A brighter, balanced lifestyle starts here.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-yellow-200 transition-transform duration-200 hover:scale-[1.02] hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-3 text-base font-semibold text-gray-800 shadow-sm transition-colors duration-200 hover:bg-gray-50"
            >
              Explore Features
            </a>
          </div>
        </div>
      </div>

      {/* Decorative curved shape */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[120%] h-56 rounded-[48px] bg-yellow-100/60 blur-2xl" />
    </section>
  );
}
