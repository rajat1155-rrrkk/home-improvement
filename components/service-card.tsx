import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {service.category}
          </span>
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="text-sm leading-6 text-slate-600">{service.shortDescription}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Starting at <span className="text-lg font-bold text-blue-700">₹{service.startingPrice}</span>
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}
