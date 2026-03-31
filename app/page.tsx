import Image from "next/image";
import Link from "next/link";
import BookingCta from "@/components/booking-cta";
import HowItWorks from "@/components/how-it-works";
import ReviewCard from "@/components/review-card";
import SectionHeading from "@/components/section-heading";
import ServiceCard from "@/components/service-card";
import { allServices, popularServices, serviceCategories } from "@/lib/services";

const reviews = [
  {
    name: "Neha Sharma",
    location: "Mansarovar, Jaipur",
    service: "Plumbing",
    review:
      "Booked a plumber for a kitchen leak and the technician arrived the same day. Very professional and clean work.",
  },
  {
    name: "Amit Jain",
    location: "Vaishali Nagar, Jaipur",
    service: "AC Repair",
    review:
      "Quick diagnosis and fair pricing. My split AC started cooling properly within an hour.",
  },
  {
    name: "Priya Gupta",
    location: "Malviya Nagar, Jaipur",
    service: "Home Cleaning",
    review:
      "Deep cleaning team was punctual and detail-oriented. The kitchen and bathrooms looked excellent.",
  },
];

const localAreas = [
  "Mansarovar",
  "Vaishali Nagar",
  "Malviya Nagar",
  "Jagatpura",
  "C-Scheme",
  "Raja Park",
  "Jhotwara",
  "Vidyadhar Nagar",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-rose-100/70 via-amber-50 to-white">
        <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-rose-200/70 blur-3xl" />
        <div className="absolute -right-16 top-16 h-64 w-64 rounded-full bg-amber-200/70 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div className="self-center">
            <p className="inline-flex rounded-full bg-rose-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-rose-700">
              Pink City Trusted Professionals
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Home Improvement Services in Jaipur
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Book verified professionals for plumbing, electrical, carpentry, cleaning, appliance
              repair, and more. We provide local home repair services with same day service in
              Jaipur for urgent needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {localAreas.slice(0, 6).map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-rose-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
              >
                Book a Service
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl md:h-auto md:min-h-[420px]">
            <Image
              src="/images/jaipur/hawa-mahal.jpg"
              alt="Hawa Mahal in Jaipur, Rajasthan"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-slate-800">
              Serving all key Jaipur localities
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Service Categories"
          description="Choose from top-rated experts for your home maintenance and renovation needs in Jaipur."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {serviceCategories.map((category) => (
            <div
              key={category}
              className="rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-rose-50/40 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Popular"
            title="Popular Services in Jaipur"
            description="Most-booked services by local families and apartment residents."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {popularServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Jaipur Highlights"
          title="Built for Pink City Homes"
          description="From old city houses to modern apartments, we tailor services for Jaipur's local housing needs."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
            <div className="relative h-44 w-full">
              <Image src="/images/jaipur/amer-fort.jpg" alt="Amer Fort Jaipur" fill className="object-cover" />
            </div>
            <p className="p-4 text-sm leading-6 text-slate-600">
              Reliable service teams familiar with traditional structures, moisture issues, and
              restoration-friendly work.
            </p>
          </article>
          <article className="overflow-hidden rounded-2xl border border-rose-100 bg-white shadow-sm">
            <div className="relative h-44 w-full">
              <Image
                src="/images/jaipur/albert-hall.jpg"
                alt="Albert Hall Museum Jaipur"
                fill
                className="object-cover"
              />
            </div>
            <p className="p-4 text-sm leading-6 text-slate-600">
              Skilled professionals for modern apartment maintenance, appliance care, and routine
              seasonal servicing.
            </p>
          </article>
          <article className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Local Promise</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Same day service in Jaipur for urgent jobs</li>
              <li>Background-verified local technicians</li>
              <li>Transparent starting prices before work begins</li>
              <li>Coverage across major Jaipur neighborhoods</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-rose-50/40 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple Process"
            title="How It Works"
            description="Booking professional home services should be quick and transparent."
          />
          <div className="mt-8">
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Customer Reviews"
          description="What Jaipur homeowners say about our service quality."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <BookingCta />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">Why Jaipur HomeFix?</h2>
          <p className="mt-3 leading-7 text-slate-600">
            We connect you with trusted local technicians for every major home maintenance need,
            from plumbing and electrical jobs to modular kitchen and flooring projects. With
            consistent quality checks and convenient scheduling, homeowners across Jaipur,
            Rajasthan can rely on us for affordable, professional, and same day support.
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Total listed services: <span className="font-semibold text-slate-700">{allServices.length}</span>
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Landmark imagery sourced from Wikimedia Commons (open-source / Creative Commons).
          </p>
        </div>
      </section>
    </>
  );
}
