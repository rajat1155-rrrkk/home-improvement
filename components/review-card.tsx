type ReviewCardProps = {
  name: string;
  location: string;
  review: string;
  service: string;
};

export default function ReviewCard({ name, location, review, service }: ReviewCardProps) {
  return (
    <article className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <p className="text-sm leading-6 text-slate-600">&ldquo;{review}&rdquo;</p>
      <div className="mt-4">
        <p className="font-semibold text-slate-900">{name}</p>
        <p className="text-xs text-slate-500">
          {location} • {service}
        </p>
      </div>
    </article>
  );
}
