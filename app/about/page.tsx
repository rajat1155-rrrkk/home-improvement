import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About Us | Jaipur HomeFix",
  description:
    "Learn about Jaipur HomeFix, a local home services marketplace serving Jaipur, Rajasthan.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Jaipur HomeFix"
        description="We are a Jaipur-based home services marketplace helping households book trusted professionals for repair, maintenance, and renovation work."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Our Mission</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To make local home repair services in Jaipur simple, transparent, and dependable for
              every household. We focus on quality technicians, fair pricing, and quick response.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">What We Offer</h2>
            <p className="mt-3 leading-7 text-slate-600">
              From plumbing and electrical jobs to modular kitchen work and tile flooring, we cover
              essential home improvement needs across Jaipur, Rajasthan with same day service
              options.
            </p>
          </article>
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:col-span-2">
            <h2 className="text-xl font-semibold text-slate-900">Local Expertise You Can Trust</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Our network includes experienced professionals who understand local housing types,
              apartment requirements, and customer expectations in Jaipur. We are committed to
              reliable service delivery and respectful in-home conduct.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
