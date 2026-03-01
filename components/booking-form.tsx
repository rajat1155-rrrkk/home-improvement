import { allServices } from "@/lib/services";

export default function BookingForm() {
  return (
    <form className="grid gap-5 rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
      <div className="md:col-span-1">
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 transition focus:ring"
        />
      </div>

      <div className="md:col-span-1">
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 transition focus:ring"
        />
      </div>

      <div className="md:col-span-2">
        <label htmlFor="address" className="mb-2 block text-sm font-medium text-slate-700">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          rows={4}
          placeholder="Enter your complete address in Jaipur"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 transition focus:ring"
        />
      </div>

      <div className="md:col-span-1">
        <label htmlFor="serviceType" className="mb-2 block text-sm font-medium text-slate-700">
          Service type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 transition focus:ring"
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {allServices.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="md:col-span-1">
        <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-slate-700">
          Preferred date
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-blue-300 transition focus:ring"
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Submit Booking Request
        </button>
      </div>
    </form>
  );
}
