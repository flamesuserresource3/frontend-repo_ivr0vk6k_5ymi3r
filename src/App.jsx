import Hero from './components/Hero';
import Features from './components/Features';
import VisualPreview from './components/VisualPreview';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-yellow-400 shadow-sm flex items-center justify-center font-extrabold text-white">F</div>
            <span className="text-xl font-bold tracking-tight">Fitney</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#preview" className="hover:text-gray-900">Preview</a>
            <a href="#testimonials" className="hover:text-gray-900">Stories</a>
            <a href="#get-started" className="rounded-full bg-yellow-500 text-white px-4 py-2 font-semibold shadow-md shadow-yellow-200 hover:bg-yellow-600">Join Now</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <section id="preview">
          <VisualPreview />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Call-to-action */}
        <section id="get-started" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-500 p-8 sm:p-12 text-center shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Start your brighter health journey today</h3>
            <p className="mt-3 text-yellow-50/95 max-w-2xl mx-auto">
              Join thousands building consistent, joyful habits with Fitney.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-gray-900 shadow-md hover:bg-yellow-50"
              >
                Create free account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                Download app
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-700">
            <div className="h-8 w-8 rounded-xl bg-yellow-400 text-white font-extrabold flex items-center justify-center">F</div>
            <span>© {new Date().getFullYear()} Fitney</span>
          </div>
          <div className="text-sm text-gray-500">Healthier days, brighter lives.</div>
        </div>
      </footer>
    </div>
  );
}
