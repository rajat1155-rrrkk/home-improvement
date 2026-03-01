import services from "@/data/services.json";

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  startingPrice: number;
  category: string;
  duration: string;
  rating: number;
  image: string;
  popular: boolean;
  features: string[];
};

export const allServices: Service[] = services as Service[];

export const popularServices = allServices.filter((service) => service.popular);

export const serviceCategories = [
  "Plumber",
  "Electrician",
  "Carpenter",
  "Painter",
  "AC Technician",
  "RO Technician",
  "Cleaning",
  "Appliance",
  "Flooring",
  "Kitchen",
] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return allServices.find((service) => service.slug === slug);
}
