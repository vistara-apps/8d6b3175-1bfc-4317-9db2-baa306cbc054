export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto">
          <div className="w-full h-full rounded-full border-4 border-surface border-t-accent animate-spin"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-surface rounded w-32 mx-auto animate-pulse"></div>
          <div className="h-3 bg-surface rounded w-24 mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
