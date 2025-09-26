interface PhotoGridSkeletonProps {
  count: number;
}

export function PhotoGridSkeleton({ count }: PhotoGridSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div 
          key={i} 
          className="aspect-square bg-gray-200 animate-pulse rounded-sm"
        />
      ))}
    </>
  );
}