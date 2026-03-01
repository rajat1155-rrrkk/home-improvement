import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ServiceCard from "@/components/service-card";
import { allServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "All Services | Jaipur HomeFix",
  description:
    "Explore plumbing, electrical, carpentry, cleaning, AC, RO, and renovation services in Jaipur, Rajasthan.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Home Services in Jaipur"
        description="Browse all local home repair services available for homes across Jaipur, Rajasthan. Transparent starting prices and easy online booking."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </>
  );
}
