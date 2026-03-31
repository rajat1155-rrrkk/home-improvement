import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allServices, getServiceBySlug } from "@/lib/services";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Jaipur HomeFix",
    };
  }

  return {
    title: `${service.title} in Jaipur | Jaipur HomeFix`,
    description: service.longDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-b from-rose-50 to-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="self-center">
            <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
              {service.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">{service.title}</h1>
            <p className="mt-4 leading-7 text-slate-600">{service.longDescription}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <p>
                Starting at <span className="font-semibold text-rose-700">₹{service.startingPrice}</span>
              </p>
              <p>Duration: {service.duration}</p>
              <p>Rating: {service.rating}/5</p>
            </div>
            <div className="mt-8 flex gap-3">
              <Link
                href="/booking"
                className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-rose-200 bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
              >
                Back to Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">What is Included</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-rose-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
            >
              {feature}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
