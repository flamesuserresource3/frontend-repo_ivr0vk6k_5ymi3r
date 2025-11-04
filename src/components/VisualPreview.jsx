export default function VisualPreview() {
  return (
    <section className="bg-gradient-to-b from-white to-yellow-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">See your progress at a glance</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Clean dashboards and friendly visuals keep motivation high.
          </p>
        </div>

        {/* Device mockups */}
        <div className="mx-auto grid max-w-6xl items-end gap-8 lg:grid-cols-2">
          {/* Laptop */}
          <div className="mx-auto w-full max-w-3xl rounded-[28px] bg-white p-4 shadow-xl ring-1 ring-gray-100">
            <div className="mb-3 h-3 w-20 rounded-full bg-gray-200" />
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-yellow-50 to-white p-6">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <div className="h-8 w-36 rounded-full bg-white shadow-sm ring-1 ring-gray-100" />
                <div className="h-8 w-24 rounded-full bg-white shadow-sm ring-1 ring-gray-100" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <div className="mb-2 h-4 w-28 rounded bg-gray-200" />
                  <div className="h-36 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-100" />
                </div>
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                      <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
                      <div className="h-10 rounded-lg bg-yellow-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="mx-auto w-full max-w-sm rounded-[40px] bg-white p-4 shadow-2xl ring-1 ring-gray-100">
            <div className="mx-auto h-6 w-28 rounded-full bg-gray-200" />
            <div className="mt-4 rounded-[28px] border border-gray-100 bg-gradient-to-b from-white to-yellow-50 p-4">
              <div className="mb-3 h-4 w-24 rounded bg-gray-200" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-gray-100">
                    <div className="h-10 w-10 rounded-xl bg-yellow-100" />
                    <div className="flex-1">
                      <div className="h-3 w-24 rounded bg-gray-200" />
                      <div className="mt-1 h-2 w-16 rounded bg-gray-200" />
                    </div>
                    <div className="h-6 w-10 rounded-full bg-yellow-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
