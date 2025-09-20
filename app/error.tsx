'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Something went wrong!</h2>
          <p className="text-text-secondary">We encountered an error while loading EchoStream.</p>
        </div>
        <button
          onClick={reset}
          className="bg-accent hover:bg-accent/80 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
