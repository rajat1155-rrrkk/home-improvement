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

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -right-16 top-16 h-64 w-64 rounded-full bg-cyan-100 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <div className="self-center">
            <p className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Trusted in Jaipur, Rajasthan
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Home Improvement Services in Jaipur
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Book verified professionals for plumbing, electrical, carpentry, cleaning, appliance
              repair, and more. We provide local home repair services with same day service in
              Jaipur for urgent needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Book a Service
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-3xl shadow-xl md:h-auto md:min-h-[420px]">
            <Image
              src="/images/services/hero-indian-home.svg"
              alt="Technician service visit in a modern home"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
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
              className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
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
          eyebrow="Simple Process"
          title="How It Works"
          description="Booking professional home services should be quick and transparent."
        />
        <div className="mt-8">
          <HowItWorks />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <BookingCta />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-8">
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
        </div>
      </section>
    </>
  );
}
