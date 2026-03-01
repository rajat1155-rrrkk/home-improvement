import type { Metadata } from "next";
import BookingForm from "@/components/booking-form";
import PageHero from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Book a Service | Jaipur HomeFix",
  description:
    "Book same day home repair services in Jaipur. Fill the booking form to schedule trusted technicians.",
};

export default function BookingPage() {
  return (
    <>
      <PageHero
        title="Book Home Service in Jaipur"
        description="Fill out the form and our team will connect you with a verified professional for same day service in Jaipur whenever possible."
      />
      <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <BookingForm />
      </section>
    </>
  );
}
