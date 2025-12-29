export default function Card({ header }: { header: React.ReactNode }) {
  return (
    <div className="box-border aspect-3/5 max-h-11/12 w-11/12 rounded-4xl border-2 border-black bg-amber-100 sm:h-11/12 sm:w-auto">
      <div className="min-h-20 p-5">{header}</div>
    </div>
  );
}
