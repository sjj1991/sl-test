export function ProductsListingSkeleton() {
  return (
    <div className="animate-pulse grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
      {Array(8)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="bg-gray-300 w-full aspect-square" />
        ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="animate-pulse container pt-6">
      <div className="flex gap-8">
        <div className="w-full sm:w-5/12 md:w-4/12 hidden sm:block">
          <div className="bg-gray-300 w-full aspect-square" />
        </div>
        <div className="w-full sm:w-7/12 md:w-8/12 grid gap-3 content-start">
          <div className="bg-gray-300 h-9 w-80" />
          <div className="bg-gray-300 h-7 w-16" />
          <div className="bg-gray-300 w-full aspect-square block sm:hidden" />
        </div>
      </div>
    </div>
  );
}
