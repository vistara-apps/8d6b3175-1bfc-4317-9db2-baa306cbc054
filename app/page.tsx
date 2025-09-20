export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Welcome to EchoStream
        </h1>
        <p className="text-gray-300 mb-8 text-lg">
          Discover, create, and own music moments together. Support your favorite artists with ETH tips.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">🎵 Trending Tracks</h2>
            <p className="text-gray-400">Discover the hottest tracks right now</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">📻 Radio Rooms</h2>
            <p className="text-gray-400">Join live music rooms and connect with others</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">🎧 Your Playlists</h2>
            <p className="text-gray-400">Create and share collaborative playlists</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">💰 Artist Support</h2>
            <p className="text-gray-400">Tip your favorite artists with ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
