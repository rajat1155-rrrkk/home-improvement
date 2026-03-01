const steps = [
  {
    title: "Choose a Service",
    description: "Select from 10+ professional home improvement services in Jaipur.",
  },
  {
    title: "Book Your Slot",
    description: "Pick a preferred date and share your address in just a few steps.",
  },
  {
    title: "Get Same Day Support",
    description: "A verified local technician reaches your home with required tools.",
  },
];

export default function HowItWorks() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {steps.map((step, index) => (
        <div key={step.title} className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
