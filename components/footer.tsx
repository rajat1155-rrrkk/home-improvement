import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-slate-50">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-blue-800">Jaipur HomeFix</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Trusted local home repair services in Jaipur, Rajasthan. Fast booking and same day
            service in Jaipur for urgent home maintenance needs.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>
              <Link href="/services" className="hover:text-blue-700">
                All Services
              </Link>
            </li>
            <li>
              <Link href="/booking" className="hover:text-blue-700">
                Book a Technician
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-700">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Coverage</h4>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Serving Mansarovar, Vaishali Nagar, Malviya Nagar, Jagatpura, C-Scheme, and nearby
            areas across Jaipur.
          </p>
        </div>
      </div>
      <div className="border-t border-blue-100 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Jaipur HomeFix. All rights reserved.
      </div>
    </footer>
  );
}
