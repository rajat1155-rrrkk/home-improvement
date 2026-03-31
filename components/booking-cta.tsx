import Link from "next/link";

export default function BookingCta() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-rose-700 via-rose-600 to-amber-500 p-8 text-white shadow-xl md:p-12">
      <p className="text-sm font-semibold uppercase tracking-wide text-rose-100">Pink City Priority Booking</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        Need urgent home repair in Jaipur?
      </h2>
      <p className="mt-4 max-w-2xl text-rose-50">
        Schedule trusted local home repair services with same day service in Jaipur for plumbing,
        electrical, appliance, and cleaning jobs.
      </p>
      <div className="mt-6">
        <Link
          href="/booking"
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
        >
          Book a Professional
        </Link>
      </div>
    </section>
  );
}
