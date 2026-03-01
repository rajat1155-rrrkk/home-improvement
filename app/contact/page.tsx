import type { Metadata } from "next";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact Us | Jaipur HomeFix",
  description: "Contact Jaipur HomeFix for local home repair and improvement services in Jaipur.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Jaipur HomeFix"
        description="Reach our team for service booking support, pricing queries, or partnership opportunities in Jaipur, Rajasthan."
      />
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Customer Support</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Phone: +91 90000 12345</li>
              <li>Email: support@jaipurhomefix.in</li>
              <li>Hours: 8:00 AM - 9:00 PM (All Days)</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Office Location</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Jaipur HomeFix, Vaishali Nagar, Jaipur, Rajasthan, India
              <br />
              Same day service in Jaipur available for select areas.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
