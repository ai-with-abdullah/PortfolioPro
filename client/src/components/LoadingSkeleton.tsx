interface LoadingSkeletonProps {
  type?: 'project' | 'profile' | 'text' | 'card';
  className?: string;
}

export default function LoadingSkeleton({ type = 'card', className = '' }: LoadingSkeletonProps) {
  if (type === 'project') {
    return (
      <div className={`animate-pulse ${className}`} data-testid="loading-skeleton-project">
        <div className="gradient-border rounded-xl overflow-hidden">
          <div className="aspect-video skeleton"></div>
          <div className="p-6 space-y-4">
            <div className="skeleton h-6 w-3/4 rounded"></div>
            <div className="skeleton h-4 w-full rounded"></div>
            <div className="skeleton h-4 w-2/3 rounded"></div>
            <div className="flex gap-2">
              <div className="skeleton h-6 w-16 rounded-full"></div>
              <div className="skeleton h-6 w-20 rounded-full"></div>
              <div className="skeleton h-6 w-14 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'profile') {
    return (
      <div className={`animate-pulse text-center ${className}`} data-testid="loading-skeleton-profile">
        <div className="skeleton w-36 h-36 rounded-full mx-auto mb-8"></div>
        <div className="skeleton h-12 w-96 mx-auto mb-6 rounded"></div>
        <div className="skeleton h-6 w-80 mx-auto mb-4 rounded"></div>
        <div className="skeleton h-6 w-72 mx-auto mb-8 rounded"></div>
        <div className="flex justify-center gap-4">
          <div className="skeleton h-12 w-32 rounded-lg"></div>
          <div className="skeleton h-12 w-32 rounded-lg"></div>
          <div className="skeleton h-12 w-40 rounded-lg"></div>
        </div>
      </div>
    );
  }

  if (type === 'text') {
    return (
      <div className={`animate-pulse space-y-3 ${className}`} data-testid="loading-skeleton-text">
        <div className="skeleton h-4 w-full rounded"></div>
        <div className="skeleton h-4 w-5/6 rounded"></div>
        <div className="skeleton h-4 w-4/5 rounded"></div>
      </div>
    );
  }

  return (
    <div className={`animate-pulse ${className}`} data-testid="loading-skeleton-card">
      <div className="gradient-border p-6 rounded-lg">
        <div className="skeleton h-6 w-1/3 rounded mb-4"></div>
        <div className="space-y-3">
          <div className="skeleton h-4 w-full rounded"></div>
          <div className="skeleton h-4 w-3/4 rounded"></div>
        </div>
      </div>
    </div>
  );
}